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
            <strong>{{ previousSeasonTeamName }}</strong>
            <span>
              {{ previousSeasonTeamStanding?.points ?? 0 }} punten na
              {{ previousSeasonTeamStanding?.played ?? 0 }} matchen
            </span>
          </template>

          <template v-else>
            <strong>{{ currentSeasonTeamStanding?.position ?? '-' }}e plaats</strong>
            <span v-if="currentSeasonTeamStanding">
              {{ currentSeasonTeamStanding.points }} punten na
              {{ currentSeasonTeamStanding.played }} matchen
            </span>
            <span v-else>
              Reeks 1 · Liga Borgloon–Heers
            </span>
          </template>
        </aside>
      </div>
    </section>

    <section class="section-block">
      <div class="container">

        <!-- Seizoen kiezen -->
        <div class="season-toolbar">
          <label for="season-select">Kies een seizoen</label>

          <select
            id="season-select"
            v-model="selectedSeason"
            class="season-select"
          >
            <option value="2026-2027">2026–2027</option>
            <option value="2025-2026">2025–2026</option>
          </select>
        </div>

        <!-- ===================================================== -->
        <!-- SEIZOEN 2026-2027 -->
        <!-- ===================================================== -->

        <div v-if="!isPreviousSeason" class="competition-layout">

          <!-- Wedstrijden -->
          <div
            class="panel panel--soft competition-panel competition-panel--results"
          >
            <h3 class="block-title">Wedstrijden 2026–2027</h3>

            <div class="match-listing">
              <article
                v-for="match in newSeasonMatches"
                :key="match.key"
                class="match-line match-line--with-location"
              >
                <span class="match-line__date">
                  {{ match.meta }}
                </span>

                <span
                  class="match-line__team match-line__team--home match-line__team--primary"
                >
                  {{ match.homeTeam }}
                </span>

                <span class="match-line__score">
                  {{ match.score }}
                </span>

                <span
                  class="match-line__team match-line__team--secondary"
                >
                  {{ match.awayTeam }}
                </span>

                <span class="match-line__tag">
                  {{ match.tag }}
                </span>

                <span class="match-line__location">
                  {{ match.location }}
                </span>
              </article>
            </div>
          </div>

          <!-- Klassement -->
          <div
            class="panel panel--red competition-panel competition-panel--standings"
          >
            <h3 class="block-title">Klassement 2026–2027</h3>

            <!-- Laden -->
            <p v-if="rankingLoading">
              Klassement laden...
            </p>

            <!-- Fout -->
            <p v-else-if="rankingError">
              Het klassement kon momenteel niet geladen worden.
            </p>

            <!-- Klassement -->
            <div v-else class="table-wrap">
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
                    <th class="standings-table__extra">DS</th>
                    <th>Pts</th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="row in currentStandings"
                    :key="row.team"
                    :class="{
                      'is-team-row': isOurTeam(row.team)
                    }"
                  >
                    <td
                      data-label="#"
                      class="standings-table__rank"
                    >
                      {{ row.position }}
                    </td>

                    <td data-label="Ploeg">
                      {{ row.team }}
                    </td>

                    <td data-label="GP">
                      {{ row.played }}
                    </td>

                    <td data-label="W">
                      {{ row.won }}
                    </td>

                    <td data-label="G">
                      {{ row.drawn }}
                    </td>

                    <td data-label="V">
                      {{ row.lost }}
                    </td>

                    <td
                      data-label="DV"
                      class="standings-table__extra"
                    >
                      {{ row.goalsFor }}
                    </td>

                    <td
                      data-label="DT"
                      class="standings-table__extra"
                    >
                      {{ row.goalsAgainst }}
                    </td>

                    <td
                      data-label="DS"
                      class="standings-table__extra"
                    >
                      {{ formatGoalDifference(row.goalDifference) }}
                    </td>

                    <td data-label="Pts">
                      {{ row.points }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- ===================================================== -->
        <!-- SEIZOEN 2025-2026 -->
        <!-- ===================================================== -->

        <div
          v-if="isPreviousSeason"
          class="competition-layout"
        >

          <!-- Wedstrijden vorig seizoen -->
          <div
            class="panel panel--soft competition-panel competition-panel--results"
          >
            <h3 class="block-title">
              Wedstrijden 2025–2026
            </h3>

            <p v-if="previousMatchesLoading">
              Wedstrijden laden...
            </p>

            <p v-else-if="previousMatchesError">
              De wedstrijden konden momenteel niet geladen worden.
            </p>

            <div v-else class="match-listing">
              <article
                v-for="match in combinedMatches"
                :key="match.key"
                class="match-line"
              >
                <span class="match-line__date">
                  {{ match.meta }}
                </span>

                <span
                  class="match-line__team match-line__team--home match-line__team--primary"
                >
                  {{ match.homeTeam }}
                </span>

                <span class="match-line__score">
                  {{ match.score }}
                </span>

                <span
                  class="match-line__team match-line__team--secondary"
                >
                  {{ match.awayTeam }}
                </span>

                <span class="match-line__tag">
                  {{ match.tag }}
                </span>
              </article>
            </div>
          </div>

          <!-- Eindklassement vorig seizoen -->
          <div
            class="panel panel--red competition-panel competition-panel--standings"
          >
            <h3 class="block-title">
              Eindklassement 2025–2026
            </h3>

            <p v-if="rankingLoading">
              Klassement laden...
            </p>

            <p v-else-if="rankingError">
              Het klassement kon momenteel niet geladen worden.
            </p>

            <div v-else class="table-wrap">
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
                    <th class="standings-table__extra">DS</th>
                    <th>Pts</th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="row in previousStandings"
                    :key="row.team"
                    :class="{
                      'is-team-row': isOurTeam(row.team)
                    }"
                  >
                    <td
                      data-label="#"
                      class="standings-table__rank"
                    >
                      {{ row.position }}
                    </td>

                    <td data-label="Ploeg">
                      {{ row.team }}
                    </td>

                    <td data-label="GP">
                      {{ row.played }}
                    </td>

                    <td data-label="W">
                      {{ row.won }}
                    </td>

                    <td data-label="G">
                      {{ row.drawn }}
                    </td>

                    <td data-label="V">
                      {{ row.lost }}
                    </td>

                    <td
                      data-label="DV"
                      class="standings-table__extra"
                    >
                      {{ row.goalsFor }}
                    </td>

                    <td
                      data-label="DT"
                      class="standings-table__extra"
                    >
                      {{ row.goalsAgainst }}
                    </td>

                    <td
                      data-label="DS"
                      class="standings-table__extra"
                    >
                      {{ formatGoalDifference(row.goalDifference) }}
                    </td>

                    <td data-label="Pts">
                      {{ row.points }}
                    </td>
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
import { computed, onMounted, ref } from 'vue';
import { agenda, teamName } from '@/data/clubData';
import type { MatchResult, StandingRow } from '@/types';

