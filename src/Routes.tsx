import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types/navigation';
import Home from './screens/Home';
import ProductDetails from './screens/ProductDetails';

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Routes Component
 *
 * @returns {React.ReactElement} Routes.
 */
const Routes: FC = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
