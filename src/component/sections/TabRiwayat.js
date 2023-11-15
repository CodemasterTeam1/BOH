import React, {useEffect, useState} from 'react';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {
  DarkBlue,
  Green,
  Grey,
  LightGreen,
  Primary,
  Red,
  White,
} from '../../styles/Colour';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import HomeCard from './HomeCard';
import HistoryApi from '../../data/remote/apiservice/HistoryApi';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

export default TabRiwayat = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'tradeIn', title: 'Trade In '},
    {key: 'newCar', title: 'New Car'},
  ]);

  useEffect(() => {
    GetNewCar();
    GetTradeIn();
  }, [isFocused]);

  const {user} = useSelector(state => state.user);
  const [tradeIn, setTradeIn] = useState([]);
  const [newCar, setNewCar] = useState([]);
  const isFocused = useIsFocused();

  const GetTradeIn = async () => {
    // console.log(user.token);
    const res = await HistoryApi.GetTradeIn(user.token);
    if (res) {
      setTradeIn(res);
    } else {
      console.log('Error fetching data');
    }
  };

  const GetNewCar = async () => {
    const res1 = await HistoryApi.GetNewCar(user.token);
    if (res1) {
      setNewCar(res1);
    } else {
      console.log('Error fetching data');
    }
  };

  const renderScene = SceneMap({
    tradeIn: () => (
      <View>
        <ScrollView style={styles.scrollContainer}>
          {tradeIn.map((item, index) => (
            <HomeCard
              key={index}
              kode={item.Appraisal.Booking.noBooking}
              tanggal={item.approvalFinishTime}
              mobil={item.Appraisal.carName}
              nama={item.Appraisal.Booking.SalesProfile.name}
              role="Salesman"
              type={item.approvalStatus}
            />
          ))}
        </ScrollView>
      </View>
    ),
    newCar: () => (
      <View>
        <ScrollView>
          {newCar.map((item, index) => (
            <HomeCard
              key={index}
              kode={item.noNewCar}
              tanggal={item.updatedAt}
              mobil={item.NewCar.carName}
              nama={item.SalesBranch.BranchHead.name}
              role={item.SalesBranch.branch}
              type="Deal"
            />
          ))}
        </ScrollView>
      </View>
    ),
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      style={styles.tabBar}
      labelStyle={styles.label}
      pressColor="transparent"
      renderLabel={({route, focused}) => (
        <Text style={focused ? styles.focusedLabel : styles.label}>
          {route.title}
        </Text>
      )}
      renderIndicator={() => null}
    />
  );
  return (
    <View style={{flex: 1}}>
      <TabView
        navigationState={{index, routes}}
        style={styles.container}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{width: Dimensions.get('window').width, height: 10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: 'rgba(255,255,255, 1)',
    elevation: 0,
    borderRadius: 8,
    marginHorizontal: 16,
  },
  label: {
    fontWeight: 'normal',
  },
  focusedLabel: {
    color: Primary,
    fontWeight: 'bold',
  },
});
