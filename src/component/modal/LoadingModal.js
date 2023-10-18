import {View, Text, Modal, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import {Primary} from '../../styles/Colour';

const LoadingModal = ({isloading}) => {
  return (
    <Modal visible={isloading}>
      <View style={styles.screen}>
        <View style={styles.body}>
          <ActivityIndicator size="large" color={Primary} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
});

export default LoadingModal;
