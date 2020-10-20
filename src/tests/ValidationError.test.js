import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ValidationError from '../components/ValidationError/ValidationError';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <ValidationError />
    </MemoryRouter>, div
  );
  ReactDOM.unmountComponentAtNode(div);
});