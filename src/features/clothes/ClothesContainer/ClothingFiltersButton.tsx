import { useRef, useState } from 'react';

import { ClothesFilter } from '../ClothesFilter';

import { useOnClickOutside } from 'hooks';

import filter from 'assets/icons/filter-icon.svg';

export const ClothingFiltersButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <div ref={ref}>
      <button className="clothes-container__filters" onClick={() => setIsOpen((prev) => !prev)}>
        Filter <img src={filter} alt="filter" />
      </button>

      {isOpen && (
        <div className="clothes-container__dropdown">
          <ClothesFilter />
        </div>
      )}
    </div>
  );
};
