import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { AppContext } from 'context';

import { ClothesSearch } from 'features/clothes/ClothesSearch';

import logo from 'assets/logo-header.svg';
import like from 'assets/icons/heart-icon.svg';
import cart from 'assets/icons/cart-icon.svg';

import './index.scss';

export const Header = () => {
  const { header, user } = useContext(AppContext);
  return (
    <header className="header container">
      <div className="header__content">
        <div className="header__block">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Globex" />
          </Link>

          <div className="header__links">
            {header.links.map((item) => {
              return (
                <Link key={item.link} to={item.link}>
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="header__block">
          <ClothesSearch />

          <div className="header__row">
            <Link to={'/'}>
              <img src={like} alt="wishlist" />
            </Link>

            <Link to={'/'}>
              <img src={cart} alt="cart" />
            </Link>

            <div className="header__profile">
              <img src={user.icon} alt={user.first_name} />

              <p>
                {user.first_name} {user.last_name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
