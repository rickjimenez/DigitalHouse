import 'react-native';
import {fireEvent, render, screen} from '@testing-library/react-native';
import React from 'react';
import ProductDetails from '../../../src/screens/ProductDetails';

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
  ...jest.requireActual('@tanstack/react-query'),
  useQueryClient: () => ({
    setQueryData: jest.fn(),
    getQueryData: jest.fn().mockReturnValueOnce(data).mockReturnValueOnce(data),
  }),
}));

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({navigate: mockedNavigate, goBack: mockedNavigate}),
}));

describe('test TotalPoints Comp', () => {
  test('renders correctly', async () => {
    render(<ProductDetails route={{params: {productId: '1'}}} />);

    const comp = screen.toJSON();
    expect(comp).toMatchSnapshot();
  });

  test('test go back', async () => {
    render(<ProductDetails route={{params: {productId: '2'}}} />);
    const btn = screen.getByTestId('back-btn');
    fireEvent.press(btn);
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
  });
});
