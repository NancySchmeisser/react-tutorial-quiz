import React from 'react';
import ReactDOM from 'react-dom';
import Teacher from './Teacher';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Teacher />, div);
  ReactDOM.unmountComponentAtNode(div);
});
