import 'react-native';
import {render, screen} from '@testing-library/react-native';
import React from 'react';
import TotalPoints from '../../../src/components/TotalPoints';

const data = [
  {
    id: '1',
    product: 'product',
    is_redemption: false,
    createdAt: '2022-12-09T06:34:25.607Z',
    image: 'image',
    points: 100,
  },
  {
    id: '1',
    product: 'product',
    is_redemption: true,
    createdAt: '2022-12-09T06:34:25.607Z',
    image: 'image',
    points: 30,
  },
];

describe('test TotalPoints Comp', () => {
  test('renders correctly', () => {
    render(<TotalPoints data={data} />);

    const comp = screen.toJSON();
    expect(comp).toMatchSnapshot();
  });

  test('test total points', () => {
    render(<TotalPoints data={data} />);
    const result = screen.getByText('70 pts');
    expect(result).toBeTruthy();
  });
});
