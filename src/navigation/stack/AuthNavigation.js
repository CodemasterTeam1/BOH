import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const AuthNavigation = () => {
  const stack = createStackNavigator();
  return (
    <View>
      <Text>AuthNavigation</Text>
    </View>
  );
};

export default AuthNavigation;
