import React from 'react';
import cn from 'classnames';
import MenuDropDown from './MenuDropDown';
import Menu from '../common/Menu';

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
          { Menu.main.map(item => (
            <a key={item.title} className="navbar__menu-item" href={item.href}>
              {item.title}
              <MenuDropDown items={item.items} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
