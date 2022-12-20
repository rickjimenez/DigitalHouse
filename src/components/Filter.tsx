import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './Button';
import {FilterOptions} from '../types/products';

interface Props {
  onFilterChange: (val: FilterOptions) => void;
}

/**
 * Filter Component
 *
 * @returns {React.ReactElement} Filter.
 */
const Filter: FC<Props> = ({onFilterChange = () => {}}): JSX.Element => {
  const [filter, setFilter] = useState<FilterOptions>(FilterOptions.Todos);
  const styles = useStyles();

  useEffect(() => {
    onFilterChange(filter);
  }, [onFilterChange, filter]);

  return (
    <View style={styles.container}>
      {filter === FilterOptions.Todos ? (
        <>
          <Button
            label="Ganados"
            style={styles.leftBtn}
            onPress={() => setFilter(FilterOptions.Ganados)}
          />
          <Button
            label="Canjeados"
            style={styles.rightBtn}
            onPress={() => setFilter(FilterOptions.Canjeados)}
          />
        </>
      ) : (
        <Button
          label="Todos"
          style={styles.rightBtn}
          onPress={() => setFilter(FilterOptions.Todos)}
        />
      )}
    </View>
  );
};

const useStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginTop: 20,
    },
    leftBtn: {
      marginRight: 10,
      flex: 1,
    },
    rightBtn: {
      flex: 1,
    },
  });

export default Filter;
