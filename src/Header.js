import React from 'react';
import './Header.css';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider.js';
import { auth } from './firebase.js';
function Header() {
  const [{ games, user }] = useStateValue();
  const history = useHistory();
  const handleAuthentication = (e) => {
    e.preventDefault();
    if (user) {
      auth
        .signOut()
        .then((auth) => {
          history.push('/login');
        })
        .catch((error) => alert(error.message));
    }
  };
  return (
    <div className="header">
      <Link to={!user && '/login'}>
        <div className="header__option">
          <span className="header__optionLineOne">
            Hello {user ? user.email : `Guest`}
          </span>
          <span
            onClick={handleAuthentication}
            className="header__optionLineTwo"
          >
            {user ? 'SignOut' : 'SignIn'}
          </span>
        </div>
      </Link>
      <div className="header__optionLineOne">
        <span>WELCOME, HAVE FUN</span>
      </div>
    </div>
  );
}

export default Header;
