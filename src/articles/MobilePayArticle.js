import React from "react";
import ArticlePage from "../components/ArticlePage";

import Image1 from "./MobilePayArticle-1.jpg";

export default class MobilePayArticle extends ArticlePage {
  renderContent() {
    return (
      <article className="article">
        <header className="article__header">
          <h1 className="article__title">Building a Mobile Payment Platform used by millions of users every day.</h1>
          <div className="article__divider"></div>
          <div className="article__focus">IOS / ANDROID / WINDOWS PHONE & DISTRIBUTED SYSTEMS</div>
        </header>

        <section className="article__section">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

          <img src={Image1} role="presentation" />

          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </section>
      </article>
    )
  }
}
