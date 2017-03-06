import React, { Component } from 'react';
import Navbar from './Navbar';
import PageFooter from './PageFooter';
import PhotoGrid from './PhotoGrid';
import Comment from './Comment';
import List from './List';
import FeatureList from './FeatureList';
import HumioSplash from '../splashes/HumioSplash';
import ScrumSplash from '../splashes/ScrumSplash';
import './HomePage.css';
import BEM from '../BEM';

const page = BEM("home-page");
const section = BEM("section");

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {splash: (Math.random() > -1) ? <ScrumSplash /> : <HumioSplash />};
  }

  render() {
    return (
      <div {...page()}>
        <div {...page("splash")}>
          <Navbar transparent={true} />
          {this.state.splash}
        </div>

        <div {...page("content")}>
          <div {...page("left")} style={{backgroundImage: `url(${require("../images/photos/developers.jpg")})`}} id="home-page-team-img"></div>
          <div {...page("right")}>
            <div {...section(null, "narrow")}>
              <h2 {...section("title")}>Experience and skills you need.</h2>
              <div {...section("text")}>
                <div className="description">
                  Trifork has produced high quality applications for hundreds of clients.
                  We have been software for more than 20 years and
                  no project is too large – or too small. We focus on constantly educating ourselves, our clients, and the community.
                  We hone our skills, we aspire to be the best we can be, and accelerate our clients IT projects.
                </div>
                <FeatureList columns={2} items={[
                  { name: "Log Management", icon: "dehaze", description: "Real-Time Centralized Loggning for BI, Monitorering and Troubleshooting", color: "rgb(0, 198, 168)"},
                  { name: "Mobile & Web Apps", icon: "web", description: "Build state of the art apps coded in React, React Native, Swift, Phoenix, NodeJS and Java", color: "rgb(255, 184, 25)"},
                  { name: "System Design", icon: "devices_other", description: "Build scalable solutions using coded and Java, Elixir, Go and Scala", color: "rgb(0, 168, 72)"},
                  { name: "IoT & Security", icon: "device_hub", description: "Enable products to transition to IoT, securely and reliably", color: "rgb(189, 0, 0)"},
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

        <div {...page("content", "focus")} id="comments">
          <div className="home-page__container">
            <div {...page("left", "narrow")}>
              <Comment
                narrow={true}
                name="Thomas Ferguson, CEO, GeriMedica BV"
                text="Since engaging with Trifork as our technological partner in developing Ysis 2.0. their expertise & insight has given us significant return on investment."
                image={require('../images/people/thomas_ferguson.jpg')} />
            </div>
            <div {...page("right")}>
              <Comment
                narrow={true}
                name="Mark Wraa-Hansen, Head of MobilePay, Danske Bank"
                text="With MobilePay we have succeeded in delivering a simple and innovative payment solution for consumers and merchants. The MobilePay app is quickly approaching 3.5 million registered users and has evolved from a P2P app to a MobilePay ‘family’ with solutions for small businesses, online shopping and payment through third-party apps."
                image={require('../images/people/mark_wraa.jpg')} />
            </div>
          </div>
        </div>

        <PageFooter />
      </div>
    );
  }
}
