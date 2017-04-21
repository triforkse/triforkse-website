import React from "react";
import ArticlePage from "./ArticlePage";
import BlogPost from './BlogPost'
import ActivityIndicator from './ActivityIndicator';
import BlogClient from '../api/BlogClient';
import ErrorBox from './ErrorBox';
import Blog from '../common/Blog';

import './BlogPage.css';

const STATUS = {
  LOADING: "LOADING",
  LOADED: "LOADED",
  ERROR: "ERROR"
};

export default class BlogArticle extends ArticlePage {

  constructor(props) {
    super(props);

    this.state = {
      status: STATUS.LOADING,
      posts: null,
      category: Blog.paramToCategory(props.params !== undefined ? props.params.category : undefined)
    };

    BlogClient.getBySlug(this.props.params.slug)
      .then(post => {
        this.setState({
          status: STATUS.LOADED,
          post: post
        });
      })
      .catch(error => {
        this.setState({
          status: STATUS.ERROR,
          errorMessage: error,
          posts: null
        })
      });
  }

  renderContent() {
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
    return <BlogPost post={this.state.post} />;
  }
}
