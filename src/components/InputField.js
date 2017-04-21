import React from 'react';
import cn from 'classnames';

import './InputField.css';

class TextArea extends React.Component {
  get value() {
    return this.field.value;
  }

  render() {
    return <textarea ref={(input) => this.field = input } className="input-field__input" placeholder=" "></textarea>;
  }
};

class TextField extends React.Component {
  get value() {
    return this.field.value;
  }

  render() {
    return <input ref={(input) => this.field = input } className="input-field__input" placeholder=" " />;
  }
};

export default class InputField extends React.Component {
  get value() {
      return this.field.value;
  }

  render() {
    return (
      <div className={cn("input-field", "input-field--" + ((this.props.type === 'textarea' && 'textarea') || this.props.size || 'medium'))}>
        <div className="input-field__name">{this.props.name}{this.props.required &&<span className="input-field__required">*</span>}</div>
        {/* The placeholder to SPACE is set to get the "white when not empty" effect, see CSS */}
        { this.props.type === "textarea" ? <TextArea ref={ (input) => this.field = input } /> : <TextField ref={ (input) => this.field = input } /> }
      </div>
    );
  }
}
