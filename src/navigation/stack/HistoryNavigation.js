import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RiwayatScreen from '../../screen/riwayat/RiwayatScreen';

const Stack = createNativeStackNavigator();

const HistoryNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="RiwayatScreen" component={RiwayatScreen} />
    </Stack.Navigator>
  );
};

export default HistoryNavigation;
