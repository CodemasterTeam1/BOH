import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import TitleHeader from '../../component/global/TitleHeader';
import HandleShare from '../../utils/HandleShare';
const SummaryNewCarScreen = () => {
  return (
    <View style={Style.Container}>
      <TitleHeader
        title="Summary New Car"
        onBack={() => navigation.goBack()}
        share={HandleShare}
      />
      <ScrollView>
        <View style={Style.bar5}>
          <Text style={Style.text}>Deal</Text>
          <Text style={Style.text2}>19 Agutus 2020 - 15.43</Text>
        </View>
        <View style={Style.main1}>
          <View style={Style.bar1}>
            <Text style={Style.bart1}>TR-092018-246</Text>
            <Text style={Style.bart2}>Kepala Cabang Bintaro</Text>
          </View>
          <View style={Style.bar4}>
            <Text style={Style.bart3}>Nama Costumer</Text>
            <Text style={Style.bart4}>NANDO DWIKI SATRIA</Text>
          </View>
          <View style={Style.bar4}>
            <Text style={Style.bart3}>No HP</Text>
            <Text style={Style.bart4}>082245884655</Text>
          </View>
        </View>
        <View style={Style.main2}>
          <View style={Style.bar3}>
            <Text style={Style.bart4}>Detail Mobil</Text>
          </View>
          <View style={{backgroundColor: '#FFFF', paddingLeft: 16}}>
            <Text style={Style.bart5}>New car</Text>
          </View>
          <View style={Style.bar2}>
            <Text style={Style.bart6}>Rush S AT TRD</Text>
            <Text style={Style.bart4}>Rp 276.600.000</Text>
          </View>
        </View>

        <View style={Style.main3}>
          <View style={Style.bar3}>
            <Text style={Style.bart4}>Request Diskon</Text>
          </View>
          <View style={Style.bar4}>
            <Text style={Style.bart3}>Diskon</Text>
            <Text style={Style.bart4}>Rp 15.000.000</Text>
          </View>
          <View style={Style.bar4}>
            <Text style={Style.bart3}>Harga Mobil</Text>
            <Text style={Style.bart3}>Rp 235.000.000</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SummaryNewCarScreen;

const Style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  main1: {
    width: 360,
    height: 130,
    backgroundColor: '#FFFF',
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 10,
  },
  bar1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 360,
    height: 43,
    borderColor: 'grey',
    borderBottomWidth: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
  },
  bar2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: 360,
    height: 64,
    backgroundColor: '#FFF',
    borderColor: '#F7F7F7',
    paddingHorizontal: 16,
  },
  bar3: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 360,
    height: 43,
    borderBottomWidth: 1,
    borderColor: '#F7F7F7',
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
  },
  bar4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: 360,
    height: 43,
    borderColor: '#F7F7F7',
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
  },
  bar5: {
    backgroundColor: '#A4D166',
    width: '100%',
    height: 36,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  main2: {
    width: 360,
    height: 107,
    backgroundColor: 'White',
    borderWidth: 1,
    borderColor: '#fff',
    marginVertical: 25,
  },

  main3: {
    width: 360,
    height: 130,
    backgroundColor: 'White',
    bordeWidth: 1,
    borderColor: '#fff',
  },
  bart1: {
    color: 'grey',
    fontSize: 15,
    opacity: 30,
    marginRight: 60,
  },
  bart2: {
    color: '#002558',
    fontSize: 15,
  },
  bart3: {
    color: '#002558',
    fontSize: 15,
    opacity: 30,
    alignSelf: 'flex-start',
  },
  bart4: {
    color: '#002558',
    fontSize: 15,
    fontWeight: 'bold',
  },
  bart5: {
    color: 'grey',
    fontSize: 10,
    opacity: 30,
    alignSelf: 'flex-start',
  },
  bart6: {
    color: '#002558',
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 70,
  },
});
