import React, { Component } from 'react'
import DateFormat from '../common/DateFormat';
import './BlogPost.css';

export default class BlogPost extends Component {
  render() {
    const post = this.props.post;
    const authorURL = require(`../images/people/${post.authorId}.jpg`);

    return (
      <div className="blog-post">
        <div className="blog-post__author">
          <div style={{backgroundImage: `url(${authorURL})`}} className="blog-post__avatar"></div>
        </div>
        <div className="blog-post__content">
          <div className="blog-post__arrow"></div>
          <div className="blog-post__creation-info">{post.authorName} in <a href={'/blog/' + post.category}>{post.category}</a> {DateFormat.format(post.createdAt)}</div>
          <h1 className="blog-post__title">{post.title}</h1>

          {post.content}
        </div>
      </div>
    );
  }
}
