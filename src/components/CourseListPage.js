import React from "react";
import ActivityIndicator from './ActivityIndicator';
import CourseClient from '../api/CourseClient';
import ErrorBox from './ErrorBox';

import './BlogPage.css';

const STATUS = {
  LOADING: "LOADING",
  LOADED: "LOADED",
  ERROR: "ERROR"
};

export default class CourseListPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      status: STATUS.LOADING,
      courses: null,
    };

    CourseClient.get()
      .then(courses => {
        this.setState({
          status: STATUS.LOADED,
          courses: courses
        });
      })
      .catch(error => {
        this.setState({
          status: STATUS.ERROR,
          errorMessage: error,
          courses: null
        });
      });
  }

  render() {
    let content = null;

    switch (this.state.status) {
      case STATUS.LOADING:
        content = this.renderLoading();
        break;
      case STATUS.LOADED:
        content = this.renderLoaded();
        break;
      case STATUS.ERROR:
        content = this.renderError();
        break;
      default:
        console.error("Unknown Status", this.state.status);
        content = null;
    }

    return content;
  }

  renderError() {
    return <ErrorBox message={this.state.errorMessage} />;
  }

  renderLoading() {
    return <ActivityIndicator />;
  }

  renderLoaded() {
    return <div>
      <ul>
        {this.state.courses.map(course => {
          return <li key={course.id}><a href={"/courses/" + course.slug}>{course.title}</a></li>
        })}
      </ul>
    </div>;
  }
}
