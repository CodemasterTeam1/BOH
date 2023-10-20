import React, {useState} from 'react';
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

export default TabTracking = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'tradeIn', title: 'Trade In '},
    {key: 'newCar', title: 'New Car'},
  ]);

  const renderScene = SceneMap({
    tradeIn: () => (
      <View>
        <ScrollView style={styles.scrollContainer}>
          <HomeCard
            kode="TR-092018-246"
            tanggal="Sen, 17 Sep 2018 - 10:30"
            mobil="Avanza G 2.0"
            nama="Handoko"
            role="Salesman"
            type="diskon"
          />
          <HomeCard
            kode="TR-092018-246"
            tanggal="Sen, 17 Sep 2018 - 10:30"
            mobil="Avanza G 2.0"
            nama="Handoko"
            role="Salesman"
            type="subsidi"
          />
          <HomeCard
            kode="TR-092018-246"
            tanggal="Sen, 17 Sep 2018 - 10:30"
            mobil="Avanza G 2.0"
            nama="Handoko"
            role="Salesman"
            type="mrp"
          />
          <HomeCard
            kode="TR-092018-246"
            tanggal="Sen, 17 Sep 2018 - 10:30"
            mobil="Avanza G 2.0"
            nama="Handoko"
            role="Salesman"
            type="request"
          />
        </ScrollView>
      </View>
    ),
    newCar: () => (
      <View>
        <HomeCard
          kode="TR-092018-246"
          tanggal="Sen, 17 Sep 2018 - 10:30"
          mobil="Avanza G 2.0"
          nama="Handoko"
          role="Salesman"
          type="diskon"
        />
        <HomeCard
          kode="TR-092018-246"
          tanggal="Sen, 17 Sep 2018 - 10:30"
          mobil="Avanza G 2.0"
          nama="Handoko"
          role="Salesman"
          type="request"
        />
        <HomeCard
          kode="TR-092018-246"
          tanggal="Sen, 17 Sep 2018 - 10:30"
          mobil="Avanza G 2.0"
          nama="Handoko"
          role="Salesman"
          type="diskon"
        />
        <HomeCard
          kode="TR-092018-246"
          tanggal="Sen, 17 Sep 2018 - 10:30"
          mobil="Avanza G 2.0"
          nama="Handoko"
          role="Salesman"
          type="diskon"
        />
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
