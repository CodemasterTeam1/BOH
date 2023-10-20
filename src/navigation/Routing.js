import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from '../screen/auth/LoginScreen';
import BottomNavbar from './stack/Button/BottomNavbar';
import TradeInScreen from '../screen/trade_in/TradeInScreen';

const Routing = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="ToolsTradeIn" component={TradeInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
