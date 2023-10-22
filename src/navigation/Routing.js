import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import AuthNavigation from './stack/AuthNavigation';
import BottomNavbar from './stack/BottomNavbar';
import HomeNavigation from './stack/HomeNavigation';
import TrackingNavigation from './stack/TrackingNavigation';
import HistoryNavigation from './stack/HistoryNavigation';
import IncentiveNavigation from './stack/IncentiveNavigation';
import ProfileNavigation from './stack/ProfileNavigation';
import TradeInNavigation from './stack/TradeInNavigation';
import NewCarNavigation from './stack/NewCarNavigation';

const Routing = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
        <Stack.Screen name="BottomNavbar" component={BottomNavbar} />
        <Stack.Screen name="HomeNavigation" component={HomeNavigation} />
        <Stack.Screen
          name="TrackingNavigation"
          component={TrackingNavigation}
        />
        <Stack.Screen name="HistoryNavigation" component={HistoryNavigation} />
        <Stack.Screen
          name="IncentiveNavigation"
          component={IncentiveNavigation}
        />
        <Stack.Screen name="ProfileNavigation" component={ProfileNavigation} />
        <Stack.Screen name="TradeInNavigation" component={TradeInNavigation} />
        <Stack.Screen name="NewCarNavigation" component={NewCarNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
