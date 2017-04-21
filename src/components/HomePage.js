import React, { Component } from 'react';
import Navbar from './Navbar';
import PageFooter from './PageFooter';
import PhotoGrid from './PhotoGrid';
import List from './List';
import Testimonial from './Testimonial';
import FeatureList from './FeatureList';
import HumioSplash from '../splashes/HumioSplash';
import ScrumSplash from '../splashes/ScrumSplash';
import SectionHeader from './SectionHeader';
import './HomePage.css';
import BEM from '../BEM';

const page = BEM("home-page");
const section = BEM("section");

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {splash: (Math.random() > 0.5) ? <ScrumSplash /> : <HumioSplash />};
  }

  render() {
    return (
      <div {...page()}>
        <div {...page("splash")}>
          <Navbar transparent light />
          <div className="homepage__splash-content">
            <div className="row">
              <div className="col-xs-12 col-sm-5">
                <div className="homepage-title">
                  <img className="homepage-title__icon" style={{width: 180}} alt="" src={require("../images/splash/Hexagons.svg")} />
                  <h1 className="homepage-title__title">Driving Digital Transformation</h1>
                  <div className="homepage-title__description">
                    Trifork helps companies develop new products,
                    and existing data to drive new business.
                  </div>
                  <a href="/consulting" className="splash__call-to-action splash__call-to-action--full">Read More About our Services</a>
                </div>
              </div>
              <div className="col-xs-12 col-sm-3 col-sm-offset-1">
                <div className="mini-case">
                  <div className="mini-case__icon"><img style={{width: 180}} alt="" src={require("../images/splash/hardhats.svg")} /></div>
                  <div className="mini-case__title">Industry<div className="mini-case__subtitle">Case Study</div></div>
                  <div className="mini-case__description">
                    Trifork and Grundfos developed<br /> Secure
                  Device Grid.<br/> An IoT platform focused on Security.<br />
                    Now serving over 100.000 units.
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-3">
                <div className="mini-case">
                  <div className="mini-case__icon"><img style={{width: 90}} alt="" src={require("../images/splash/chart.svg")} /></div>
                  <div className="mini-case__title">Finance<div className="mini-case__subtitle">Case Study</div></div>
                  <div className="mini-case__description">
                    Trifork and Danske Bank developed MobilePay.
                    person-to-person, in-store and B2B payments.<br />
                    Serving millions of transactions per day.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section2">
          <div className="section2__content">
          <h1 className="section2__title">Experience and skills you need</h1>
          <div className="section2__description">
            Trifork has produced high quality applications for hundreds of clients. We have built software for more than 20 years and no project is too large – or too small. We focus on constantly educating ourselves, our clients, and the community. We hone our skills, we aspire to be the best we can be, and accelerate our clients IT projects.
          </div>
          </div>
        </div>

        <div {...page("content")}>
          <div {...page("left")} style={{backgroundImage: `url(${require("../images/photos/developers.jpg")})`}} id="home-page-team-img"></div>
          <div {...page("right")}>
            <div {...section(null, "narrow")}>
              <div {...section("text")}>
                <FeatureList columns={2} items={[
                  { name: "Log Management", icon: "dehaze", description: "Real-Time Centralized Loggning for BI, Monitorering and Troubleshooting", color: "rgb(0, 198, 168)"},
                  { name: "Mobile & Web Apps", icon: "web", description: "Build state of the art apps coded in React, React Native, Swift, Phoenix, NodeJS and Java", color: "rgb(255, 184, 25)"},
                  { name: "System Design", icon: "devices_other", description: "Build scalable solutions using coded and Java, Elixir, Go and Scala", color: "rgb(0, 168, 72)"},
                  { name: "Machine Learning", icon: "device_hub", description: "Improve your products by letting an AI analyse your data make smart decisions", color: "rgb(189, 0, 0)"},
                ]} />
              </div>
            </div>
          </div>
        </div>

        <div {...page("content", "alternate")}>
          <div {...page("showcase-left")}>
            <div {...page("showcase-image")}></div>
          </div>
          <div {...page("showcase-right")}>
            <div {...page("showcase-casestudy")}>CASE STUDY</div>
            <a href="/our-work/mobilepay" {...page("showcase-link")}>Building a Secure Payment Platform</a>
            <h1 {...page("showcase-title")}>MobilePay</h1>
          </div>
        </div>

        <div {...page("content-divider")}></div>

        <div {...page("content")}>
          <div {...page("left", "narrow")}>
            <PhotoGrid photos={[
              require("../images/photos/1.jpg"),
              require("../images/photos/2.jpg"),
              require("../images/photos/3.jpg"),
              require("../images/photos/4.jpg"),
              require("../images/photos/5.jpg"),
              require("../images/photos/6.jpg"),
            ]} />
          </div>
          <div {...page("right")}>
            <div {...section(null, "narrow")}>
              <h2 {...section("title")}>Small &amp; Effective Teams</h2>
              <div {...section("text")}>
                <div className="description">
                  You’ll be working with a small, dedicated team built to fit the needs of your project. Each team works on one project at a time to stay focused. We use tools like Trello, Slack and GitHub to communicate frequently.
                </div>
                <List
                  heading="How we choose to work"
                  columns={2}
                  items={[
                  "In small teams of two to four",
                  "With focus on quality & self-improvement",
                  "In a diverse and cross-functional environment",
                  "Focusing on communication",
                  "In pairs or mobs",
                  "With flexible hours, requirements, and people"
                ]} />
              </div>
            </div>
          </div>
        </div>


        <div className="section2 section2--focus">

          <div className="home-page__container home-page__testimonials">

            <SectionHeader small title="Here's what our customers say" subtitle="Here are some of the companies that trust Trifork" />

            <div className="row">
              <div className="col-sm-6">
                <Testimonial
                  light
                  name="Thomas Ferguson"
                  jobTitle="CEO, GeriMedica BV"
                  text="Since engaging with Trifork as our technological partner in developing Ysis 2.0. their expertise &amp; insight has given us significant return on investment."
                  portraitUrl={require('../images/people/thomas_ferguson.jpg')} />
              </div>
              <div className="col-sm-6">
                <Testimonial
                  light
                  name="Jesper Nielsen"
                  jobTitle="Head of Danske Bank Business Development"
                  text="Collaborating with
                        Trifork gives us excellent
                        access to both trend setting technology
                        and business development experts
                        who inspire and challenge us
                        before under and after we bring new
                        solutions to our markets. The long
                        term strategic mobile partnership with
                        Trifork is very important to us."
                  portraitUrl={require('../images/people/jesper_nielsen.jpg')} />
              </div>
            </div>
          </div>
        </div>

        <PageFooter />
      </div>
    );
  }
}
