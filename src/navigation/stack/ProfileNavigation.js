import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProfileScreen from '../../screen/profile/Profile';
import EditDataDiriScreen from '../../screen/profile/EditDataDiriScreen';
import EditDataRekeningScreen from '../../screen/profile/EditDataRekeningScreen';
import EditDokumenScreen from '../../screen/profile/EditDokumenScreen';

const Stack = createNativeStackNavigator();

const ProfileNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditDataDiriScreen" component={EditDataDiriScreen} />
      <Stack.Screen
        name="EditDataRekeningScreen"
        component={EditDataRekeningScreen}
      />
      <Stack.Screen name="EditDokumenScreen" component={EditDokumenScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
