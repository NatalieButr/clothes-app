import { ReactNode } from 'react';

export interface InputProps {
  placeholder: string;
  name: string;
  icon?: ReactNode;
}

export interface ClothingItem {
  id: number;
  photo: string;
  name: string;
  brand: string;
  price: number;
  discount: boolean;
  discount_value: number;
  discount_price: number;
  rate: number;
  orders_count: number;
  arrival_date: string;

  color: string;
}

export interface Option {
  label: string;
  value: string;
}

export type FilterKeys = 'brands' | 'color' | 'discount' | 'price';

export type Filters = {
  brands: string[];
  color: string[];
  discount: string[];
  price: string[];
};

export const enum SortKeys {
  POPULARITY = 'popularity',
  LOW_TO_HIGH = 'low-to-high',
  HIGH_TO_LOW = 'high-to-low',
  NEWEST = 'newest',
}

export type FilterItem = { name: string; value: string; count: number };
export type FiltersData = {
  brands: FilterItem[];
  colors: FilterItem[];
  discountRanges: FilterItem[];
};

export type User = {
  icon: string;
  first_name: string;
  last_name: string;
};

export type LinkItem = { link: string; title: string };

export type Header = { links: LinkItem[] };

export type Footer = {
  categories: { title: string; links: LinkItem[] }[];
  social: { link: string; icon: string; alt: string }[];
};
