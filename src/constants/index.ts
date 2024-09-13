import { Filters } from '../types';

export const MIN_LIMIT = 0;
export const MAX_LIMIT = 500;
export const TIMEOUT = 1000;
export const initialState = {
  brands: [],
  color: [],
  discount: [],
  price: ['0', '500'],
} as Filters;
