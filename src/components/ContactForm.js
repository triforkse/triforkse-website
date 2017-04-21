import React from 'react';
import InputField from './InputField';
import './ContactForm.css';
import Mail from '../api/Mail';

const STATE = {
  INITIAL: "INITIAL",
  SENDING: "SENDING",
  SENT: "SENT",
  ERROR: "ERROR",
};

export default class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { state: STATE.INITIAL };
  }

  send() {
    const name = this.name.value;
    const email = this.email.value;
    const company = this.company.value;
    const companySize = this.companySize.value;
    const phone = this.phone.value;
    const message = this.message.value;

    Mail.send({name, email, company, companySize, phone, message })
      .then(msg => {
        this.setState({state: STATE.SENT });
      }) // logs response data
      .catch(err => {
        console.error(err)
        this.setState({state: STATE.ERROR });
      }); // logs any error

    this.setState({state: STATE.SENDING });
  }

  render() {
    return (<div className="contact-form">
      <div className="contact-form__container">
        <div className="contact-form__row">
          <InputField name="Your Full Name" required ref={(input) => { this.name = input; }} />
          <InputField name="Your Company Name" required ref={(input) => { this.company = input; }} />
        </div>
        <div className="contact-form__row">
          <InputField name="Work Email" required ref={(input) => { this.email = input; }} />
          <InputField name="Phone Number" size="small" required ref={(input) => { this.phone = input; }} />
          <InputField name="Company Size" size="small" required ref={(input) => { this.companySize = input; }} />
        </div>
        <div className="contact-form__row">
          <InputField type="textarea" required name="Anything special you want to talk about?" ref={(input) => { this.message = input; }} />
        </div>
        <div className="contact-form__row">
          <button type="button" disabled={ this.state.state === STATE.SENDING } className="tri-button contact-form__button" onClick={() => this.send()}>Send</button>
        </div>
      </div>
    </div>);
  }
}
