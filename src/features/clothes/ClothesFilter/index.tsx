import { useContext } from 'react';

import { CheckboxFilter, RangeFilter } from 'components';

import { FilterKeys, Filters } from 'types';
import { AppContext, ClothesContext } from 'context';
import { initialState } from 'constants';

import './index.scss';

export const ClothesFilter = () => {
  const { filters, setFilters } = useContext(ClothesContext);
  const { filtersData } = useContext(AppContext);

  const onSetValue = (value: string, name: FilterKeys) => {
    const oldData = filters[name];
    const isInclude = oldData.includes(value);

    if (isInclude) {
      const newData = oldData.filter((item) => item !== value);
      setFilters((prevState: Filters) => {
        return { ...prevState, [name]: newData };
      });
    } else {
      setFilters((prevState: Filters) => {
        return { ...prevState, [name]: [...oldData, value] };
      });
    }
  };

  return (
    <div className="clothes-filter">
      <div className="clothes-filter__row">
        <p>Filters</p>

        <button onClick={() => setFilters(initialState)}>Clear all</button>
      </div>

      <RangeFilter
        maxValue={+filters.price[1]}
        minValue={+filters.price[0]}
        setMaxValue={(v) =>
          setFilters((prevState: Filters) => {
            return { ...prevState, price: [filters.price[0], v] };
          })
        }
        setMinValue={(v) =>
          setFilters((prevState: Filters) => {
            return { ...prevState, price: [v, filters.price[1]] };
          })
        }
      />

      <CheckboxFilter
        title="Brand"
        name="brands"
        options={filtersData.brands}
        values={filters.brands}
        onChange={onSetValue}
      />

      <CheckboxFilter
        title="Color"
        name="color"
        options={filtersData.colors}
        values={filters.color}
        onChange={onSetValue}
      />

      <CheckboxFilter
        title="Discount ranges"
        name="discount"
        options={filtersData.discountRanges}
        values={filters.discount}
        onChange={onSetValue}
      />
    </div>
  );
};
