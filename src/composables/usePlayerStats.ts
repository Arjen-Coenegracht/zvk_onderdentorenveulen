import { ref } from 'vue';
import type { PlayerStats } from '@/types';

const playerStats = ref<PlayerStats[]>([]);
let loadingPromise: Promise<void> | null = null;

const loadPlayerStats = () => {
  if (loadingPromise) {
    return loadingPromise;
  }

  loadingPromise = fetch(
    `${import.meta.env.BASE_URL}data/player-stats-2026-2027.json`,
    { cache: 'no-store' },
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Spelerstatistieken konden niet geladen worden: ${response.status}`);
      }

      return response.json() as Promise<PlayerStats[]>;
    })
    .then((stats) => {
      playerStats.value = stats;
    })
    .finally(() => {
      loadingPromise = null;
    });

  return loadingPromise;
};

export const usePlayerStats = () => ({
  playerStats,
  loadPlayerStats,
});
