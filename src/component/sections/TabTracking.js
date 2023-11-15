import React, {useState, useEffect} from 'react';
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
import {useSelector} from 'react-redux';
import TrackingApi from '../../data/remote/apiservice/TrackingApi';
import {useIsFocused} from '@react-navigation/native';

export default TabTracking = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'tradeIn', title: 'Trade In '},
    {key: 'newCar', title: 'New Car'},
  ]);

  const {user} = useSelector(state => state.user);
  const [tradeIn, setTradeIn] = useState([]);
  const [newCar, setNewCar] = useState([]);
  const isFocused = useIsFocused();

  const GetTracking = async () => {
    // console.log(user.token);
    const res = await TrackingApi.GetTradeIn(user.token);
    // console.log(res[0].ApprovalTradeIn.Appraisal);
    if (res) {
      setTradeIn(res);
    } else {
      console.log('Error fetching data');
    }
  };

  const GetTracking1 = async () => {
    const res1 = await TrackingApi.GetNewCar(user.token);
    // console.log(res1[0].ApprovalNewCar.SalesBranch.branch);
    if (res1) {
      setNewCar(res1);
    } else {
      console.log('Error fetching data');
    }
  };

  useEffect(() => {
    GetTracking();
  }, [isFocused]);

  useEffect(() => {
    GetTracking1();
  }, [isFocused]);

  const renderScene = SceneMap({
    tradeIn: () => (
      <View>
        <ScrollView style={styles.scrollContainer}>
          {tradeIn.map((data, index) => (
            <HomeCard
              key={index}
              kode={data.ApprovalTradeIn.Appraisal.Booking.noBooking}
              tanggal={data.ApprovalTradeIn.updatedAt}
              mobil={data.ApprovalTradeIn.Appraisal.carName}
              nama={data.ApprovalTradeIn.Appraisal.Booking.SalesProfile.name}
              role="Salesman"
              type={data.ApprovalTradeIn.approvalStatus}
            />
          ))}
        </ScrollView>
      </View>
    ),
    newCar: () => (
      <View>
        <ScrollView style={styles.scrollContainer}>
          {newCar.map((data1, x) => (
            <HomeCard
              key={x}
              kode={data1.ApprovalNewCar.noNewCar}
              tanggal={data1.updatedAt}
              mobil={data1.ApprovalNewCar.NewCar.carName}
              nama={data1.ApprovalNewCar.SalesBranch.BranchHead.name}
              role={data1.ApprovalNewCar.SalesBranch.branch}
              type={data1.ApprovalNewCar.approvalStatus}
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
