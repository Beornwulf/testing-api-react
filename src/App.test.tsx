import React from 'react';
import {render, screen} from '@testing-library/react';
import StarWars from './App';


test("renders the correct person from the API", async () => {
  render(<StarWars />);
  expect(await screen.findByText(/Luke Skywalker/)).toBeInTheDocument();
})