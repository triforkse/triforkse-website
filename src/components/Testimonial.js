import React from 'react';
import cn from 'classnames';

import './Testimonial.css';

export default (props) => (
  <div className={cn("testimonial", {"testimonial--light": props.light})}>
    {props.title && <div className="testimonial__title">{props.title}</div>}
    <div className="testimonial__text">{props.text}</div>
    <div className="testimonial__client">
      <img alt="" className="testimonial__client-portrait" src={props.portraitUrl} />
      <div className="testimonial__client-name">{props.name}</div>
      <div className="testimonial__client-job-title">{props.jobTitle}</div>
    </div>
  </div>
);
