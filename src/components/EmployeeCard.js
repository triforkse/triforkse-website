import React, { Component } from 'react';
import './EmployeeCard.css';
import '../index.css';

export default class EmployeeCard extends Component {

  render() {
    let employeeTitleClasses = "employee-card-title ";
    employeeTitleClasses += this.props.avatar ? "employee-card-title-with-avatar" : "";


    return (
      <div>
        <div className="employee-card">
          <img className={this.props.avatar ? "employee-card-avatar" : "employee-card-avatar-hidden"} src={this.props.avatar}/>
          <div className={employeeTitleClasses}>
            {this.props.name}
            <div className="employee-card-position">{this.props.position}</div>
          </div>
          <div className="employee-card-about">
            I like long walks along beaches and smelling red roses while playing with adorable puppies
          </div>
          <div className="employee-card-social">
            { this.props.linkedin ? <SocialPlatformIcon icon={require("../images/logos/linkedin-512.png")} tooltip="View Linkedin profile" url={this.props.linkedin}/> : null}
            { this.props.github ? <SocialPlatformIcon icon={require("../images/logos/github.png")} tooltip="View Github profile" url={this.props.github}/> : null}
          </div>
        </div>
      </div>
    );
  }
}

class SocialPlatformIcon extends Component {

  constructor(props) {
     super(props);
     this.state = {
       showToolTip: false,
     };
   }

  iconMouseEnter = (e) => {
    this.setState({showToolTip: true});
  }

  iconMouseLeave = (e) => {
    this.setState({showToolTip: false});
  }

  render() {
    let tooltipClasses = "social-platform-icon-tooltip ";
    tooltipClasses += this.state.showToolTip ? "social-platform-icon-tooltip-show" : "social-platform-icon-tooltip-hide";

    let tooltipArrowClasses = "social-platform-icon-tooltip-arrow ";
    tooltipArrowClasses += this.state.showToolTip ? "social-platform-icon-tooltip-show" : "social-platform-icon-tooltip-hide";

    return (
      <div className="social-platform-icon">
        <div className={tooltipClasses}>{this.props.tooltip}</div>
        <div className={tooltipArrowClasses}></div>
        <a href={this.props.url} target="_blank"><img className="social-platform-icon-logo" onMouseEnter={(e) => this.iconMouseEnter(e)} onMouseLeave={(e) => this.iconMouseLeave(e)} src={this.props.icon}/></a>
      </div>
    );
  }
}
