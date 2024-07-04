import { fetchTravelDetails } from '~/api';
import type { Travel } from '~/models/travels/Travel';

const travel = ref<Travel | null>(null);
const error = ref<string | null>(null);

export const useTravelDetails = () => {
  const load = async (id: string, invalidate: boolean = false) => {
    if (travel.value && !invalidate) {
      return travel.value;
    }
    try {
      travel.value = await fetchTravelDetails(id);
      return travel.value;
    } catch (e: any) {
      error.value = e.message;
      throw e;
    }
  };

  return {
    travel,
    error,
    load,
  };
};
