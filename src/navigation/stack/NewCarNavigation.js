import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BeliMobilScreen from '../../screen/new_car/BeliMobilScreen';
import SummaryNewCarScreen from '../../screen/new_car/SummaryNewCarScreen';

const Stack = createNativeStackNavigator();

const NewCarNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BeliMobil" component={BeliMobilScreen} />
      <Stack.Screen name="SummaryNewCar" component={SummaryNewCarScreen} />
    </Stack.Navigator>
  );
};

export default NewCarNavigation;
