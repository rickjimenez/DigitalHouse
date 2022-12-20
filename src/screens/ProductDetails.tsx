import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ProductDetailsProps} from '../types/navigation';

/**
 * ProductDetails Component
 *
 * @returns {React.ReactElement} ProductDetails.
 */
const ProductDetails: FC<ProductDetailsProps> = ({route}): JSX.Element => {
  const styles = useStyles();
  console.log(route.params.productId);
  return (
    <View style={styles.container}>
      <Text>ProductDetails</Text>
    </View>
  );
};

const useStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default ProductDetails;
