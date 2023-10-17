import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from '../screen/auth/LoginScreen';
import BottomNavbar from './stack/Button/BottomNavbar';

const Routing = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="BottomNavbar" component={BottomNavbar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
