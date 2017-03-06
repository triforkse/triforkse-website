import React from 'react';
import Menu from '../common/Menu';
import cn from 'classnames';

import './Navbar.css';

export default (props) => {
  const image = props.transparent ? "trifork_logo.svg" : "trifork_logo_white.svg";
  return (
    <div className={cn("navbar", {"navbar--transparent": props.transparent})}>
      <div className="navbar__content">
        <a href='/'>
          <img className="navbar__logo" src={require(`../images/logos/${image}`)} alt="Trifork - Think Software" />
        </a>

        <div className="navbar__menu">
          { Menu.main.map(item => <a key={item.title} className="navbar__menu-item" href={item.href}>{item.title}</a>) }
        </div>
      </div>
    </div>
  );
}