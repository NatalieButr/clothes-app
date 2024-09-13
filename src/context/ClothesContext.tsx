import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { Filters, SortKeys } from '../types';

type ClothesContext = {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  sort: SortKeys;
  setSort: Dispatch<SetStateAction<SortKeys>>;
};
export const ClothesContext = createContext({} as ClothesContext);

const initialState = {
  brands: [],
  color: [],
  discount: [],
  price: ['0', '500'],
} as Filters;

export function ClothesProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<Filters>(initialState);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<SortKeys>('' as SortKeys);

  const value = {
    filters,
    setFilters,
    setSearch,
    search,
    sort,
    setSort,
  };

  return <ClothesContext.Provider value={value}>{children}</ClothesContext.Provider>;
}
