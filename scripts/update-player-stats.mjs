import fs from 'node:fs/promises';
import path from 'node:path';

const playerSelection = process.env.PLAYER_ID ?? process.argv[2];
const playerId = playerSelection?.split('|').at(-1)?.trim();

const parseStat = (value, label) => {
  if (!/^\d+$/.test(value ?? '')) {
    throw new Error(`${label} moet een positief geheel getal of 0 zijn.`);
  }

  return Number(value);
};

if (!playerId) {
  throw new Error('Geen speler gekozen.');
}

const values = {
  goals: parseStat(process.env.GOALS ?? process.argv[3], 'Goals'),
  assists: parseStat(process.env.ASSISTS ?? process.argv[4], 'Assists'),
  yellowCards: parseStat(process.env.YELLOW_CARDS ?? process.argv[5], 'Gele kaarten'),
  redCards: parseStat(process.env.RED_CARDS ?? process.argv[6], 'Rode kaarten'),
};

const statsFile = path.resolve('public/data/player-stats-2026-2027.json');
const allStats = JSON.parse(await fs.readFile(statsFile, 'utf-8'));
const playerStats = allStats.find((item) => item.playerId === playerId);

if (!playerStats) {
  throw new Error(`Speler met ID "${playerId}" niet gevonden.`);
}

Object.assign(playerStats, values);
await fs.writeFile(statsFile, `${JSON.stringify(allStats, null, 2)}\n`, 'utf-8');

console.log(`✅ Statistieken van ${playerId} aangepast.`);
console.table(values);
