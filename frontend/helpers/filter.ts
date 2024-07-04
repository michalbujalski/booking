import type { Travel } from '@/models/travels/Travel';

export const filterData = (
  filtered: Travel[],
  {
    search,
    departureDate,
    returnDate,
    selectedRating,
  }: {
    search?: string | undefined;
    departureDate?: string | undefined;
    returnDate?: string | undefined;
    selectedRating?: string | undefined;
  }
) => {
  if (search) {
    filtered = filtered.filter((travel: Travel) =>
      travel.title.toLowerCase().includes(search.toString().toLowerCase())
    );
  }
  if (departureDate) {
    const dd = Date.parse(departureDate.toString());
    filtered = filtered.filter((travel: Travel) => {
      const tdd = Date.parse(travel.departureDate);
      return dd <= tdd;
    });
  }
  if (returnDate) {
    const rd = Date.parse(returnDate.toString());
    filtered = filtered.filter((travel: Travel) => {
      const trd = Date.parse(travel.returnDate);
      return rd >= trd;
    });
  }
  if (selectedRating) {
    filtered = filtered.filter(
      (travel: Travel) =>
        Math.floor(travel.rating) === parseInt(selectedRating.toString())
    );
  }
  return filtered;
};
