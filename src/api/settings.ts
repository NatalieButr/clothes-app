import { filtersData, footer, header } from 'data';
import { FiltersData, Footer, Header } from 'types';

export const getHeader = async (): Promise<Header> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(header);
    }, 1000);
  });
};

export const getFooter = async (): Promise<Footer> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(footer);
    }, 1000);
  });
};

export const getFiltersData = async (): Promise<FiltersData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(filtersData);
    }, 1000);
  });
};
