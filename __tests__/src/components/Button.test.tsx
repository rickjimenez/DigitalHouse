import 'react-native';
import {render, screen, fireEvent} from '@testing-library/react-native';
import React from 'react';
import Button from '../../../src/components/Button';

describe('test Button Comp', () => {
  test('renders correctly', () => {
    render(<Button label="test" />);

    const comp = screen.toJSON();
    expect(comp).toMatchSnapshot();
  });

  test('test press action', () => {
    const onPress = jest.fn();
    render(<Button label="test" onPress={onPress} testID="btn" />);
    const btn = screen.getByTestId('btn');
    fireEvent.press(btn);
    expect(onPress).toBeCalled();
  });
});
