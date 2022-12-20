import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface Props {
  name: string;
}

/**
 * Welcome Component
 *
 * @returns {React.ReactElement} Welcome.
 */
const Welcome: FC<Props> = ({name}): JSX.Element => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bienvenido de vuelta!</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const useStyles = () =>
  StyleSheet.create({
    container: {
      marginBottom: 20,
    },
    welcome: {
      fontWeight: '800',
      fontSize: 20,
    },
    name: {
      fontWeight: '600',
      fontSize: 16,
    },
  });

export default Welcome;
