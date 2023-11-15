import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  DarkBlue,
  Green,
  Grey,
  LightGrey,
  Orange,
  Primary,
  Putih,
  White,
  Yellow,
} from '../../styles/Colour';
import TabHome from '../../component/sections/TabHome';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import HomeApi from '../../data/remote/apiservice/HomeApi';

const HomeScreen = () => {
  const isFocused = useIsFocused();
  const {user} = useSelector(state => state.user);
  const [totalData, setTotalData] = useState({});
  useEffect(() => {
    GetTotal();
  }, [isFocused]);

  const GetTotal = async () => {
    const res = await HomeApi.GetTotal(user.token);
    console.log(res);
    setTotalData(res);
  };

  const [searchText, setSearchText] = useState('');
  return (
    <View style={styles.root}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assets/images/background-home_ic.png')}>
        <Text style={{fontSize: 12, color: Putih}}>BOH</Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 16,
            color: Putih,
          }}>
          Home
        </Text>
        <View style={styles.tabInfo}>
          <Text style={{color: DarkBlue}}>{totalData.mountToDate}</Text>
          <View style={styles.line}></View>
          <View style={styles.tabInfoRow}>
            <View style={styles.tabInfoGrid}>
              <View style={styles.tabInfoTitle}>
                <View
                  style={[
                    styles.verticalLine,
                    {backgroundColor: Primary},
                  ]}></View>
                <Text style={styles.titleText}>Cek harga</Text>
              </View>
              <Text style={styles.numberText}>{totalData.dealTotal}</Text>
            </View>
            <View style={styles.tabInfoGrid}>
              <View style={styles.tabInfoTitle}>
                <View
                  style={[
                    styles.verticalLine,
                    {backgroundColor: Green},
                  ]}></View>
                <Text style={styles.titleText}>Total Apprasial</Text>
              </View>
              <Text style={styles.numberText}>{totalData.appraisalTotal}</Text>
            </View>
          </View>
          <View style={styles.tabInfoRow}>
            <View style={styles.tabInfoGrid}>
              <View style={styles.tabInfoTitle}>
                <View
                  style={[
                    styles.verticalLine,
                    {backgroundColor: Yellow},
                  ]}></View>
                <Text style={styles.titleText}>PO</Text>
              </View>
              <Text style={styles.numberText}>{totalData.noDealTotal}</Text>
            </View>
            <View style={styles.tabInfoGrid}>
              <View style={styles.tabInfoTitle}>
                <View
                  style={[
                    styles.verticalLine,
                    {backgroundColor: Orange},
                  ]}></View>
                <Text style={styles.titleText}>PO Valid</Text>
              </View>
              <Text style={styles.numberText}>{totalData.inProcessTotal}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
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
      <TabHome />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: LightGrey,
    flex: 1,
  },
  backgroundImage: {
    height: 310,
    marginBottom: -40,
    padding: 16,
  },
  tabInfo: {
    backgroundColor: Putih,
    borderRadius: 8,
    padding: 12,
  },
  line: {
    borderColor: LightGrey,
    borderBottomWidth: 1,
    paddingTop: 12,
  },
  tabInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabInfoGrid: {
    backgroundColor: LightGrey,
    borderRadius: 4,
    paddingVertical: 8,
    width: 146,
    marginTop: 12,
  },
  tabInfoTitle: {
    flexDirection: 'row',
  },
  verticalLine: {
    height: '100%',
    width: 2,
    marginRight: 8,
  },
  titleText: {
    fontSize: 12,
    color: Grey,
  },
  numberText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: DarkBlue,
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 20,
    marginHorizontal: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    backgroundColor: Putih,
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
    backgroundColor: Putih,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
