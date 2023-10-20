import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import TitleHeader from '../../component/global/TitleHeader';
import HandleShare from '../../utils/HandleShare';
import {
  White,
  Primary,
  DarkBlue,
  DarkGrey,
  Grey,
  Green,
  LightGreen,
  Orange,
  Red,
  LightGrey,
} from '../../styles/Colour';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SummarryDealNoDealScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TitleHeader
        title="Summary Trade In"
        onBack={() => navigation.goBack()}
        share={HandleShare}
      />
      <ScrollView>
        <View style={styles.container2}>
          <Text style={styles.text}>Deal</Text>
          <Text style={styles.text2}>19 Agutus 2020 - 15.43</Text>
        </View>

        {/* <View style={styles.container7}>
          <Text style={styles.text}>No Deal</Text>
          <Text style={styles.text2}>19 Agutus 2020 - 15.43</Text>
        </View>

        <View style={styles.container6}>
          <Text style={styles.text4}>Alasan Penolakan</Text>
          <Text style={styles.isiText}>
            Customer Baru dan belum beranti untuk memberikan Diskon yang Besar
          </Text>
        </View> */}

        <View style={styles.container3}>
          <View style={styles.contTitle}>
            <Text style={styles.title}>TR-092018-246</Text>
            <Text style={styles.title2}>Kepala Cabang Bintaro</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.contText}>
            <Text style={styles.isiText}>Nama Customer</Text>
            <Text style={styles.isiText2}>NANDO DWIKI SATRIA</Text>
          </View>
          <View style={styles.contText}>
            <Text style={styles.isiText}>No. Hp</Text>
            <Text style={styles.isiText}>082245884655</Text>
          </View>
        </View>

        <View style={styles.container4}>
          <Text style={styles.title3}>Detail Mobil</Text>
          <View style={styles.line}></View>
          <Text style={styles.text3}>Used Car</Text>
          <View style={styles.contText3}>
            <Text style={styles.isiText2}>AVANZA G AT 2016</Text>
            <Text style={styles.isiText2}>Rp 81.500.000</Text>
          </View>
          <Text style={styles.text3}>New Car</Text>
          <View style={styles.contText3}>
            <Text style={styles.isiText2}>Rush S AT TRD</Text>
            <Text style={styles.isiText2}>Rp 276.600.000</Text>
          </View>
        </View>

        <View style={styles.container5}>
          <Text style={styles.title3}>Request Diskon</Text>
          <View style={styles.line}></View>
          <View style={styles.contText}>
            <Text style={styles.isiText}>Diskon</Text>
            <Text style={styles.isiText2}>Rp 9.000.000</Text>
          </View>
          <View style={styles.contText}>
            <Text style={styles.isiText}>Proyeksi GP (After Disc)</Text>
            <Text style={styles.isiText2}>Rp 3.000.000</Text>
          </View>
        </View>

        <View style={styles.container5}>
          <Text style={styles.title3}>Request Subsidi</Text>
          <View style={styles.line}></View>
          <View style={styles.contText}>
            <Text style={styles.isiText}>Nominal Request</Text>
            <Text style={styles.isiText2}>Rp 3.000.000</Text>
          </View>
          <View style={styles.contText}>
            <Text style={styles.isiText}>Proyeksi GP Trade In</Text>
            <Text style={styles.isiText2}>Rp 7.000.000</Text>
          </View>
        </View>

        <View style={styles.container5}>
          <Text style={styles.title3}>Request MRP</Text>
          <View style={styles.line}></View>
          <View style={styles.contText}>
            <Text style={styles.isiText}>Nominal Request</Text>
            <Text style={styles.isiText2}>Rp 156.187.500</Text>
          </View>
          <View style={styles.contText}>
            <Text style={styles.isiText}>Ruang Nego</Text>
            <Text style={styles.isiText3}>+ Rp 4.685.625</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LightGrey,
  },
  container2: {
    backgroundColor: LightGreen,
    width: '100%',
    height: 36,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  container3: {
    height: 129,
    backgroundColor: White,
  },
  container4: {
    height: 171,
    backgroundColor: White,
    marginTop: 8,
  },
  container5: {
    height: 129,
    backgroundColor: White,
    marginTop: 8,
  },
  container6: {
    height: 80,
    backgroundColor: White,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  container7: {
    backgroundColor: Orange,
    width: '100%',
    height: 36,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  contTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  contText2: {justifyContent: 'center'},
  isiText: {
    color: DarkBlue,
    fontSize: 14,
  },
  contText3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 4,
  },
  title: {
    color: Grey,
    fontSize: 14,
    marginTop: 12,
    marginLeft: 16,
  },
  title2: {
    fontSize: 14,
    color: DarkBlue,
    marginTop: 12,
    marginRight: 16,
  },
  title3: {
    color: DarkBlue,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 12,
    marginLeft: 16,
  },
  text: {
    color: White,
    fontSize: 14,
    fontWeight: 'bold',
  },
  text2: {
    color: White,
    fontSize: 12,
  },
  text3: {
    color: DarkGrey,
    marginTop: 12,
    marginLeft: 16,
    fontSize: 12,
  },
  text4: {
    color: DarkGrey,
    marginTop: 12,
    fontSize: 12,
    marginBottom: 6,
  },
  line: {
    borderColor: LightGrey,
    borderBottomWidth: 1,
    marginTop: 10,
    width: '100%',
  },
  isiText2: {
    color: DarkBlue,
    fontSize: 14,
    fontWeight: 'bold',
  },
  isiText3: {
    color: LightGreen,
    fontWeight: 'bold',
  },
});

export default SummarryDealNoDealScreen;
