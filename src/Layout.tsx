import { Outlet } from 'react-router-dom';

import { Header, Footer } from 'features/layout';
import { ClothesProvider } from 'context';

export const Layout = () => {
  return (
    <ClothesProvider>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </ClothesProvider>
  );
};
