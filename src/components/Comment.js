import React from 'react';
import cn from 'classnames';

import './Comment.css';

export default (props) => (
  <div className={cn("comment", {"comment--narrow": props.narrow})}>
    <div className="comment__text">
      {props.text}
    </div>
    <div className="comment__person">
      <img src={props.image} alt="" className="comment__image" />
      <div className="comment__name">{props.name}</div>
    </div>
  </div>
);
