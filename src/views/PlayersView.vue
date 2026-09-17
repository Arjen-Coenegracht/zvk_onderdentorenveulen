<template>
  <div class="page">
    <section class="inner-hero inner-hero--players">
      <div class="container inner-hero__grid">
        <div>
          <p class="section-kicker">De mannen</p>
          <h1 class="inner-title">Onze kern.</h1>
          <p class="inner-copy">
            Wie er bijloopt in rood en zwart, met de cijfers van dit seizoen erbij.
          </p>
          <div class="players-spotlight-callout">
            <p>
              Dit zijn de {{ squadPlayers.length }} mannen die er elke week staan.
              Benieuwd wie echt het verschil maken?
            </p>
            <RouterLink class="button button-primary players-spotlight-callout__button" to="/spotlight">
              Bekijk de MOTM
            </RouterLink>
          </div>
        </div>

        <aside class="inner-sidebox">
          <p class="section-kicker">Kern</p>
          <strong>{{ squadPlayers.length }} spelers</strong>
          <span>Van keeper tot bankzitter</span>
        </aside>
      </div>
    </section>

    <section class="section-block section-block--dark">
      <div class="container">
        <div class="players-grid">
          <article v-for="player in squadPlayers" :key="player.name" class="squad-card squad-card--styled">
            <div class="player-photo-wrap">
              <img
                v-if="player.image"
                :src="`${baseUrl}${player.image}`"
                :alt="`Spelerfoto van ${player.name}`"
                :class="[
                  'player-photo',
                  {
                    'player-photo--bipin': player.name === 'Bipin Naeten',
                  },
                ]"
              />
              <div v-else class="player-photo player-photo--placeholder" aria-hidden="true">
                <div class="player-photo__silhouette"></div>
                <span class="player-photo__number">{{ player.number }}</span>
              </div>
            </div>

            <div class="squad-card__top">
              <div class="shirt-number">{{ player.number }}</div>
              <div>
                <h3>{{ player.name }}</h3>
                <p class="player-role">{{ player.position }}</p>
              </div>
            </div>

            <div class="stats-mini-grid">
              <div class="mini-stat">
                <span>Goals</span>
                <strong>{{ statsFor(player.id).goals }}</strong>
              </div>
              <div class="mini-stat">
                <span>Assists</span>
                <strong>{{ statsFor(player.id).assists }}</strong>
              </div>
              <div class="mini-stat">
                <span>Gele kaarten</span>
                <strong>{{ statsFor(player.id).yellowCards }}</strong>
              </div>
              <div class="mini-stat">
                <span>Rode kaarten</span>
                <strong>{{ statsFor(player.id).redCards }}</strong>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { usePlayers } from '@/composables/usePlayers';
import { usePlayerStats } from '@/composables/usePlayerStats';
import type { PlayerStats } from '@/types';

const baseUrl = import.meta.env.BASE_URL;
const { players: squadPlayers, loadPlayers } = usePlayers();
const { playerStats, loadPlayerStats } = usePlayerStats();
const emptyStats: Omit<PlayerStats, 'playerId'> = {
  goals: 0,
  assists: 0,
  yellowCards: 0,
  redCards: 0,
};

const statsFor = (playerId: string) =>
  playerStats.value.find((stats) => stats.playerId === playerId) ?? emptyStats;

onMounted(() => {
  loadPlayers().catch((error) => {
    console.error('Fout bij het laden van de spelers:', error);
  });
  loadPlayerStats().catch((error) => {
    console.error('Fout bij het laden van de spelerstatistieken:', error);
  });
});
</script>
