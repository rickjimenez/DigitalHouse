import React, {FC} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  Image,
} from 'react-native';
import {GetProductsResponse} from '../types/api';
import format from 'date-fns/format';
import es from 'date-fns/locale/es';
import {useNavigation} from '@react-navigation/native';
import {HomeProps} from '../types/navigation';

interface Props {
  data: GetProductsResponse[];
  refetch?: () => void;
  isRefetching?: boolean;
}

/**
 * ProductList Component
 *
 * @returns {React.ReactElement} ProductList.
 */
const ProductList: FC<Props> = ({
  data = [],
  refetch = () => {},
  isRefetching = false,
}): JSX.Element => {
  const nav = useNavigation<HomeProps['navigation']>();
  const styles = useStyles();

  const renderItem: ListRenderItem<GetProductsResponse> = ({item, index}) => {
    const lastItem = data.length === index + 1 && styles.lastItem;
    const fistItem = index === 0 && styles.firstItem;
    return (
      <TouchableOpacity
        style={[styles.listItem, lastItem, fistItem]}
        onPress={() => nav.navigate('ProductDetails', {productId: item.id})}>
        <View style={styles.productInfoContainer}>
          <Image style={[styles.thumb]} source={{uri: item.image}} />
          <View>
            <Text style={styles.productName}>{item.product}</Text>
            <Text style={styles.date}>
              {format(new Date(item.createdAt), "dd 'de' MMMM yyyy", {
                locale: es,
              })}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.points}>
            <Text
              style={
                item.is_redemption ? styles.negative : styles.positive
              }>{`${item.is_redemption ? '- ' : '+ '}`}</Text>
            {item.points}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        onRefresh={refetch}
        refreshing={isRefetching}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const useStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: 'white',
      borderRadius: 20,
      flex: 1,
    },
    listItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
      marginHorizontal: 20,
    },
    firstItem: {
      marginTop: 20,
    },
    lastItem: {
      marginBottom: 20,
    },
    productInfoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    thumb: {
      width: 45,
      height: 45,
      borderRadius: 10,
      marginRight: 10,
    },
    productName: {
      fontSize: 14,
      fontWeight: '800',
    },
    date: {
      fontSize: 12,
      fontWeight: '400',
    },
    points: {
      fontWeight: '800',
      fontSize: 14,
    },
    negative: {
      color: '#FF0000',
    },
    positive: {
      color: '#00B833',
    },
  });

export default ProductList;
