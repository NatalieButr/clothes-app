import { useContext, useEffect, useState } from 'react';

import { Loading } from 'components';
import { ClothesContainerCard } from './ClothesContainerCard';
import { ClothesSorting } from '../ClothesSorting';
import { ClothesFilter } from '../ClothesFilter';
import { ClothesSearch } from '../ClothesSearch';
import { ClothingFiltersButton } from './ClothingFiltersButton.tsx';

import { fetchClothes } from 'api';
import { ClothesContext } from 'context';
import { ClothingItem } from 'types';

import './index.scss';

export const ClothesContainer = () => {
  const { filters, search, sort } = useContext(ClothesContext);

  const [clothes, setClothes] = useState<ClothingItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchClothes({ filters, search, sort });
        setClothes(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    getProducts().then();
  }, [filters, search, sort]);

  return (
    <div className="clothes-container">
      <div className="clothes-container__filter">
        <ClothesFilter />
      </div>

      <div className="clothes-container__block">
        <div className="clothes-container__panel">
          <div className="clothes-container__search">
            <ClothesSearch />
          </div>
          <ClothingFiltersButton />
          <ClothesSorting />
        </div>

        {loading ? (
          <Loading />
        ) : (
          <div className="clothes-container__items">
            {clothes.map((item) => {
              return <ClothesContainerCard key={item.id} item={item} />;
            })}

            {clothes.length === 0 && (
              <div className="clothes-container__empty">There are no clothes found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
