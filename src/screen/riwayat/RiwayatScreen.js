import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {DarkBlue, LightGrey, Primary, White} from '../../styles/Colour';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeCard from '../../component/sections/HomeCard';
import TabTracking from '../../component/sections/TabTracking';
import TabRiwayat from '../../component/sections/TabRiwayat';

const RiwayatScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={{backgroundColor: LightGrey, flex: 1}}>
      <View style={{padding: 16, backgroundColor: Primary, marginBottom: -26}}>
        <Text style={{color: White, fontSize: 20, fontWeight: 'bold'}}>
          Tracking
        </Text>
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Telusuri..."
              value={searchText}
              onChangeText={text => setSearchText(text)}
            />
            <Icon
              style={styles.searchIcon}
              name="search"
              size={20}
              color={DarkBlue}
              onPress={() => onSearch(searchText)}
            />
          </View>
          <TouchableOpacity style={styles.filter}>
            <Icon name="sliders" size={20} color={Primary} />
          </TouchableOpacity>
        </View>
      </View>
      <TabRiwayat />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    backgroundColor: White,
    borderRadius: 8,
    paddingLeft: 10,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 48,
    paddingHorizontal: 10,
    color: DarkBlue,
    fontSize: 16,
  },
  searchIcon: {
    marginRight: 10,
  },
  filter: {
    height: 48,
    width: 48,
    borderRadius: 8,
    backgroundColor: White,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RiwayatScreen;
