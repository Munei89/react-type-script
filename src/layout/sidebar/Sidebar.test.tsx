import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './index';
import { MemoryRouter } from 'react-router';

it('renders without crashing on dashboard route', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={['/dashboard']}>
      <Sidebar />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing on reports route', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={['/reports']}>
      <Sidebar />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
