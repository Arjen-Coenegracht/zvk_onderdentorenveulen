import * as cheerio from "cheerio";
import fs from "node:fs/promises";
import path from "node:path";

const URL =
  "https://app.twizzit.com/v2/ajax/planning/group/ranking/table" +
  "?group=1480202&series=222687";

async function updateRanking() {
  console.log("Rangschikking ophalen van Twizzit...");

  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error(
      `Twizzit request mislukt: ${response.status} ${response.statusText}`
    );
  }

  const html = await response.text();

  const $ = cheerio.load(html);

  const ranking = [];

  $("table.ranking-table tbody tr").each((_, row) => {
    const cells = $(row)
      .find("td")
      .map((_, cell) => $(cell).text().trim())
      .get();

    if (cells.length < 10) {
      return;
    }

    ranking.push({
      position: Number(cells[0]),
      team: cells[1],
      played: Number(cells[2]),
      won: Number(cells[3]),
      lost: Number(cells[4]),
      drawn: Number(cells[5]),
      goalsFor: Number(cells[6]),
      goalsAgainst: Number(cells[7]),
      goalDifference: Number(cells[8]),
      points: Number(cells[9]),
    });
  });

  if (ranking.length === 0) {
    throw new Error("Geen ploegen gevonden in de Twizzit-response.");
  }

  const outputDirectory = path.resolve("public/data");
  const outputFile = path.join(outputDirectory, "ranking.json");

  await fs.mkdir(outputDirectory, { recursive: true });

  await fs.writeFile(
    outputFile,
    JSON.stringify(ranking, null, 2),
    "utf-8"
  );

  console.log(`✅ ${ranking.length} ploegen gevonden.`);
  console.log(`💾 Rangschikking opgeslagen in ${outputFile}`);

  console.table(ranking);
}

updateRanking().catch((error) => {
  console.error("❌ Rangschikking kon niet worden bijgewerkt.");
  console.error(error);
  process.exit(1);
});