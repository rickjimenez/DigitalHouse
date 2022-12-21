import 'react-native';
import {render, screen, fireEvent} from '@testing-library/react-native';
import React from 'react';
import Filter from '../../../src/components/Filter';

describe('test Filter Comp', () => {
  test('renders correctly', () => {
    render(<Filter />);

    const comp = screen.toJSON();
    expect(comp).toMatchSnapshot();
  });

  test('test ganados btn', () => {
    const onFilterChange = jest.fn();
    render(<Filter onFilterChange={onFilterChange} />);
    const btn = screen.getByTestId('ganados-btn');
    fireEvent.press(btn);
    expect(onFilterChange).toBeCalled();
  });

  test('test canjeados btn', () => {
    const onFilterChange = jest.fn();
    render(<Filter onFilterChange={onFilterChange} />);
    const btn = screen.getByTestId('canjeados-btn');
    fireEvent.press(btn);
    expect(onFilterChange).toBeCalled();
    expect(screen.getByTestId('todos-btn')).toBeTruthy();
  });

  test('test todos btn', () => {
    const onFilterChange = jest.fn();
    render(<Filter onFilterChange={onFilterChange} />);
    const btn = screen.getByTestId('canjeados-btn');
    fireEvent.press(btn);
    expect(onFilterChange).toBeCalled();
    const todosBtn = screen.getByTestId('todos-btn');
    fireEvent.press(todosBtn);
    expect(screen.getByTestId('canjeados-btn')).toBeTruthy();
  });
});
