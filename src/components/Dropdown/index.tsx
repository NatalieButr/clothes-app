import { FC, useRef, useState } from 'react';
import cn from 'classnames';

import { Option } from 'types';
import { useOnClickOutside } from 'hooks';

import arrow from 'assets/icons/arrow-icon.svg';

import './index.scss';

interface DropdownProps {
  title: string;
  onSetValue: (value: string) => void;
  options: Option[];
  value: string;
}

export const Dropdown: FC<DropdownProps> = ({ title, options, onSetValue, value }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <div className="dropdown" ref={ref}>
      <button
        className={cn('dropdown__button', { 'dropdown__button--open': isOpen })}
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        {title} <img src={arrow} alt="arrow" />
      </button>

      <div className={cn('dropdown__dropdown-menu', { 'dropdown__dropdown-menu--open': isOpen })}>
        <ul className="dropdown__list">
          {options.map((item) => {
            return (
              <li key={item.value}>
                <button
                  onClick={() => onSetValue(item.value)}
                  className={cn('dropdown__item', {
                    'dropdown__item--active': value === item.value,
                  })}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
