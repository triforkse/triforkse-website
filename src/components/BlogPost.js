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
          { /* AddToAny BEGIN */ }
          <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
          <a className="a2a_dd" href="https://www.addtoany.com/share"></a>
          <a className="a2a_button_facebook"></a>
          <a className="a2a_button_hacker_news"></a>
          <a className="a2a_button_twitter"></a>
          <a className="a2a_button_linkedin"></a>
          </div>
          <script>
          var a2a_config = a2a_config || {};
          a2a_config.linkname = "Trifork Blog";
          a2a_config.linkurl = "http://trifork.se/";
          </script>
          <script async src="https://static.addtoany.com/menu/page.js"></script>
          { /* AddToAny END */ }
          <div className="blog-post__arrow"></div>
          <div className="blog-post__creation-info">{post.authorName} in <a href={'/blog/' + post.category}>{post.category}</a> {DateFormat.format(post.createdAt)}</div>
          <h1 className="blog-post__title"><a href={`/blog/posts/${post.slug}`}>{post.title}</a></h1>

          {post.content}
        </div>
      </div>
    );
  }
}
