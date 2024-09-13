import { FC } from 'react';

import { ClothingItem } from 'types';
import rate from 'assets/icons/star-icon.svg';

import './index.scss';
import { Link } from 'react-router-dom';

interface ClothesContainerCardProps {
  item: ClothingItem;
}

export const ClothesContainerCard: FC<ClothesContainerCardProps> = ({ item }) => {
  return (
    <Link to={`/clothes/${item.id}`} className="clothes-card">
      <div className="clothes-card__photo">
        <img src={item.photo} alt={item.name} />
      </div>

      <div className="clothes-card__info">
        <h5>{item.name}</h5>

        <div className="clothes-card__row">
          <p className="clothes-card__brand">{item.brand}</p>

          <div className="clothes-card__rate">
            <p>{item.rate}</p> <img src={rate} alt="rate" />
          </div>
        </div>
        <div className="clothes-card__row clothes-card__row--prices">
          <p className="clothes-card__price">
            Rs. {item.discount ? item.discount_price : item.price}
          </p>

          {item.discount && (
            <>
              <p className="clothes-card__discount-price">Rs. {item.price}</p>
              <p className="clothes-card__discount">({item.discount_value}% off)</p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};
