import {View, Text, Modal} from 'react-native';
import React from 'react';

const LoadingModal = isloading => {
  return <Modal visible={isloading}></Modal>;
};

export default LoadingModal;
