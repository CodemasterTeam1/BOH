import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import InsentifScreen from '../../screen/insentif/InsentifScreen';
import DetailInsentifScreen from '../../screen/insentif/DetailInsentifScreen';

const Stack = createNativeStackNavigator();

const IncentiveNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="InsentifScreen" component={InsentifScreen} />
      <Stack.Screen
        name="DetailInsentifScreen"
        component={DetailInsentifScreen}
      />
    </Stack.Navigator>
  );
};

export default IncentiveNavigation;
