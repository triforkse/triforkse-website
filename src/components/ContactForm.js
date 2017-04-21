import React from 'react';
import InputField from './InputField';
import './ContactForm.css';

export default (props) => (
  <div className="contact-form">
    <div className="contact-form__container">
      <div className="contact-form__row">
        <InputField name="Your Full Name" required />
        <InputField name="Your Company Name" required />
      </div>
      <div className="contact-form__row">
        <InputField name="Work Email" required />
        <InputField name="Phone Number" size="small" required />
        <InputField name="Company Size" size="small" required />
      </div>
      <div className="contact-form__row">
        <InputField type="textarea" required name="Anything special you want to talk about?" />
      </div>
      <div className="contact-form__row">
        <button type="button" className="tri-button contact-form__button">Send</button>
      </div>
    </div>
  </div>
)
