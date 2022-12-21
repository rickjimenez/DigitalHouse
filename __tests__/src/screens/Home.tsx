import 'react-native';
import {fireEvent, render, screen} from '@testing-library/react-native';
import React from 'react';
import Home from '../../../src/screens/Home';

const data = [
  {
    id: '1',
    product: 'product 1',
    is_redemption: false,
    createdAt: '2022-12-09T06:34:25.607Z',
    image: 'image',
    points: 100,
  },
  {
    id: '2',
    product: 'product 2',
    is_redemption: true,
    createdAt: '2022-12-09T06:34:25.607Z',
    image: 'image',
    points: 30,
  },
];

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn().mockReturnValue({data, isLoading: false, error: {}}),
}));

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});

describe('test TotalPoints Comp', () => {
  test('renders correctly', async () => {
    render(<Home />);

    const comp = screen.toJSON();
    expect(comp).toMatchSnapshot();
  });

  test('test filter canjeados', () => {
    render(<Home />);
    const btn = screen.getByTestId('canjeados-btn');
    fireEvent.press(btn);
    expect(screen.queryByTestId('todos-btn')).toBeTruthy();
    expect(screen.queryByText('product 2')).toBeTruthy();
    expect(screen.queryByText('product 1')).toBeNull();
  });

  test('test filter ganados', () => {
    render(<Home />);
    const btn = screen.getByTestId('ganados-btn');
    fireEvent.press(btn);
    expect(screen.queryByTestId('todos-btn')).toBeTruthy();
    expect(screen.queryByText('product 1')).toBeTruthy();
    expect(screen.queryByText('product 2')).toBeNull();
  });
});
