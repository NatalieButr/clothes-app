import { useContext } from 'react';

import { Dropdown } from 'components';
import { ClothesContext } from 'context';
import { SortKeys } from 'types';

const OPTIONS = [
  { label: 'Popularity', value: SortKeys.POPULARITY },
  { label: 'Price - Low to High', value: SortKeys.LOW_TO_HIGH },
  { label: 'Price - High to Low', value: SortKeys.HIGH_TO_LOW },
  { label: 'Newest', value: SortKeys.NEWEST },
];

export const ClothesSorting = () => {
  const { sort, setSort } = useContext(ClothesContext);

  return (
    <Dropdown
      title="Sort by"
      options={OPTIONS}
      onSetValue={(value) => setSort(value as SortKeys)}
      value={sort}
    />
  );
};
