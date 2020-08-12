import React from 'react';
import ReactDOM from 'react-dom';
import UserDetailsInfo from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserDetailsInfo name="testName" text="testText" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
