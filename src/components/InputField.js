import React from 'react';
import cn from 'classnames';

import './InputField.css';

const TextArea = (props) => {
  return <textarea className="input-field__input" placeholder=" "></textarea>;
};

const TextField = (props) => {
  return <input className="input-field__input" placeholder=" " />;
};

export default (props) => (
  <div className={cn("input-field", "input-field--" + ((props.type === 'textarea' && 'textarea') || props.size || 'medium'))}>
    <div className="input-field__name">{props.name}{props.required &&<span className="input-field__required">*</span>}</div>
    {/* The placeholder to SPACE is set to get the "white when not empty" effect, see CSS */}
    { props.type === "textarea" ? <TextArea /> : <TextField /> }
  </div>
)
