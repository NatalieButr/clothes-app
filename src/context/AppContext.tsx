import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

import { FiltersData, Footer, Header, User } from 'types';

type AppContextType = {
  filtersData: FiltersData;
  setFiltersData: Dispatch<SetStateAction<FiltersData>>;
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  header: Header;
  setHeader: Dispatch<SetStateAction<Header>>;
  footer: Footer;
  setFooter: Dispatch<SetStateAction<Footer>>;
};
export const AppContext = createContext({} as AppContextType);

export function AppProvider({ children }: { children: ReactNode }) {
  const [filtersData, setFiltersData] = useState({} as FiltersData);
  const [user, setUser] = useState({} as User);
  const [header, setHeader] = useState({} as Header);
  const [footer, setFooter] = useState({} as Footer);

  const value = {
    filtersData,
    setFiltersData,
    user,
    setUser,
    header,
    setHeader,
    footer,
    setFooter,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
