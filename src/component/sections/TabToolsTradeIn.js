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

export default Tab = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'deal', title: 'Deal '},
    {key: 'request', title: 'Request'},
  ]);

  const renderScene = SceneMap({
    deal: () => (
      <View>
        <ScrollView style={styles.scrollContainer}>
          <Text style={styles.dealText}>DEAL</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Sen, 17 Sep 2018 - 10:30</Text>
            <View style={styles.infoSeparator} />
            <Text style={styles.infoText}>Helmi Candra</Text>
            <View style={styles.infoSeparator} />
            <Text style={styles.infoText}>Rp 99.000.000</Text>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => {
            // Handle the action when "TERUSKAN KE ODOO" is pressed in "Deal" tab
          }}>
          <Text style={styles.continueButtonText}>TERUSKAN KE ODOO</Text>
        </TouchableOpacity>
      </View>
    ),
    request: () => (
      <ScrollView>
        <View style={styles.scrollContainer}>
          <Text style={styles.title}>Request Diskon BOD</Text>
          <Text style={styles.dealText}>DEAL</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Sen, 17 Sep 2018 - 10:30</Text>
            <View style={styles.infoSeparator} />
            <Text style={styles.infoText}>Helmi Candra</Text>
            <View style={styles.infoSeparator} />
            <Text style={styles.infoText}>Rp 99.000.000</Text>
          </View>
          <Text style={styles.title}>Request MRP</Text>
          <Text style={styles.rejectedText}>REJECTED</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Sen, 17 Sep 2018 - 10:30</Text>
            <View style={styles.infoSeparator} />
            <Text style={styles.infoText}>Helmi Candra</Text>
            <View style={styles.infoSeparator} />
            <Text style={styles.infoText}>Rp 99.000.000</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => {
            // Handle the action when "TERUSKAN KE ODOO" is pressed in "Request" tab
          }}>
          <Text style={styles.continueButtonText}>TERUSKAN KE ODOO</Text>
        </TouchableOpacity>
      </ScrollView>
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
      <ScrollView style={{flex: 1}}>
        <TabView
          navigationState={{index, routes}}
          style={styles.container}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={{width: Dimensions.get('window').width, height: 10}}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 350,
  },
  tabBar: {
    backgroundColor: White,
    elevation: 0,
    marginTop: 12,
    borderRadius: 8,
  },
  label: {
    fontWeight: 'normal',
  },
  focusedLabel: {
    color: Primary,
    fontWeight: 'bold',
  },
  scrollContainer: {
    marginTop: 12,
    backgroundColor: White,
    paddingHorizontal: 12,
    paddingTop: 12,
    borderRadius: 4,
  },
  title: {
    color: DarkBlue,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  dealText: {
    color: LightGreen,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  rejectedText: {
    color: Red,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  infoContainer: {
    flexDirection: 'row',
    paddingBottom: 12,
  },
  infoText: {
    color: DarkBlue,
  },
  infoSeparator: {
    borderRightWidth: 1,
    marginHorizontal: 12,
    borderColor: Grey,
  },
  continueButton: {
    backgroundColor: Primary,
    height: 36,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  continueButtonText: {
    color: White,
  },
});
