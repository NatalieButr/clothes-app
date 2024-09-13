import { Link } from 'react-router-dom';

import './index.scss';
export const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="not-found__link">
        Go Back to Home
      </Link>
    </div>
  );
};
