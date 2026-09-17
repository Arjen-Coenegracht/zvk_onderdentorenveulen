<template>
  <div class="home-page">
    <section class="hero-home">
      <div class="hero-home__bg"></div>
      <div class="hero-home__orbs" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="hero-home__mesh" aria-hidden="true"></div>
      <div class="hero-home__ball"></div>

      <div class="hero-home__inner">
        <div class="crest-block">
          <img
            :src="logoImage"
            alt="Logo ZVK Onder Den Toren Veulen"
            class="crest-logo"
          />
        </div>

        <p class="hero-tag">Zaalvoetbalclub</p>
        <h1 class="hero-title">
          Onder Den
          <span>Toren</span>
          Veulen
        </h1>
        <p class="hero-subtitle">Kleine goals, grote dorst.</p>
      </div>

      <a
        v-if="!hasScrolled"
        href="#home-next-section"
        class="scroll-mark scroll-mark--prominent"
        aria-label="Scroll naar beneden"
      >
        <span>Scroll</span>
        <div></div>
      </a>
    </section>

    <section id="home-next-section" class="stats-strip">
      <div class="stats-strip__hero">
        <span>Volgende match</span>
        <strong>{{ nextMatch ? formatMatchTitle(nextMatch.title) : 'Seizoen 2026–2027 volgt' }}</strong>
        <small>{{ nextMatch ? `${formatShortDate(nextMatch.date)} - ${nextMatch.time}` : 'Nog geen nieuwe kalender beschikbaar' }}</small>
        <p v-if="nextMatch?.venue" class="stats-strip__location">
          {{ nextMatch.venue }}
        </p>
      </div>
    </section>

    <section class="section-block section-block--dark">
      <div class="container">
        <div class="section-heading">
          <p class="section-kicker">Club</p>
          <h2>Meer dan gewoon een ploeg.</h2>
        </div>

        <div class="club-grid">
          <div class="club-text">
            <p>
              Een bende gasten uit de regio Heers die nog altijd dromen van een profcarrière,
              al is de kans groter dat we ooit ontdekt worden aan de toog dan op het veld.
              <br />
              <br />
              In de zaal is het plan simpel: achteraan alles dichtgooien, in balverlies samen
              panikeren en vooraan hopen op een toevalstreffer, een afgeweken bal of een flits
              van klasse die niemand zag aankomen.
            </p>
            <p>
              Techniek zit er soms in, conditie meestal niet. Maar zolang er hard genoeg geroepen
              wordt alsof we weten waar we mee bezig zijn en niet iedereen al na twee minuten
              met de handen op de knieën staat, mogen we eigenlijk niet klagen.
            </p>
          </div>

          <aside class="notice-panel focus-panel">
            <p class="section-kicker">DE ODT-MENTALITEIT</p>
            <div class="focus-stack">
              <article v-for="item in clubValues" :key="item" class="focus-item">
                <span></span>
                <p>{{ item }}</p>
              </article>
            </div>
          </aside>
        </div>

        <div class="team-gallery">
          <div class="team-gallery__cta">
            <RouterLink class="button button-primary" to="/spelers">
              Bekijk de spelerskern
            </RouterLink>
          </div>
          <article class="team-gallery__item team-gallery__item--large">
            <img
              :src="teamPhotoOne"
              alt="Teamfoto van ZVK Onder Den Toren Veulen"
            />
          </article>
          <article class="team-gallery__item">
            <img
              :src="teamPhotoTwo"
              alt="Tweede teamfoto van ZVK Onder Den Toren Veulen"
            />
          </article>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="container home-grid-two">
        <div class="panel panel--soft home-info-panel">
          <SectionTitle
            eyebrow="Komt eraan"
            title="Agenda"
            description="De komende momenten op en rond de club."
          />

          <div class="home-panel-action">
            <RouterLink class="button button-primary" to="/competitie">
              Bekijk alle wedstrijden
            </RouterLink>
          </div>

          <div class="agenda-list">
            <p v-if="displayedAgenda.length === 0" class="home-empty-state">
              Nog geen wedstrijden beschikbaar voor seizoen 2026–2027.
            </p>
            <article v-for="item in displayedAgenda" :key="item.title" class="agenda-item">
              <span>{{ formatDate(item.date) }}</span>
              <div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.time }} · {{ item.description }}</p>
                <p v-if="item.venue" class="agenda-item__venue">
                  {{ item.venue }}
                </p>
              </div>
            </article>
          </div>
        </div>

        <div class="panel panel--red home-info-panel">
          <SectionTitle
            eyebrow="Stand"
            title="Klassement"
            description="Een snelle blik op de top van de reeks."
          />

          <div class="home-panel-action home-panel-action--top">
            <RouterLink class="button button-primary" to="/competitie">
              Bekijk volledige klassement
            </RouterLink>
          </div>

          <p v-if="currentTeamStanding" class="home-standing-summary">
            ODT staat momenteel {{ currentTeamStanding.position }}e met
            {{ currentTeamStanding.points }} punten.
          </p>

          <div v-if="homeStandings.length" class="table-wrap">
            <table class="standings-table home-standings-table">
              <thead>
                <tr>
                  <th class="standings-table__rank">#</th>
                  <th>Ploeg</th>
                  <th>GP</th>
                  <th class="standings-table__extra">DV</th>
                  <th class="standings-table__extra">DT</th>
                  <th class="standings-table__extra">DS</th>
                  <th>Pts</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="row in homeStandings"
                  :key="row.team"
                  :class="{ 'is-team-row': isOurTeam(row.team) }"
                >
                  <td class="standings-table__rank">{{ row.position }}</td>
                  <td>{{ row.team }}</td>
                  <td>{{ row.played }}</td>
                  <td class="standings-table__extra">{{ row.goalsFor }}</td>
                  <td class="standings-table__extra">{{ row.goalsAgainst }}</td>
                  <td class="standings-table__extra">{{ formatGoalDifference(row.goalDifference) }}</td>
                  <td>{{ row.points }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p v-else-if="homeRankingLoading" class="home-empty-state home-empty-state--light">
            Klassement laden...
          </p>
          <p v-else class="home-empty-state home-empty-state--light">
            Nog geen klassement beschikbaar voor seizoen 2026–2027.
          </p>
        </div>
      </div>
    </section>

    <section class="section-block section-block--dark">
      <div class="container">
        <SectionTitle
          eyebrow="Naast het veld"
          title="Meer dan alleen voetbal"
          description="Ook buiten de lijnen leeft ODT verder, met uitstapjes en partners die de club mee dragen."
        />

        <div class="home-grid-two home-grid-two--showcase">
          <div class="panel panel--soft home-info-panel">
            <SectionTitle
              eyebrow="Laatste uitstap"
              title="Eindhoven"
              description="Van ontbijt tot groepsfoto: Eindhoven was de laatste uitstap van ODT en kreeg meteen een eigen album."
            />

            <div class="home-panel-action home-panel-action--top">
              <RouterLink to="/uitstapjes" class="button button-primary">
                Bekijk alle uitstapjes
              </RouterLink>
            </div>

            <article class="home-showcase-feature">
              <div class="home-showcase-feature__image-wrap">
                <img
                  :src="eindhovenGroupImage"
                  alt="Groepsfoto van ODT tijdens de uitstap naar Eindhoven"
                  class="home-showcase-feature__image js-lightbox-trigger"
                />
              </div>
            </article>
          </div>

          <div class="panel panel--red home-info-panel home-info-panel--sponsors">
            <SectionTitle
              eyebrow="Partners"
              title="Hoofdsponsors"
              description="Dankzij deze partners blijft ODT draaien, op en naast het veld."
            />

            <div class="home-panel-action home-panel-action--top">
              <RouterLink to="/sponsors" class="button button-primary">
                Bekijk alle sponsors
              </RouterLink>
            </div>

            <div class="sponsor-grid sponsor-grid--home-featured">
              <article
                v-for="sponsor in featuredSponsors"
                :key="sponsor.name"
                class="sponsor-card sponsor-card--styled"
                :data-accent="sponsor.accent"
              >
                <div v-if="sponsor.image" class="sponsor-card__image-wrap">
                  <img
                    :src="sponsor.image"
                    :alt="`Sponsorbeeld van ${sponsor.name}`"
                    :class="getFeaturedSponsorImageClasses(sponsor.name)"
                  />
                </div>
                <p class="section-kicker">{{ sponsor.category }}</p>
                <h3>{{ sponsor.name }}</h3>
                <p>{{ sponsor.description }}</p>
                <RouterLink to="/sponsors" class="text-link sponsor-card__button">
                  Bekijk sponsor
                </RouterLink>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="container">
        <SectionTitle
          eyebrow="Transfers"
          title="Nieuwe versterking"
          description="De nieuwste transfer richting Onder Den Toren Veulen."
        />

        <div class="transfer-grid">
          <article v-for="item in transfers" :key="item.name" class="transfer-card">
            <div class="transfer-card__image-wrap">
              <img
                :src="item.image"
                :alt="`Transferfoto van ${item.name}`"
                class="transfer-card__image js-lightbox-trigger"
              />
            </div>

            <div class="transfer-card__body">
              <p class="section-kicker">{{ item.direction }}</p>
              <h3>{{ item.headline }}</h3>
              <p>{{ item.note }}</p>
              <button
                type="button"
                class="button button-primary transfer-card__button"
                @click="selectedTransfer = item"
              >
                Bekijk volledig artikel
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <div
      v-if="selectedTransfer"
      class="modal-backdrop"
      @click.self="selectedTransfer = null"
    >
      <article class="modal-card">
        <div class="modal-card__header">
          <div>
            <p class="section-kicker">{{ selectedTransfer.direction }}</p>
            <h2>{{ selectedTransfer.headline }}</h2>
          </div>
          <button type="button" class="modal-close" @click="selectedTransfer = null">
            Sluiten
          </button>
        </div>

        <div class="modal-card__content">
          <div class="modal-card__image-wrap">
            <img
              :src="selectedTransfer.image"
              :alt="`Transferfoto van ${selectedTransfer.name}`"
              class="modal-card__image modal-card__image--transfer"
            />
          </div>

          <div class="modal-card__panel">
            <h3>{{ selectedTransfer.name }}</h3>
            <p v-for="paragraph in selectedTransfer.article" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import SectionTitle from '@/components/SectionTitle.vue';
import { clubValues, sponsors, teamName, transfers } from '@/data/clubData';
import { useSeasonMatches } from '@/composables/useSeasonMatches';
import type { StandingRow, TransferUpdate } from '@/types';
import logoImage from '@/assets/branding/ODT_LOGO.svg';
import teamPhotoOne from '@/assets/teamfotos/Teamfoto.jpg';
import teamPhotoTwo from '@/assets/teamfotos/Teamfoto2.jpg';
import eindhovenGroupImage from '@/assets/trips/eindhoven/Eindhoven_foto_groep.jpg';

const allStandings = ref<StandingRow[]>([]);
const homeRankingLoading = ref(true);
const homeStandings = computed(() => allStandings.value.slice(0, 5));

const normalizeTeamName = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');

const teamAliases = [teamName, 'ZVK Onder den Toren Veulen', 'Onder De Toren Veulen'];
const isOurTeam = (value: string) =>
  teamAliases.some((alias) => normalizeTeamName(value) === normalizeTeamName(alias));

const currentTeamStanding = computed(() =>
  allStandings.value.find((row) => isOurTeam(row.team)),
);

const formatGoalDifference = (goalDifference: number) =>
  goalDifference > 0 ? `+${goalDifference}` : goalDifference;
const featuredSponsors = sponsors.filter((sponsor) => sponsor.category === 'Hoofdsponsor');
const selectedTransfer = ref<TransferUpdate | null>(null);
const hasScrolled = ref(false);
const { seasonMatches, loadSeasonMatches } = useSeasonMatches();

const getFeaturedSponsorImageClasses = (name: string) => [
  'sponsor-card__image',
  {
    'sponsor-card__image--nijs-chris': name === 'Nijs Chris',
  },
];

const handleScroll = () => {
  hasScrolled.value = window.scrollY > 24;
};

watch(selectedTransfer, (value) => {
  document.body.classList.toggle('has-modal-open', Boolean(value));
  document.body.classList.toggle('has-transfer-modal', Boolean(value));
});

onBeforeUnmount(() => {
  document.body.classList.remove('has-modal-open');
  document.body.classList.remove('has-transfer-modal');
  window.removeEventListener('scroll', handleScroll);
});

onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
  loadSeasonMatches().catch((error) => {
    console.error('Fout bij het laden van de kalender:', error);
  });
  fetch(`${import.meta.env.BASE_URL}data/ranking.json`, { cache: 'no-store' })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Klassement kon niet geladen worden: ${response.status}`);
      }

      return response.json() as Promise<StandingRow[]>;
    })
    .then((standings) => {
      allStandings.value = standings.sort((a, b) => a.position - b.position);
    })
    .catch((error) => {
      console.error('Fout bij het laden van het klassement:', error);
    })
    .finally(() => {
      homeRankingLoading.value = false;
    });
});

const toMatchDateTime = (date: string, time: string) => new Date(`${date}T${time}:00`);

const upcomingAgenda = computed(() =>
  [...seasonMatches.value]
    .filter((item) => toMatchDateTime(item.date, item.time).getTime() >= Date.now())
    .sort(
      (a, b) => toMatchDateTime(a.date, a.time).getTime() - toMatchDateTime(b.date, b.time).getTime(),
    ),
);

const displayedAgenda = computed(() => upcomingAgenda.value.slice(0, 3));
const nextMatch = computed(() => upcomingAgenda.value[0] ?? null);

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('nl-BE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

const formatShortDate = (date: string) =>
  new Intl.DateTimeFormat('nl-BE', {
    day: 'numeric',
    month: 'long',
  }).format(new Date(date));

const formatMatchTitle = (title: string) => title.replace(' vs. ', ' - ');
</script>
