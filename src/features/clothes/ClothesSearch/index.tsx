import { useContext } from 'react';

import { SearchInput } from 'components';
import { ClothesContext } from 'context';

export const ClothesSearch = () => {
  const { search, setSearch } = useContext(ClothesContext);

  return (
    <SearchInput placeholder="Search here" name="search" value={search} setValue={setSearch} />
  );
};
