import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TradeInScreen from '../../screen/trade_in/TradeInScreen';
import SummarryTradeInScreen from '../../screen/trade_in/SummarryTradeInScreen';
import SummarryDealNoDealScreen from '../../screen/trade_in/SummarryDealNoDealScreen';

const Stack = createNativeStackNavigator();

const TradeInNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TradeInScreen" component={TradeInScreen} />
      <Stack.Screen
        name="SummarryTradeInScreen"
        component={SummarryTradeInScreen}
      />
      <Stack.Screen
        name="SummarryDealNoDealScreen"
        component={SummarryDealNoDealScreen}
      />
    </Stack.Navigator>
  );
};

export default TradeInNavigation;
