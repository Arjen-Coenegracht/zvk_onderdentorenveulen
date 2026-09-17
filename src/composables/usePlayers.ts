import { ref } from 'vue';
import type { SquadPlayer } from '@/types';

const players = ref<SquadPlayer[]>([]);
let loadingPromise: Promise<void> | null = null;

const loadPlayers = () => {
  if (loadingPromise) {
    return loadingPromise;
  }

  loadingPromise = fetch(`${import.meta.env.BASE_URL}data/players.json`, {
    cache: 'no-store',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Spelers konden niet geladen worden: ${response.status}`);
      }

      return response.json() as Promise<SquadPlayer[]>;
    })
    .then((data) => {
      players.value = data;
    })
    .finally(() => {
      loadingPromise = null;
    });

  return loadingPromise;
};

export const usePlayers = () => ({ players, loadPlayers });
