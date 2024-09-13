import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { TextField } from 'components';
import { AppContext } from 'context';

import logo from 'assets/logo-footer.svg';
import mail from 'assets/icons/letter-icon.svg';

import './index.scss';

export const Footer = () => {
  const { footer } = useContext(AppContext);
  return (
    <footer className="footer container">
      <Link to="/" className="footer__logo">
        <img src={logo} alt="Globex" /> <p>Globex</p>
      </Link>

      <div className="footer__content">
        {footer.categories.map((item) => {
          return (
            <div key={item.title}>
              <h3>{item.title}</h3>

              <ul className="footer__list">
                {item.links.map((link) => {
                  return (
                    <li key={link.link}>
                      <Link to={link.link}>{link.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}

        <div>
          <h3>Stay In Touch</h3>

          <p className="footer__text">
            Stay in touch to get special offers, free giveaways and once in a lifetime deals
          </p>

          <TextField
            placeholder="Enter your email"
            name="email"
            icon={<img src={mail} alt="mail" />}
          />
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-content">
          <Link to={'/'}>Terms & Conditions</Link>

          <Link to={'/'}>Privacy Policy</Link>

          <div className="footer__socials">
            {footer.social.map((item) => {
              return (
                <Link to={item.link} key={item.alt}>
                  <img src={item.icon} alt={item.alt} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
