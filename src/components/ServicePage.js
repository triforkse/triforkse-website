import React from 'react';
import Navbar from './Navbar';
import ContactForm from './ContactForm';
import SectionHeader from './SectionHeader';
import Hexagon from './Hexagon';
import Testimonial from './Testimonial';
import PageFooter from './PageFooter';

import './ServicePage.css';

export default class ServicePage extends React.Component {

  render() {
      return (
          <div className="page">

          <div className={`page__splash page__splash--${this.props.imageId || 1}`} style={{backgroundImage: this.props.gradient || `radial-gradient(ellipse farthest-side at 100% 100%, ${this.props.colors.join(",")})`}}>

            <Navbar transparent light />

          <div className="page__splash-content page__splash-content--title">
            <div>
              <div className="page__splash-hexagon"><Hexagon icon={this.props.titleIcon} small={true} /></div>
              <h1 className="page__splash-title">{this.props.title}</h1>
              <div className="page__splash-tagline">{this.props.titleTagline}</div>
            </div>
          </div>

          <div className="bubbles">
            {this.props.bubbles.map(data => (
              <div key={data.title} className="bubble">
                <div className="bubble__icon"><span className="icon" style={{color: data.color}}>{data.icon}</span></div>
                <div className="bubble__title">{data.title}</div>
                <div className="bubble__description">{data.description}</div>
              </div>
            ))}
          </div>

          <div className="page__content">
            <div className="service-page__testimonial">
              <Testimonial title="What our clients say" {...this.props.testimonial} />

              <div className="service-page__brand-cloud">
                <div className="brand-cloud">
                  { this.props.brands.map(brand => (
                    <div key={brand.logoURL} className="brand-cloud__brand">
                      <div className="brand-cloud__brand-inner" style={{backgroundImage: `url(${brand.logoURL})`, ...brand.style}}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          <div className="service-page__features">
            <div className="mini-title">
              <div className="mini-title__top">{ this.props.featureSubtitle || "We help can help on every step of the way" }</div>
              <div className="mini-title__bottom">{ this.props.featureTitle || "How can we help your company grow?" }</div>
            </div>

            <div className="features">
              {this.props.features.map(feature => (
                <div className="feature" key={feature.title}>
                  <div className="feature__icon">
                    <span className="icon" style={{color: feature.color}}>{feature.icon}</span>
                    <div className="feature__title">{feature.title}</div>
                    <div className="feature__description">{feature.description}</div>
                  </div>
                </div>
              ))}
              <div className="features__overlay">
                <Hexagon image={<img alt="" style={{width: 40, height: 40}} src={require('../images/logos/trifork_mini.svg')} />} />
              </div>
            </div>
          </div>

          <div id="contact-section">
            <SectionHeader icon="user" title="Are you ready to transform Your Company, Your Industry, or The World?" description={`
              Trifork has helped companies like Uber, Danske Bank, Volvo, Cisco and Grundfos,
              to make their projects a success. Let us show you what Trifork can do for you.
              `} />
            <ContactForm />
          </div>

          <PageFooter />
          </div>
          </div>
      );
  }
};
