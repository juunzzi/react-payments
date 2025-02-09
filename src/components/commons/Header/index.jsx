import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PAGE_TITLE, ROUTE } from '../../../route';

function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onClick = () => {
    navigate(ROUTE.home.route, { replace: true });
  };

  return (
    <h1 className="page-title" onClick={onClick}>
      {ROUTE.home.route !== pathname && '<'}
      &nbsp;
      {PAGE_TITLE[pathname] ?? '없는 화면'}
    </h1>
  );
}

export default Header;
