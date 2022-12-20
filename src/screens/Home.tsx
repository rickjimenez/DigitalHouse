import React, {FC} from 'react';
import {StyleSheet, SafeAreaView, ActivityIndicator} from 'react-native';
import {useGetProducts} from '../queries';
import {HomeProps} from '../types/navigation';
import TotalPoints from '../components/TotalPoints';
import Welcome from '../components/Welcome';
import ProductList from '../components/ProductList';

/**
 * Home Component
 *
 * @returns {React.ReactElement} Home.
 */
const Home: FC<HomeProps> = (): JSX.Element => {
  const {data, isLoading, isRefetching, refetch} = useGetProducts();
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Welcome name="Ruben Rodriguez" />
      {data && (
        <>
          <TotalPoints data={data} />
          <ActivityIndicator animating={isLoading} />
          <ProductList
            data={data}
            isRefetching={isRefetching}
            refetch={refetch}
          />
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
