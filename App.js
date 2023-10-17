import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import Routing from './src/navigation/Routing';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <Routing />
    </SafeAreaView>
  );
};

export default App;
