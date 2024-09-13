import { filterProducts, sortFunctions } from 'utils';
import { clothes } from 'data';
import { ClothingItem, Filters, SortKeys } from 'types';
import { TIMEOUT } from 'constants';

export const fetchClothes = async ({
  filters,
  search,
  sort,
}: {
  filters: Filters;
  search: string;
  sort: SortKeys;
}): Promise<ClothingItem[]> => {
  return new Promise((resolve) => {
    let data = filterProducts(clothes, filters, search);

    if (sort && sortFunctions[sort]) {
      data = data.sort(sortFunctions[sort]);
    }

    setTimeout(() => {
      resolve(data);
    }, TIMEOUT);
  });
};
