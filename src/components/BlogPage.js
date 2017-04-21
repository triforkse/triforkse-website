import React, { Component } from 'react'
import BlogPost from './BlogPost'
import PageFooter from './PageFooter';
import ActivityIndicator from './ActivityIndicator';
import BlogClient from '../api/BlogClient';
import ErrorBox from './ErrorBox';
import Blog from '../common/Blog';
import cn from 'classnames';

import './BlogPage.css';

const STATUS = {
  LOADING: "LOADING",
  LOADED: "LOADED",
  ERROR: "ERROR"
};

export default class BlogPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: STATUS.LOADING,
      posts: null,
      category: Blog.paramToCategory(props.params !== undefined ? props.params.category : undefined)
    };

    BlogClient.get(this.state.category)
      .then(posts => {
        this.setState({
          status: STATUS.LOADED,
          posts: posts
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

    return (
      <div>
        <div className="blog-page__header">
          <a href="/blog"><img className="blog-page__logo" alt="Trifork" src={require('../images/logos/trifork_logo_blog.svg')} /></a>
          <div className="blog-page__advert">
            <div className="blog-page__advert-text">
              We focus on technology and knowledge sharing
            </div>
            <div className="blog-page__advert-button">
              <a href="/" className="transparent-button">Find out more</a>
            </div>
          </div>
        </div>
        <div className="blog-page">
          <div className="blog-page__posts-column">
            {content}
          </div>
          <div className="blog-page__filters-column">
            <div className="blog-page__filters">
              <a className={cn("blog-page__filter", {"blog-page__filter--active": this.state.category === Blog.Category.ALL})} href="/blog">All Posts</a>
              <a className={cn("blog-page__filter", {"blog-page__filter--active": this.state.category === Blog.Category.BUSINESS})} href="/blog/business">Business</a>
              <a className={cn("blog-page__filter", {"blog-page__filter--active": this.state.category === Blog.Category.ENGINEERING})} href="/blog/engineering">Engineering</a>
              <a className={cn("blog-page__filter", {"blog-page__filter--active": this.state.category === Blog.Category.PEOPLE})} href="/blog/people">People</a>
            </div>
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

  renderLoaded() {
    const posts = this.state.posts;

    if (posts.length > 0) {
      return posts.map(post => <BlogPost key={post.id} post={post} />);
    }
    else {
      return <div className="blog-page__no-posts">No Posts :(</div>
    }
  }
}
