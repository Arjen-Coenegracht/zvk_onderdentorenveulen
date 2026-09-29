import fs from 'node:fs/promises';
import path from 'node:path';

const playerSelection = process.env.PLAYER_ID ?? process.argv[2];
const playerId = playerSelection?.split('|').at(-1)?.trim();

const parseStat = (value, label, current) => {
  const input = (value ?? '').trim();
  if (input === '') return current;
  if (!/^\+?\d+$/.test(input)) {
    throw new Error(`${label}: gebruik +2 om op te tellen, 2 als totaal, of laat leeg om te behouden.`);
  }

  const amount = Number(input);
  const result = input.startsWith('+') ? current + amount : amount;
  if (!Number.isSafeInteger(amount) || !Number.isSafeInteger(result) || result < 0) {
    throw new Error(`${label} levert geen geldig geheel getal op.`);
  }
  return result;
};

if (!playerId) {
  throw new Error('Geen speler gekozen.');
}

const statsFile = path.resolve('public/data/player-stats-2026-2027.json');
const allStats = JSON.parse(await fs.readFile(statsFile, 'utf-8'));
const playerStats = allStats.find((item) => item.playerId === playerId);

if (!playerStats) {
  throw new Error(`Speler met ID "${playerId}" niet gevonden.`);
}

const values = {
  goals: parseStat(process.env.GOALS ?? process.argv[3], 'Goals', playerStats.goals),
  assists: parseStat(process.env.ASSISTS ?? process.argv[4], 'Assists', playerStats.assists),
  yellowCards: parseStat(process.env.YELLOW_CARDS ?? process.argv[5], 'Gele kaarten', playerStats.yellowCards),
  redCards: parseStat(process.env.RED_CARDS ?? process.argv[6], 'Rode kaarten', playerStats.redCards),
};

Object.assign(playerStats, values);
await fs.writeFile(statsFile, `${JSON.stringify(allStats, null, 2)}\n`, 'utf-8');

console.log(`✅ Statistieken van ${playerId} aangepast.`);
console.table(values);
