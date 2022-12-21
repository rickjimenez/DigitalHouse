import React, {FC, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useGetProducts} from '../queries';
import TotalPoints from '../components/TotalPoints';
import Welcome from '../components/Welcome';
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';
import {FilterOptions} from '../types/products';

/**
 * Home Component
 *
 * @returns {React.ReactElement} Home.
 */
const Home: FC = (): JSX.Element => {
  const {data, isLoading, isRefetching, refetch} = useGetProducts();
  const [showProductsCategory, setShowProductsCategory] =
    useState<FilterOptions>();
  const styles = useStyles();

  const products = () => {
    if (data && showProductsCategory) {
      switch (showProductsCategory) {
        case FilterOptions.Canjeados:
          return data.filter(e => e.is_redemption);
        case FilterOptions.Ganados:
          return data.filter(e => !e.is_redemption);
        default:
          return data;
      }
    }
    return [];
  };

  return (
    <SafeAreaView style={styles.container}>
      <Welcome name="Ruben Rodriguez" />
      <TotalPoints data={data} isLoading={isLoading} />
      {data && (
        <>
          <ProductList
            data={products()}
            isRefetching={isRefetching}
            refetch={refetch}
          />
          <Filter onFilterChange={setShowProductsCategory} />
        </>
      )}
    </SafeAreaView>
  );
};

const useStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 20,
    },
  });

export default Home;
