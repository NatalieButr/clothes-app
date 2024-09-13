import { ClothingItem, Filters, SortKeys } from '../types';

export const filterProducts = (products: ClothingItem[], filters: Filters, search: string) => {
  return products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesBrand = filters.brands.length
      ? filters.brands.includes(product.brand.toLowerCase())
      : true;
    const matchesColor = filters.color.length
      ? filters.color.includes(product.color.toLowerCase())
      : true;
    const matchesDiscount = filters.discount.length
      ? product.discount && filters.discount.includes(getDiscountRange(product.discount_value))
      : true;
    const matchesPrice =
      product.price >= Number(filters.price[0]) && product.price <= Number(filters.price[1]);

    return matchesBrand && matchesColor && matchesDiscount && matchesPrice && matchesSearch;
  });
};

const getDiscountRange = (discountValue: number) => {
  if (discountValue >= 60) return '60_and_above';
  if (discountValue >= 50) return '50_and_above';
  if (discountValue >= 40) return '40_and_above';
  if (discountValue >= 30) return '30_and_above';
  if (discountValue >= 20) return '20_and_above';
  return '10_and_above';
};

export const sortFunctions: { [key: string]: (a: ClothingItem, b: ClothingItem) => number } = {
  [SortKeys.LOW_TO_HIGH]: (a, b) => {
    const aPrice = a.discount ? a.discount_price : a.price;
    const bPrice = b.discount ? b.discount_price : b.price;
    return aPrice - bPrice;
  },
  [SortKeys.HIGH_TO_LOW]: (a, b) => {
    const aPrice = a.discount ? a.discount_price : a.price;
    const bPrice = b.discount ? b.discount_price : b.price;
    return bPrice - aPrice;
  },
  [SortKeys.NEWEST]: (a, b) =>
    new Date(b.arrival_date).getTime() - new Date(a.arrival_date).getTime(),
  [SortKeys.POPULARITY]: (a, b) => b.orders_count - a.orders_count,
};
