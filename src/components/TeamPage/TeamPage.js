import React, { Component } from 'react'
import Navbar from '../Navbar';
import PageFooter from '../PageFooter';
import './TeamPage.css';


export default class TeamPage extends Component {
  render() {
    return (
      <div>
        <Navbar transparent={false}/>
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
        <div className="container">
          <div className="row">
            <div className="col-md">
weffewfew
            </div>
            <div className="col-md">
shouldwee
            </div>
          </div>
        </div>
        <PageFooter />
      </div>
    );
  }
}
