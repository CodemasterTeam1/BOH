import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  LightGrey,
  DarkBlue,
  Grey,
  Primary,
  Putih,
  BlueGrey,
} from '../../styles/Colour';
import Icon from 'react-native-vector-icons/Ionicons';
import TitleHeader from '../../component/global/TitleHeader';
import handleShare from '../../utils/HandleShare';
import RequestDiscountModal from '../../component/modal/RequestDiscountModal';

const BeliMobilScreen = () => {
  const [requestDiscountModal, setRequestDiscountModal] = useState(false);

  return (
    <View style={styles.screen}>
      <TitleHeader
        title="Beli Mobil"
        onBack={() => navigation.goBack()}
        share={handleShare}
        isSearchBar={false}
      />
      <View style={styles.container}>
        <View style={{paddingHorizontal: 16}}>
          <View style={styles.containerText1}>
            <View>
              <Text style={styles.text1}>TR-092018-246</Text>
            </View>
            <View style={styles.containerText2}>
              <Text style={[styles.text2]}>Sen, 17 Sep 2018</Text>
              <Text style={[styles.text2]}> - 10:30</Text>
            </View>
          </View>
        </View>

        <View style={styles.line}></View>
        <View style={styles.containerIsi}>
          <View style={styles.containerText3}>
            <Text style={styles.text2}>Nama Customer</Text>
            <Text style={styles.text3}>NANDO DWIKI SATRIA</Text>
          </View>
          <View style={styles.pembatas}></View>
          <View style={styles.containerText3}>
            <Text style={styles.text2}>No. Hp</Text>
            <Text style={styles.text2}>082245884655</Text>
          </View>
        </View>
      </View>

      <View style={styles.container2}>
        <View style={{paddingHorizontal: 16}}>
          <View style={styles.containerText1}>
            <Text style={styles.text3}>Detail Mobil</Text>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.containerIsi}>
          <Text style={styles.text4}>New Car</Text>
          <View style={styles.containerText3}>
            <Text style={styles.text3}>Rush S AT TRD</Text>
            <Text style={styles.text3}>Rp. 276.600.000</Text>
          </View>
        </View>
      </View>

      <View style={styles.container2}>
        <View style={{paddingHorizontal: 16}}>
          <View style={styles.containerText1}>
            <Text style={styles.text3}>Diskon</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setRequestDiscountModal(true)}>
              <View style={[styles.containerText3, {marginHorizontal: 16}]}>
                <Text style={styles.textButton}>REQUEST DISCOUNT</Text>
                <Icon name="arrow-forward" size={20} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer1}>
        <View style={styles.containerText3}>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.textButton}>SIMPAN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.textButton1}>NO DEAL</Text>
          </TouchableOpacity>
        </View>
      </View>

      <RequestDiscountModal
        show={requestDiscountModal}
        onClose={() => setRequestDiscountModal(false)}></RequestDiscountModal>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: LightGrey,
    flex: 1,
  },
  container: {
    backgroundColor: Putih,
    marginTop: 5,
    marginBottom: 8,
  },
  containerText1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  containerText2: {
    flexDirection: 'row',
  },
  containerText3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerIsi: {
    paddingHorizontal: 16,
    marginVertical: 20,
  },
  text1: {
    color: 'rgba(0, 37, 88, 0.4)',
    fontSize: 14,
  },
  text2: {
    color: DarkBlue,
    fontSize: 14,
  },
  text3: {
    color: DarkBlue,
    fontSize: 14,
    fontWeight: 'bold',
  },
  text4: {
    color: 'rgba(0, 37, 88, 0.6)',
    fontSize: 12,
    marginBottom: 4,
  },
  pembatas: {
    marginTop: 24,
  },
  line: {
    borderColor: Grey,
    borderBottomWidth: 1,
    width: '100%',
  },
  container2: {
    backgroundColor: Putih,
    marginBottom: 8,
  },
  button: {
    width: '100%',
    backgroundColor: Primary,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 20,
  },
  textButton: {
    color: Putih,
    fontWeight: '500',
    fontSize: 16,
  },
  buttonContainer1: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: Putih,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  button1: {
    width: '48%',
    backgroundColor: Primary,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  button2: {
    width: '48%',
    backgroundColor: BlueGrey,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  textButton1: {
    color: DarkBlue,
    fontWeight: '500',
    fontSize: 16,
  },
});

export default BeliMobilScreen;
