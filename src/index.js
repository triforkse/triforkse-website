import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import HomePage from './components/HomePage';
import TeamPage from './components/TeamPage';
import BlogPage from './components/BlogPage';
import MobilePayArticle from './articles/MobilePayArticle';
import NotFoundPage from './components/NotFoundPage';
import './index.css';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={HomePage} />
    <Route path="team" component={TeamPage}/>
    <Route path="blog(/:category)" component={BlogPage} />
    <Route path="our-work/mobilepay" component={MobilePayArticle} />
    <Route path="*" component={NotFoundPage}/>
  </Router>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);
