import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import OptionListItem from '../components/OptionListItem/OptionListItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <OptionListItem />
    </MemoryRouter>, div
  );
  ReactDOM.unmountComponentAtNode(div);
});