/*
|--------------------------------------------------------------------------
| Seizoen
|--------------------------------------------------------------------------
*/

const selectedSeason = ref('2026-2027');

const isPreviousSeason = computed(
  () => selectedSeason.value === '2025-2026',
);

/*
|--------------------------------------------------------------------------
| Teamnaam herkennen
|--------------------------------------------------------------------------
*/

const normalizeTeamName = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');

const teamAliases = [
  'onder de toren veulen',
  'zvk onder den toren veulen',
  'zvk odt',
  teamName,
];

const isOurTeam = (value: string) =>
  teamAliases.some(
    (alias) =>
      normalizeTeamName(value) === normalizeTeamName(alias),
  );

const currentStandings = ref<StandingRow[]>([]);
const previousStandings = ref<StandingRow[]>([]);
const rankingLoading = ref(true);
const rankingError = ref(false);

const fetchStandings = async (fileName: string): Promise<StandingRow[]> => {
  const response = await fetch(
    `${import.meta.env.BASE_URL}data/${fileName}`,
  );

  if (!response.ok) {
    throw new Error(
      `Klassement kon niet geladen worden: ${response.status}`,
    );
  }

  const data = (await response.json()) as StandingRow[];

  return data.sort((a, b) => a.position - b.position);
};

const loadStandings = async () => {
  rankingLoading.value = true;
  rankingError.value = false;

  try {
    [currentStandings.value, previousStandings.value] = await Promise.all([
      fetchStandings('ranking.json'),
      fetchStandings('ranking-2025-2026.json'),
    ]);
  } catch (error) {
    console.error(
      'Fout bij het laden van het klassement:',
      error,
    );

    rankingError.value = true;
  } finally {
    rankingLoading.value = false;
  }
};

onMounted(() => {
  loadStandings();
  loadPreviousMatches();
});

/*
|--------------------------------------------------------------------------
| Huidige positie ODT
|--------------------------------------------------------------------------
*/

const currentSeasonTeamStanding = computed(() =>
  currentStandings.value.find((row) =>
    isOurTeam(row.team),
  ),
);

/*
|--------------------------------------------------------------------------
| Klassement 2025-2026
|--------------------------------------------------------------------------
*/

const previousSeasonTeamStanding = computed(() =>
  previousStandings.value.find((row) => isOurTeam(row.team)),
);

const previousSeasonTeamName = computed(
  () => previousSeasonTeamStanding.value?.team ?? teamName,
);

const formatGoalDifference = (goalDifference: number) =>
  goalDifference > 0 ? `+${goalDifference}` : goalDifference;

/*
|--------------------------------------------------------------------------
| Wedstrijden 2026-2027
|--------------------------------------------------------------------------
*/

const seasonMatches = [...agenda].sort(
  (a, b) =>
    new Date(a.date).getTime() -
    new Date(b.date).getTime(),
);

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('nl-BE', {
    day: '2-digit',
    month: 'short',
  }).format(new Date(date));

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
    score:
      match.homeScore !== undefined && match.awayScore !== undefined
        ? `${match.homeScore} - ${match.awayScore}`
        : '-',
    tag: match.description.startsWith('Thuis')
      ? 'Thuis'
      : 'Uit',
    location: match.venue,
  };
});

/*
|--------------------------------------------------------------------------
| Wedstrijden 2025-2026
|--------------------------------------------------------------------------
*/

const previousResults = ref<MatchResult[]>([]);
const previousMatchesLoading = ref(true);
const previousMatchesError = ref(false);

const loadPreviousMatches = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.BASE_URL}data/matches-2025-2026.json`,
    );

    if (!response.ok) {
      throw new Error(
        `Wedstrijden konden niet geladen worden: ${response.status}`,
      );
    }

    previousResults.value = (await response.json()) as MatchResult[];
  } catch (error) {
    console.error('Fout bij het laden van de wedstrijden:', error);
    previousMatchesError.value = true;
  } finally {
    previousMatchesLoading.value = false;
  }
};

const combinedMatches = computed(() => [
  ...[...previousResults.value]
    .sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime(),
    )
    .map((match) => ({
      key: `result-${match.id}`,
      meta: formatDate(match.date),
      homeTeam: match.home
        ? teamName
        : match.opponent,
      awayTeam: match.home
        ? match.opponent
        : teamName,
      score: match.home
        ? `${match.scored} - ${match.conceded}`
        : `${match.conceded} - ${match.scored}`,
      tag: match.home ? 'Thuis' : 'Uit',
    })),
]);
</script>
