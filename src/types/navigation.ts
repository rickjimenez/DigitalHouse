import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import ProductDetails from '../screens/ProductDetails';

export type RootStackParamList = {
  Home: undefined;
  ProductDetails: {
    productId: string;
  };
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type ProductDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductDetails'
>;

export type DefaultNavigationProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
