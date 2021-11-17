import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import logo from '../images/logo.png';
// import data from './data';

const NavBar = () => {
  const detailsNav = <TiArrowBackOutline className="goBack" />;
  const header1 = 'Corona Worldometer';
  const header2 = 'country';
  const location = useLocation();
  const header = !location.pathname.includes('country') ? header1 : header2;
  const goBack = location.pathname.includes('country') ? detailsNav : '';

  return (
    <nav>
      <div className="nav1">
        <NavLink exact="true" to={{ pathname: '/' }}>
          {goBack}
        </NavLink>
        <h1 className="header1">CoviData</h1>
      </div>
      <div className="nav2">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="header2">
          {header}
        </h1>
      </div>
    </nav>
  );
};

export default NavBar;
