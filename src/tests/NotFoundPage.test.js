import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>, div
  );
  ReactDOM.unmountComponentAtNode(div);
});