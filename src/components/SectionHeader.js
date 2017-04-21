import React from 'react';
import Hexagon from './Hexagon';
import cn from 'classnames';
import './SectionHeader.css';

export default (props) => (
  <div className={cn("section-header", {"section-header--small": props.small})}>
    <div className="section-header__hexagon">
      <Hexagon image={<img alt="" style={{width: 40, height: 40}} src={require('../images/logos/trifork_mini.svg')} />} />
    </div>

    <div className="section-header__subtitle">{props.subtitle}</div>
    <h2 className="section-header__title">{props.title}</h2>
    <div className="section-header__description">{props.description}</div>
  </div>
);
