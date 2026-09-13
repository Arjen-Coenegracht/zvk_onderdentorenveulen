<template>
  <div class="page">
    <section class="inner-hero">
      <div class="container inner-hero__grid">
        <div>
          <p class="section-kicker">Wedstrijden</p>
          <h1 class="inner-title">Resultaten en klassement.</h1>
          <p class="inner-copy">
            Wat er gespeeld is, wat er nog komt, en waar ODT op dit moment staat.
          </p>
        </div>

        <aside class="inner-sidebox">
          <p class="section-kicker">Seizoen {{ selectedSeason }}</p>
          <template v-if="isPreviousSeason">
            <strong>{{ currentTeamName }}</strong>
            <span>
              {{ currentTeamStanding?.points ?? 0 }} punten na
              {{ currentTeamStanding?.played ?? 0 }} matchen
            </span>
          </template>
          <template v-else>
            <strong>21 wedstrijden</strong>
            <span>Reeks 1 · Liga Borgloon–Heers</span>
          </template>
        </aside>
      </div>
    </section>

    <section class="section-block">
      <div class="container">
        <div class="season-toolbar">
          <label for="season-select">Kies een seizoen</label>
          <select id="season-select" v-model="selectedSeason" class="season-select">
            <option value="2026-2027">2026–2027</option>
            <option value="2025-2026">2025–2026</option>
          </select>
        </div>

        <div v-if="!isPreviousSeason" class="competition-layout">
          <div class="panel panel--soft competition-panel competition-panel--results">
            <h3 class="block-title">Wedstrijden 2026–2027</h3>
            <div class="match-listing">
              <article v-for="match in newSeasonMatches" :key="match.key" class="match-line match-line--with-location">
                <span class="match-line__date">{{ match.meta }}</span>
                <span class="match-line__team match-line__team--home match-line__team--primary">{{ match.homeTeam }}</span>
                <span class="match-line__score">-</span>
                <span class="match-line__team match-line__team--secondary">{{ match.awayTeam }}</span>
                <span class="match-line__tag">{{ match.tag }}</span>
                <span class="match-line__location">{{ match.location }}</span>
              </article>
            </div>
          </div>

          <div class="panel panel--red competition-panel competition-panel--standings">
            <h3 class="block-title">Klassement 2026–2027</h3>
            <div class="table-wrap">
              <table class="standings-table">
                <thead><tr><th>#</th><th>Ploeg</th><th>GP</th><th>W</th><th>G</th><th>V</th><th>DV</th><th>DT</th><th>Pts</th></tr></thead>
                <tbody>
                  <tr v-for="row in provisionalStandings" :key="row.team" :class="{ 'is-team-row': row.team === teamName }">
                    <td data-label="#">{{ row.position }}</td><td data-label="Ploeg">{{ row.team }}</td>
                    <td data-label="GP">0</td><td data-label="W">0</td><td data-label="G">0</td><td data-label="V">0</td>
                    <td data-label="DV">0</td><td data-label="DT">0</td><td data-label="Pts">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div v-if="false" class="panel panel--soft competition-panel">
          <p class="section-kicker">Seizoen 2026–2027</p>
          <h2 class="block-title">Wedstrijdkalender</h2>
          <div class="season-schedule">
            <article v-for="match in seasonMatches" :key="`${match.date}-${match.title}`" class="schedule-card">
              <div class="schedule-card__date">
                <strong>{{ formatDay(match.date) }}</strong>
                <span>{{ formatMonth(match.date) }}</span>
              </div>
              <div class="schedule-card__match">
                <span>{{ match.time }} · {{ match.description }}</span>
                <h3>{{ formatMatchTitle(match.title) }}</h3>
                <p v-if="match.venue" class="schedule-card__venue">
                  {{ match.venue }}
                </p>
              </div>
            </article>
          </div>
        </div>

        <div v-if="isPreviousSeason" class="competition-layout">
        <div class="panel panel--soft competition-panel competition-panel--results">
          <h3 class="block-title">Wedstrijden 2025–2026</h3>
          <div class="match-listing">
            <article v-for="match in combinedMatches" :key="match.key" class="match-line">
              <span class="match-line__date">{{ match.meta }}</span>
              <span class="match-line__team match-line__team--home match-line__team--primary">
                {{ match.homeTeam }}
              </span>
              <span class="match-line__score">{{ match.score }}</span>
              <span class="match-line__team match-line__team--secondary">
                {{ match.awayTeam }}
              </span>
              <span class="match-line__tag">
                {{ match.tag }}
              </span>
            </article>
          </div>
        </div>

        <div class="panel panel--red competition-panel competition-panel--standings">
          <h3 class="block-title">Eindklassement 2025–2026</h3>
          <div class="table-wrap">
            <table class="standings-table">
              <thead>
                <tr>
                  <th class="standings-table__rank">#</th>
                  <th>Ploeg</th>
                  <th>GP</th>
                  <th>W</th>
                  <th>G</th>
                  <th>V</th>
                  <th class="standings-table__extra">DV</th>
                  <th class="standings-table__extra">DT</th>
                  <th>Pts</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="row in standings"
                  :key="row.team"
                  :class="{ 'is-team-row': row.team === currentTeamName }"
                >
                  <td data-label="#" class="standings-table__rank">{{ row.position }}</td>
                  <td data-label="Ploeg">{{ row.team }}</td>
                  <td data-label="GP">{{ row.played }}</td>
                  <td data-label="W">{{ row.won }}</td>
                  <td data-label="G">{{ row.drawn }}</td>
                  <td data-label="V">{{ row.lost }}</td>
                  <td data-label="DV" class="standings-table__extra">{{ row.goalsFor }}</td>
                  <td data-label="DT" class="standings-table__extra">{{ row.goalsAgainst }}</td>
                  <td data-label="Pts">{{ row.points }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { agenda, results, standings, teamName } from '@/data/clubData';

const selectedSeason = ref('2026-2027');
const isPreviousSeason = computed(() => selectedSeason.value === '2025-2026');

const normalizeTeamName = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');

const teamAliases = ['onder de toren veulen', 'zvk odt', teamName];

const currentTeamStanding =
  standings.find((row) =>
    teamAliases.some((alias) => normalizeTeamName(row.team) === normalizeTeamName(alias)),
  ) ?? standings[0];

const currentTeamName = currentTeamStanding.team;

const seasonMatches = [...agenda].sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
);

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('nl-BE', {
    day: '2-digit',
    month: 'short',
  }).format(new Date(date));

