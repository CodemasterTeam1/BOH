import React from 'react';
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
import {useIsFocused} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import HomeApi from '../../data/remote/apiservice/HomeApi';

export default TabTracking = () => {
  const isFocused = useIsFocused();
  const {user} = useSelector(state => state.user);
  const [tradeIn, setTradeIn] = useState([]);
  const [newCar, setNewCar] = useState([]);
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {key: 'tradeIn', title: 'Trade In '},
    {key: 'newCar', title: 'New Car'},
  ]);

  useEffect(() => {
    GetTradeIn();
  }, [isFocused]);

  const GetTradeIn = async () => {
    const res = await HomeApi.GetTradeIn(user.token);
    console.log(res);
    setTradeIn(res);
  };

  useEffect(() => {
    GetNewCar();
  }, [isFocused]);

  const GetNewCar = async () => {
    const res = await HomeApi.GetNewCar(user.token);
    console.log(res);
    setNewCar(res);
  };

  const renderScene = SceneMap({
    tradeIn: () => (
      <View>
        <ScrollView style={styles.scrollContainer}>
          {tradeIn.map((data, index) => (
            <HomeCard
              key={index}
              kode={data.noNewCar}
              tanggal={data.createdAt}
              mobil={data.NewCar.carName}
              nama={data.SalesBranch.BranchHead.name}
              role={data.SalesBranch.branch}
              type={data.approvalStatus}
            />
          ))}
        </ScrollView>
      </View>
    ),
    newCar: () => (
      <View>
        <ScrollView>
          {newCar.map((data, index) => (
            <HomeCard
              key={index}
              kode={data.noNewCar}
              tanggal={data.createdAt}
              mobil={data.NewCar.carName}
              nama={data.SalesBranch.BranchHead.name}
              role={data.SalesBranch.branch}
              type={data.approvalStatus}
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
