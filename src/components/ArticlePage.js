import React, { Component } from 'react'
import PageFooter from './PageFooter';
import ActivityIndicator from './ActivityIndicator';
import ErrorBox from './ErrorBox';

import './ArticlePage.css';
import './BlogPage.css';

export default class ArticlePage extends Component {
  render() {
    const content = this.renderContent();
    return (
      <div>
        <div className="blog-page__header">
          <a href="/blog"><img className="blog-page__logo" alt="Trifork Blog" src={require('../images/logos/trifork_logo_blog.svg')} /></a>
          <div className="blog-page__advert">
            <div className="blog-page__advert-text">
              We focus on technology and knowledge sharing
            </div>
            <div className="blog-page__advert-button">
              <a href="/team" className="transparent-button">Find out more</a>
            </div>
          </div>
        </div>
        <div className="blog-page">
          <div className="blog-page__posts-column">
            {content}
          </div>
        </div>
        <PageFooter />
      </div>
    );
  }

  renderError() {
    return <ErrorBox message={this.state.errorMessage} />;
  }

  renderLoading() {
    return <ActivityIndicator />;
  }
}
