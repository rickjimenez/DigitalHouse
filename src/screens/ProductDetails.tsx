import React, {FC} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {ProductDetailsProps} from '../types/navigation';
import {useQueryClient} from '@tanstack/react-query';
import {GetProductsResponse} from '../types/api';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import format from 'date-fns/format';
import es from 'date-fns/locale/es';

/**
 * ProductDetails Component
 *
 * @returns {React.ReactElement} ProductDetails.
 */
const ProductDetails: FC<ProductDetailsProps> = ({route}): JSX.Element => {
  const styles = useStyles();
  const nav = useNavigation<ProductDetailsProps['navigation']>();
  const queryClient = useQueryClient();
  const data: GetProductsResponse[] | undefined = queryClient.getQueryData([
    'products',
  ]);

  const [item] = data?.filter(e => e.id === route.params.productId);
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.customHeader}>
        <Text style={styles.title}>{item.product}</Text>
      </SafeAreaView>

      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: item.image}} />
        </View>

        <View style={styles.productInfoContainer}>
          <Text style={styles.label}>Detalles del producto:</Text>
          <Text style={styles.date}>
            Comprado el{' '}
            {format(new Date(item.createdAt), "dd 'de' MMMM yyyy", {
              locale: es,
            })}
          </Text>
          <Text style={styles.label}>{`Con esta compra ${
            item.is_redemption ? 'canjeaste' : 'acumulaste'
          }:`}</Text>
          <Text style={styles.points}>{item.points} Puntos</Text>
          <Button
            label="Aceptar"
            onPress={() => nav.goBack()}
            testID="back-btn"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const useStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    customHeader: {
      backgroundColor: '#CFD6FF',
      height: 150,
      justifyContent: 'flex-end',
    },
    title: {
      fontSize: 24,
      fontWeight: '800',
      marginBottom: 20,
      marginLeft: 20,
    },
    productInfoContainer: {
      paddingHorizontal: 20,
    },
    label: {
      fontSize: 14,
      fontWeight: '800',
      color: '#9B9898',
    },
    date: {
      fontSize: 16,
      fontWeight: '800',
      marginVertical: 20,
    },
    points: {
      fontSize: 24,
      fontWeight: '800',
      marginVertical: 40,
    },
    image: {
      width: '100%',
      height: 350,
      borderRadius: 10,
    },
    imageContainer: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      padding: 20,
    },
  });

export default ProductDetails;
