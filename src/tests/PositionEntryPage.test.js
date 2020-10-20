import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import PositionEntryPage from '../components/PositionEntryPage/PositionEntryPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <PositionEntryPage />
    </MemoryRouter>, div
  );
  ReactDOM.unmountComponentAtNode(div);
});