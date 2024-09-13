import { FC } from 'react';

import { InputProps } from 'types';

import search from 'assets/icons/search-icon.svg';

import './index.scss';

interface SearchInputProps extends Omit<InputProps, 'icon'> {
  value: string;
  setValue: (value: string) => void;
}

export const SearchInput: FC<SearchInputProps> = ({ name, placeholder, value, setValue }) => {
  return (
    <div className="search-input">
      <input
        placeholder={placeholder}
        name={name}
        aria-label={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <div className="search-input__icon">
        <img src={search} alt="search" />
      </div>
    </div>
  );
};
