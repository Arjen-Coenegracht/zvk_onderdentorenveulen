import fs from 'node:fs/promises';
import path from 'node:path';

const matchSelection = process.env.MATCH_ID ?? process.argv[2];
const matchId = matchSelection?.split('|').at(-1)?.trim();
const ourScoreInput = process.env.OUR_SCORE ?? process.argv[3];
const opponentScoreInput = process.env.OPPONENT_SCORE ?? process.argv[4];

const parseScore = (value, label) => {
  if (!/^\d+$/.test(value ?? '')) {
    throw new Error(`${label} moet een positief geheel getal of 0 zijn.`);
  }

  return Number(value);
};

if (!matchId) {
  throw new Error('Geen wedstrijd-ID opgegeven.');
}

const ourScore = parseScore(ourScoreInput, 'Onze score');
const opponentScore = parseScore(opponentScoreInput, 'Score tegenstander');
const matchesFile = path.resolve('public/data/matches-2026-2027.json');
const matches = JSON.parse(await fs.readFile(matchesFile, 'utf-8'));
const match = matches.find((item) => item.id === matchId);

if (!match) {
  throw new Error(`Wedstrijd met ID "${matchId}" niet gevonden.`);
}

match.homeScore = match.home ? ourScore : opponentScore;
match.awayScore = match.home ? opponentScore : ourScore;

await fs.writeFile(matchesFile, `${JSON.stringify(matches, null, 2)}\n`, 'utf-8');

console.log(`✅ ${match.title} aangepast naar ${match.homeScore} - ${match.awayScore}.`);
