import { ChangeEvent, FC } from 'react';

import { MAX_LIMIT, MIN_LIMIT } from 'constants';

import './index.scss';

type RangeFilterProps = {
  minValue: number;
  maxValue: number;
  setMinValue: (minValue: string) => void;
  setMaxValue: (maxValue: string) => void;
};

export const RangeFilter: FC<RangeFilterProps> = ({
  minValue,
  maxValue,
  setMaxValue,
  setMinValue,
}) => {
  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(`${value}`);
  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(`${value}`);
  };

  const minPercent = (minValue / MAX_LIMIT) * 100;
  const maxPercent = (maxValue / MAX_LIMIT) * 100;

  return (
    <div className="range-filter">
      <p>Price</p>

      <div className="range-filter__range-slider">
        <input
          type="range"
          min={MIN_LIMIT}
          max={MAX_LIMIT}
          value={minValue}
          onChange={handleMinChange}
          className="slider slider--min"
        />

        <input
          type="range"
          min={MIN_LIMIT}
          max={MAX_LIMIT}
          value={maxValue}
          onChange={handleMaxChange}
          className="slider slider--max"
        />

        <div
          className="range-filter__slider-track"
          style={{
            background: `linear-gradient(to right, lightgray ${minPercent}%, #00aaff ${minPercent}%, #00aaff ${maxPercent}%, lightgray ${maxPercent}%)`,
          }}
        />
      </div>

      <div className="range-filter__circles">
        {[...Array(9)].map((_, index) => (
          <div className="range-filter__circle" key={index}></div>
        ))}
      </div>

      <div className="range-filter__prices">
        <div className="range-filter__price-label">
          <span>Min</span>
          <span>Rs. {minValue}</span>
        </div>

        <div className="range-filter__price-label">
          <span>Max</span>
          <span>Rs. {maxValue}</span>
        </div>
      </div>
    </div>
  );
};
