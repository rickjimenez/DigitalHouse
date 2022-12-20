import React, {FC} from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import {useGlobalStyles} from '../styles/global';

interface Props {
  label: string;
  style?: ViewStyle;
  onPress?: () => void;
}

/**
 * Button Component
 *
 * @returns {React.ReactElement} Button.
 */
const Button: FC<Props> = ({label, style, onPress = () => {}}): JSX.Element => {
  const globalStyles = useGlobalStyles();
  return (
    <TouchableOpacity style={[globalStyles.btn, style]} onPress={onPress}>
      <Text style={globalStyles.btnTxt}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
