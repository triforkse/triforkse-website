import React from 'react';
import cn from 'classnames';

import './FeatureList.css';

export default (props) => (
  <div className={cn('feature-list', ('feature-list--' + (props.columns || 1) ))}>
    <ul className="feature-list__items">
      {props.items.map(item => (
        <li className="feature-list__item">
          <div className="feature-list__name" style={{color: item.color}}>{item.name}</div>
          <div className="feature-list__description">{item.description}</div>
          <div className="feature-list__icon icon" style={{color: item.color}}>{item.icon}</div>
        </li>
      ))}
    </ul>
  </div>
);
