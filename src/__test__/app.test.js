import App from '../app';
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('App', () => {

  test('Have URL on screen', async () => {
    render(<App />)
    const url = await waitFor(() => screen.getByTestId('url'));
    // console.log(url);
    expect(url).toHaveTextContent('URL');
  });

})
