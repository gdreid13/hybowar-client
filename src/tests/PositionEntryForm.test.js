import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import PositionEntryForm from '../forms/PositionEntryForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <PositionEntryForm />
    </MemoryRouter>, div
  );
  ReactDOM.unmountComponentAtNode(div);
});