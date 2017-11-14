import React from 'react';

const Header = (props) => {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a className="nav-link active" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Logout</a>
      </li>
    </ul>
  );
}

export default Header;
