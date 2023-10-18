import {View, Text} from 'react-native';
import React from 'react';
import HomeCard from '../../component/sections/HomeCard';

const HomeScreen = () => {
  return (
    <View>
      <HomeCard
        kode="12321312"
        tanggal="Sen, 17 Sep 2018 - 10:30"
        mobil="Avanza"
        nama="Handoko"
        role="salesman"
        type="subsidi"
      />
    </View>
  );
};

export default HomeScreen;
