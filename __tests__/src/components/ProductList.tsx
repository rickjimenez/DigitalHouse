import 'react-native';
import {render, screen, fireEvent} from '@testing-library/react-native';
import React from 'react';
import ProductList from '../../../src/components/ProductList';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('test ProductList Comp', () => {
  test('renders correctly', () => {
    const refetch = jest.fn();
    render(
      <ProductList
        refetch={refetch}
        data={[
          {
            id: '1',
            product: 'product',
            is_redemption: false,
            createdAt: '2022-12-09T06:34:25.607Z',
            image: 'image',
            points: 100,
          },
        ]}
      />,
    );

    const comp = screen.toJSON();
    expect(comp).toMatchSnapshot();
  });

  test('test list', () => {
    const refetch = jest.fn();
    render(
      <ProductList
        refetch={refetch}
        data={[
          {
            id: '1',
            product: 'product',
            is_redemption: true,
            createdAt: '2022-12-09T06:34:25.607Z',
            image: 'image',
            points: 100,
          },
        ]}
      />,
    );
    const itemBtn = screen.getByTestId('item-btn');
    fireEvent.press(itemBtn);
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
  });
});
