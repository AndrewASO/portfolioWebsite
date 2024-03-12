import React from 'react';

const NavItem = ({ href, title }) => {
  return (
    <a className="navbar-brand" href={href}>
      {title}
    </a>
  );
};

export default NavItem;
