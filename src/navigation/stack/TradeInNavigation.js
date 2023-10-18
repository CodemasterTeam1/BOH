import React from 'react';
import TradeInScreen from '../../screen/trade_in/TradeInScreen';
import SummartyTradeInScreen from '../../screen/trade_in/SummartyTradeInScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const TradeInNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TradeIn" component={TradeInScreen} />
      <Stack.Screen name="SummaryTradeIn" component={SummartyTradeInScreen} />
    </Stack.Navigator>
  );
};

export default TradeInNavigation;
