import React from "react";
import BlogPost from './BlogPost'
import ActivityIndicator from './ActivityIndicator';
import CourseClient from '../api/CourseClient';
import ErrorBox from './ErrorBox';

import './BlogPage.css';

const STATUS = {
  LOADING: "LOADING",
  LOADED: "LOADED",
  ERROR: "ERROR"
};

export default class CoursePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      status: STATUS.LOADING,
      course: null,
    };

    CourseClient.getBySlug(this.props.params.slug)
      .then(course => {
        this.setState({
          status: STATUS.LOADED,
          course: course
        });
      })
      .catch(error => {
        this.setState({
          status: STATUS.ERROR,
          errorMessage: error,
          course: null
        })
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
    return <div>{this.state.course.abstract}</div>;
  }
}
