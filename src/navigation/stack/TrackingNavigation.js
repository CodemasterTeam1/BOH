import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TrackingScreen from '../../screen/tracking/TrackingScreen';

const Stack = createNativeStackNavigator();

const TrackingNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TrackingScreen" component={TrackingScreen} />
    </Stack.Navigator>
  );
};

export default TrackingNavigation;
