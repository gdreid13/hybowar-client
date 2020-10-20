import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import CharacterForm from '../forms/CharacterForm';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  const history = createMemoryHistory();
  let location;
  let userId = 1;
  let positionId = 1;
  ReactDOM.render(
    <MemoryRouter initialEntries={["/positions/1"]}>
      <CharacterForm
        {...history}
        {...location}
        userId={1}
        positionId={1}
        state={
          userId,
          positionId
        }
      />
    </MemoryRouter>, div
  );
  ReactDOM.unmountComponentAtNode(div);
});