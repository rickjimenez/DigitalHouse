import React, {FC} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import {GetProductsResponse} from '../types/api';
import {useGlobalStyles} from '../styles/global';

interface Props {
  data: GetProductsResponse[] | undefined;
  isLoading?: boolean;
}

/**
 * TotalPoints Component
 *
 * @returns {React.ReactElement} TotalPoints.
 */
const TotalPoints: FC<Props> = ({
  data = [],
  isLoading = false,
}): JSX.Element => {
  const styles = useStyles();
  const globalStyles = useGlobalStyles();

  const total = data.reduce((acc, cur) => {
    if (cur.is_redemption) {
      acc -= cur.points;
    } else {
      acc += cur.points;
    }
    return acc;
  }, 0);

  return (
    <View>
      <Text style={globalStyles.title}>TUS PUNTOS</Text>
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator animating={true} color="white" />
        ) : (
          <>
            <Text style={[styles.text, styles.subtitle]}>Diciembre</Text>
            <View style={styles.points}>
              <Text style={[styles.text, styles.pointsTxt]}>{total} pts</Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

const useStyles = () =>
  StyleSheet.create({
    container: {
      width: 286,
      height: 143,
      backgroundColor: '#334FFA',
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      padding: 20,
      alignSelf: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    points: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 16,
    },
    pointsTxt: {
      fontSize: 32,
    },
  });

export default TotalPoints;
