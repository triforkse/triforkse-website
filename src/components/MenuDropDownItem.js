import React from 'react';

import './MenuDropDown.css';

export default (props) => {
  return (
    <a className="menu-dd__item" href={props.href}>
      <div className="menu-dd__item-inner">
        <div className="menu-dd__icon">
          <span className="icon" data-color={props.color} style={{color: props.color}}>{props.icon}</span>
        </div>
        <div className="menu-dd__item-title">
          {props.title}
        </div>
        <div className="menu-dd__item-text">
          {props.description}
        </div>
        <div className="menu-dd__item-learn">
          Learn More <span className="icon">arrow_forward</span>
        </div>
      </div>
    </a>
  );
};
