import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import InsentifScreen from '../../screen/insentif/InsentifScreen';

const Stack = createNativeStackNavigator();

const IncentiveNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="InsentifScreen" component={InsentifScreen} />
    </Stack.Navigator>
  );
};

export default IncentiveNavigation;
