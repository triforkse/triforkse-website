import React from 'react';
import './ErrorBox.css';

export default (props) => (
  <div className="error-box">
    {props.message}
  </div>
);
