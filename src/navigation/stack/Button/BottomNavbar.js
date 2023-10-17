import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeNavigation from '../HomeNavigation';
import TrackingNavigation from '../TrackingNavigation';
import HistoryNavigation from '../HistoryNavigation';
import IncentiveNavigation from '../IncentiveNavigation';
import ProfileNavigation from '../ProfileNavigation';

import {White, DarkBlue, Grey} from '../../../styles/Colour';

function TabMenu({isFocused, label}) {
  const icon = iconType(label);
  return (
    <View style={styles.kotakNavbar}>
      <Image
        source={icon}
        style={[styles.icon, {tintColor: isFocused ? DarkBlue : Grey}]}
      />
      <Text style={[styles.text, {color: isFocused ? DarkBlue : Grey}]}>
        {label}
      </Text>
    </View>
  );
}

function iconType(label) {
  if (label === 'Home') {
    return require('../../../assets/icons/home_ic.png');
  } else if (label === 'Tracking') {
    return require('../../../assets/icons/tracking_ic.png');
  } else if (label === 'Riwayat') {
    return require('../../../assets/icons/riwayat_ic.png');
  } else if (label === 'Insentif') {
    return require('../../../assets/icons/insentif_ic.png');
  } else {
    return require('../../../assets/icons/profil_ic.png');
  }
}

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const key = `tab-${index}`;

        return (
          <TouchableOpacity
            key={key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <TabMenu isFocused={isFocused} label={label} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function BottomNavbar() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeNavigation} />
      <Tab.Screen name="Tracking" component={TrackingNavigation} />
      <Tab.Screen name="Riwayat" component={HistoryNavigation} />
      <Tab.Screen name="Insentif" component={IncentiveNavigation} />
      <Tab.Screen name="Profile" component={ProfileNavigation} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  kotakNavbar: {
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 15,
    backgroundColor: White,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  text: {
    marginTop: 7,
    textAlign: 'center',
  },
});
