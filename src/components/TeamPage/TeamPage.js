import React, { Component } from 'react'
import Icon  from 'react-fontawesome';
import Navbar from '../Navbar';
import PageFooter from '../PageFooter';
import './TeamPage.css';

const Teamtailor = window.Teamtailor;


export default class TeamPage extends Component {
  componentDidMount() {
    Teamtailor.Jobs.init({
      company: 'zsE8D5Vb8zA',
      limit: 10,
    });
  }

  render() {
    return (
      <div>
        <Navbar transparent={false} />
        <div id="team-page">
          <div className="page-top">
            <div className="page-top__text">
              <h2>Stop just writing code, and start programming</h2>
              <p>
                At Trifork we are currently looking for new talent to join in the fun.
                You think you've got what it takes or are up for the challenge in making us better, you should call us.
                We think Trifork is a great place to work. That's why we work here! :-)
              </p>
            </div>
          </div>
        </div>
        <div className="section section--content">
          <div className="container">
            <div className="row">
              <div className="col-md">
                <h1 className="section__title">What we're looking for</h1>
                <div className="section__content">
                  <p>
                    We are looking for social, outgoing people that consider themselves generalists. You are good at many things and expert at a few things.
                  </p>
                  <p>
                    You should be ready to take on challenges in areas you have never delt with before and be ready to plan and host social events, come up with innovative product ideas and make our clients happy.
                </p>
                  <p>
                    You are inquisitive, intelligent, and hungry to learn from your co-workers – and teach others as well.
                </p>
                <p>
                    We are looking for full-stack developers, conference coordinators, and project managers.
                </p>
              </div>
              </div>
              <div className="col-md">
                <div className="section__content section__content--no-header">
                  <div id="teamtailor-jobs-widget"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PageFooter />
      </div>
    );
  }
}
