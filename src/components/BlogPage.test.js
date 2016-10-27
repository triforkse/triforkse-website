import React from 'react';
import ReactDOM from 'react-dom';
import BlogPage from './BlogPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BlogPage />, div);
});
