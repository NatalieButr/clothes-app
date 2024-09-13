import { useCallback, useContext, useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage, NotFoundPage } from 'pages';
import { getFiltersData, getFooter, getHeader, getUser } from 'api';
import { AppContext } from 'context';
import { Loading } from 'components';

import { Layout } from './Layout.tsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  const { setUser, setFiltersData, setFooter, setHeader } = useContext(AppContext);

  const [isLoading, setIsLoading] = useState(true);

  const fetchInitialData = useCallback(async () => {
    try {
      setIsLoading(true);
      const [user, header, footer, filtersData] = await Promise.all([
        getUser(),
        getHeader(),
        getFooter(),
        getFiltersData(),
      ]);

      setUser(user);
      setHeader(header);
      setFooter(footer);
      setFiltersData(filtersData);
    } catch (error) {
      console.error('Error fetching initial data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [setUser, setFiltersData, setFooter, setHeader]);

  useEffect(() => {
    fetchInitialData().then();
  }, []);

  if (isLoading) return <Loading />;

  return <RouterProvider router={router} />;
}

export default App;