const formatDay = (date: string) =>
  new Intl.DateTimeFormat('nl-BE', { day: '2-digit' }).format(new Date(date));

const formatMonth = (date: string) =>
  new Intl.DateTimeFormat('nl-BE', { month: 'short' }).format(new Date(date));

const formatMatchTitle = (title: string) => title.replace(' vs. ', ' – ');

const splitMatchTitle = (title: string) => {
  const [home, away] = title.split(' vs. ');
  return {
    home: home ?? title,
    away: away ?? '',
  };
};

const newSeasonMatches = seasonMatches.map((match) => {
  const teams = splitMatchTitle(match.title);
  return {
    key: `${match.date}-${match.title}`,
    meta: `${formatDate(match.date)} - ${match.time}`,
    homeTeam: teams.home,
    awayTeam: teams.away,
    tag: match.description.startsWith('Thuis') ? 'Thuis' : 'Uit',
    location: match.venue,
  };
});

const provisionalStandings = Array.from(
  new Set(newSeasonMatches.flatMap((match) => [match.homeTeam, match.awayTeam])),
)
  .sort((a, b) => a.localeCompare(b, 'nl-BE'))
  .map((team, index) => ({ position: index + 1, team }));

const combinedMatches = [
  ...[...results].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((match) => ({
    key: `result-${match.id}`,
    meta: formatDate(match.date),
    homeTeam: match.home ? teamName : match.opponent,
    awayTeam: match.home ? match.opponent : teamName,
    score: match.home
      ? `${match.scored} - ${match.conceded}`
      : `${match.conceded} - ${match.scored}`,
    tag: match.home ? 'Thuis' : 'Uit',
  })),
];
</script>
