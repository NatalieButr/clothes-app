import { FC, useState } from 'react';
import cn from 'classnames';

import { FilterKeys } from 'types';

import arrow from 'assets/icons/arrow-icon.svg';

import './index.scss';

type CheckboxFilterProps = {
  title: string;
  name: FilterKeys;
  options: { name: string; value: string; count: number }[];
  values: string[];
  onChange: (value: string, name: FilterKeys) => void;
};

const SHOW_COUNT = 6;

export const CheckboxFilter: FC<CheckboxFilterProps> = ({
  title,
  name,
  options,
  values,
  onChange,
}) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const displayedValues = isShowMore ? options : options.slice(0, SHOW_COUNT);

  return (
    <div className="checkbox-filter">
      <div
        className={cn('checkbox-filter__header', { 'checkbox-filter__header--open': !isCollapsed })}
        role="button"
        onClick={() => setIsCollapsed((prevState) => !prevState)}
      >
        <p>{title}</p>

        <img src={arrow} alt="arrow" />
      </div>

      {!isCollapsed && (
        <div className="checkbox-filter__options">
          {displayedValues.map((item) => (
            <div key={item.value}>
              <label className="checkbox-filter__item">
                <input
                  id={item.value}
                  type="checkbox"
                  checked={values.includes(item.value)}
                  onChange={() => {
                    onChange(item.value, name);
                  }}
                />

                <span className="checkbox-filter__checkmark" />

                {item.name}

                <span className="checkbox-filter__count">({item.count})</span>
              </label>
            </div>
          ))}

          {options.length > SHOW_COUNT && (
            <button
              className="checkbox-filter__more"
              onClick={() => setIsShowMore((prevState) => !prevState)}
            >
              {isShowMore ? 'Show less' : `+ ${options.length - SHOW_COUNT} more`}
            </button>
          )}
        </div>
      )}
    </div>
  );
};
