import { ref } from 'vue';
import type { SeasonMatch } from '@/types';

const seasonMatches = ref<SeasonMatch[]>([]);
let loadingPromise: Promise<void> | null = null;

const loadSeasonMatches = () => {
  if (loadingPromise) {
    return loadingPromise;
  }

  loadingPromise = fetch(
    `${import.meta.env.BASE_URL}data/matches-2026-2027.json`,
    { cache: 'no-store' },
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Wedstrijden konden niet geladen worden: ${response.status}`);
      }

      return response.json() as Promise<SeasonMatch[]>;
    })
    .then((matches) => {
      seasonMatches.value = matches;
    })
    .catch((error) => {
      throw error;
    })
    .finally(() => {
      loadingPromise = null;
    });

  return loadingPromise;
};

export const useSeasonMatches = () => ({
  seasonMatches,
  loadSeasonMatches,
});
