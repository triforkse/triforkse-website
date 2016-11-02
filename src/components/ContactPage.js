import React, { Component } from 'react'
import Navbar from './Navbar';
import PageFooter from './PageFooter';
import './ContactPage.css';

const vcardTrifork = [
  { key: 'name', value: 'Trifork AB' },
  { key: 'street', field: 'Street', value: 'Ferkens Gränd 3' },
  { key: 'city', field: 'City', value: 'SE-111 30 Stockholm' },
  { key: 'country', field: 'Country', value: 'Sweden' },
  { key: 'vat', field: 'Org no.', value: '556993-3392' },
  { key: 'email', field: 'Email', value: <a href="mailto:stockholm@trifork.com">stockholm@trifork.com</a> }
];

const vcardThomas = [
  { key: 'name', value: 'Thomas Anagrius' },
  { key: 'title', field: 'Title', value: 'VD, Managing Director' },
  { key: 'phone', field: 'Phone', value: '+46 70 445 0863' },
  { key: 'email', field: 'Email', value: <a href="mailto:thb@trifork.com">thb@trifork.com</a> }
];

export default class ContactPage extends Component {
  renderVCard(vcard) {
    return vcard.map(item => (
      <div key={item.key} className={"contact-page__vcard-" + item.key}>
        <span className="contact-page__vcard-field">{item.field}</span>
        {item.value}
      </div>
    ));
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="contact-page__map">
          <div className="contact-page__worldmap"></div>
          <div className="contact-page__map-label">
            <div className="contact-page__map-title">20 Offices in 9 Countries</div>
            <p>The Swedish Trifork Office is one of many Trifork.</p>
            <p>If you are looking for one of our other offices, head over to our&nbsp;
            <a href="//trifork.com/offices/">Global Website.</a></p>
          </div>
        </div>
        <div className="contact-page__segment">
          <h1 className="contact-page__segment-heading">Contact Trifork Stockholm</h1>
          <div className="contact-page__inset">
            <div className="contact-page__vcard">{ this.renderVCard(vcardTrifork) }</div>
            <div className="contact-page__vcard">{ this.renderVCard(vcardThomas) }</div>
          </div>
        </div>
        <PageFooter />
      </div>
    );
  }
}
