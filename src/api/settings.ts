import { filtersData, footer, header } from 'data';
import { FiltersData, Footer, Header } from 'types';
import { TIMEOUT } from 'constants';

export const getHeader = async (): Promise<Header> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(header);
    }, TIMEOUT);
  });
};

export const getFooter = async (): Promise<Footer> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(footer);
    }, TIMEOUT);
  });
};

export const getFiltersData = async (): Promise<FiltersData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(filtersData);
    }, TIMEOUT);
  });
};
