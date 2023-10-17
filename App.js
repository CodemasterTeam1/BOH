import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import Routing from './src/navigation/Routing';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/data/local/Store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar barStyle={'dark-content'} />
          <Routing />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
