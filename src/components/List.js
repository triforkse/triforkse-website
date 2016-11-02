import React from 'react';
import cn from 'classnames';

import './List.css';

export default (props) => (
  <div className={cn('list', ('list--' + (props.columns || 1) ))}>
    {props.heading && (<h3 className="list__heading">{props.heading}</h3>)}
    <ul className="list__items">
      {props.items.map((item, i) => (
        <li key={i} className="list__item">{item}</li>
      ))}
    </ul>
  </div>
);
