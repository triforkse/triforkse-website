import React from 'react';
import ReactDOM from 'react-dom';
import TeamPage from './TeamPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TeamPage />, div);
});
