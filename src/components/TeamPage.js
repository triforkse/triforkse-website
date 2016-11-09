import React, { Component } from 'react'
import Navbar from './Navbar';
import PageFooter from './PageFooter';
import EmployeeCard from './EmployeeCard';
import './TeamPage.css';

export default class TeamPage extends Component {
  render() {
    return (
      <div>
        <Navbar transparent={false}/>
        <div className="team-container">
          <EmployeeCard name="Thomas" position="CEO" avatar={require("../images/graphics/generic-avatar.png")} linkedin="linkedin" github="github"/>
          <EmployeeCard name="Florain" position="Developer"/>
          <EmployeeCard name="Set" position="Community Manager" avatar={require("../images/graphics/generic-avatar.png")} linkedin="set"/>
          <EmployeeCard name="Joakim" position="Something" linkedin="joakim"/>
          <EmployeeCard name="Amina" position="Developer" github="aminahh"/>
          <EmployeeCard name="Hampus" position="Developer" avatar={require("../images/graphics/generic-avatar.png")}/>
          <EmployeeCard name="Blair Harris" position="Junior Developer" linkedin="https://se.linkedin.com/in/blairehh" github="https://github.com/blairehh"/>
          <EmployeeCard name="Max" position="Developer" avatar={require("../images/graphics/generic-avatar.png")}/>
          <EmployeeCard name="Andreas" position="Developer"/>
        </div>
        <PageFooter />
      </div>
    );
  }
}
