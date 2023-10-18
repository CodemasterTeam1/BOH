import {View, Text} from 'react-native';
import React from 'react';
import InsentifCard from '../../component/sections/InsentifCard';

const InsentifScreen = () => {
  return (
    <InsentifCard
      tanggal="Sen, 17 Sep 2018 - 10:30"
      insentif="Rp 1.000.000"
      booking="2"
      type="validate"
    />
  );
};

export default InsentifScreen;
