import 'react-native';
import {render, screen} from '@testing-library/react-native';
import React from 'react';
import App from '../App';

test('renders correctly', () => {
  render(<App />);

  const app = screen.toJSON();
  expect(app).toMatchSnapshot();
});
