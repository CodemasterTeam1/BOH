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

const SummarryTradeInScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TitleHeader
        title="Summary Trade In"
        onBack={() => navigation.goBack()}
        share={HandleShare}
      />
      <View style={styles.container2}>
        <Text style={styles.text}>TR-092018-246</Text>
        <Text style={styles.text2}>Sen, 17 Sep 2018 - 10:30</Text>
      </View>
      <ScrollView>
        <View style={styles.container3}>
          <Text style={styles.title}>Used Car Information</Text>
          <View style={styles.line}></View>
          <View style={styles.contText}>
            <Text style={styles.isiText}>Mobil</Text>
            <Text style={styles.isiText2}>AVANZA G AT 2016</Text>
          </View>
          <View style={styles.contText}>
            <Text style={styles.isiText}>Plat Nomor</Text>
            <Text style={styles.isiText2}>B 1234 TES</Text>
          </View>

          <TouchableOpacity style={styles.container4}>
            <View style={styles.contText2}>
              <Text style={styles.text2}>Lihat Detil Approval</Text>
            </View>
            <View style={styles.contIcon}>
              <Icon name="arrow-right" size={12} color={White} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.container5}>
          <Text style={styles.title}>New Car Information</Text>
          <View style={styles.line}></View>
          <View style={styles.contText}>
            <Text style={styles.isiText}>Mobil</Text>
            <Text style={styles.isiText2}>Rush S AT TRD</Text>
          </View>
          <View style={styles.contText}>
            <Text style={styles.isiText}>OTR</Text>
            <Text style={styles.isiText2}>Rp 276.600.000</Text>
          </View>
        </View>

        <View style={styles.container6}>
          <View style={styles.contText3}>
            <Text style={styles.title2}>Ruang Nego Harga</Text>
            <Text style={styles.text3}>Terupdate*</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.contText}>
            <Text style={styles.isiText}>Harga Penawaran</Text>
            <Text style={styles.isiText2}>Rp 78.500.000</Text>
          </View>
          <View style={styles.contText}>
            <Text style={styles.isiText}>Ruang Nego</Text>
            <Text style={styles.isiText2}>Rp 3.000.000</Text>
          </View>
          <View style={styles.contText}>
            <Text style={styles.isiText}>MRP(Harga Max)</Text>
            <Text style={styles.isiText2}>Rp 81.500.000</Text>
          </View>
        </View>

        <View style={styles.container6}>
          <View style={styles.contText3}>
            <Text style={styles.title2}>Diskon</Text>
            <Text style={styles.text3}>Terupdate*</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.contText}>
            <Text style={styles.isiText}>Diskon Kacab</Text>
            <Text style={styles.isiText2}>Rp 2.000.000</Text>
          </View>
          <View style={styles.contText}>
            <Text style={styles.isiText}>Pengajuan Diskon BOD</Text>
            <Text style={styles.isiText2}>-</Text>
          </View>
          <View style={styles.contText}>
            <Text style={styles.isiText}>Proyeksi GP (After Disc)</Text>
            <Text style={styles.isiText2}>-</Text>
          </View>
        </View>

        <View style={styles.container7}>
          <Text style={styles.title}>Gross Profit AAT</Text>
          <View style={styles.line}></View>
          <View style={styles.contText}>
            <Text style={styles.isiText}>Proyeksi Harga Jual</Text>
            <Text style={styles.isiText2}>Rp 120.000.000</Text>
          </View>
          <View style={styles.contText}>
            <Text style={styles.isiText}>
              COGS (harga beli + {'\n'}biaya rekondisi) + OPEX
            </Text>
            <Text style={styles.isiText2}>Rp 109.550.000</Text>
          </View>
          <View style={styles.contText}>
            <Text style={styles.isiText}>Proyeksi NPBT AAT</Text>
            <Text style={styles.isiText2}>Rp 10.450.000</Text>
          </View>
        </View>

        <View style={styles.container8}>
          <Text style={styles.title3}>Harga Final</Text>
          <View style={styles.container9}>
            <Text style={styles.isiText3}>Rp 170.000.000</Text>
          </View>
          <Text style={styles.title3}>Total Benefit TI (Final)</Text>
          <View style={styles.container10}>
            <Text style={styles.isiText3}>Rp 2.000.000</Text>
          </View>
        </View>

        <Text style={styles.title4}>History Log</Text>
        <View style={styles.line2}></View>
        <View style={styles.container11}>
          <Text style={styles.isiText4}>Deal by OM</Text>
          <View style={styles.contText4}>
            <Text style={styles.isiText5}>Sen, 17 Sep 2018 - 10:30</Text>
            <View style={styles.line3}></View>
            <Text style={styles.isiText5}>Helmi Candra</Text>
            <View style={styles.line3}></View>
            <Text style={styles.isiText5}>Rp 99.000.000</Text>
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
    backgroundColor: White,
    width: '100%',
    height: 48,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  text: {
    color: Grey,
    fontSize: 12,
  },
  text2: {
    color: DarkBlue,
    fontSize: 14,
  },
  container3: {
    height: 173,
    backgroundColor: White,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 4,
  },
  line: {
    borderColor: LightGrey,
    borderBottomWidth: 1,
    marginTop: 10,
    width: '100%',
  },
  line2: {
    borderColor: Grey,
    borderBottomWidth: 1,
    marginTop: 10,
    //width: '100%',
    marginHorizontal: 12,
  },
  line3: {
    borderRightWidth: 1,
    marginLeft: 12,
    borderColor: Grey,
  },
  title: {
    color: DarkBlue,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 12,
    marginLeft: 12,
  },
  contText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginTop: 16,
  },
  isiText: {
    color: DarkBlue,
    fontSize: 14,
  },
  isiText2: {
    color: DarkBlue,
    fontSize: 14,
    fontWeight: 'bold',
  },
  container4: {
    backgroundColor: Primary,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 36,
    marginHorizontal: 10,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  contText2: {justifyContent: 'center'},
  text2: {
    color: White,
    fontSize: 14,
    fontWeight: '500',
  },
  contIcon: {justifyContent: 'center'},
  container5: {
    height: 125,
    backgroundColor: White,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 4,
  },
  container6: {
    height: 160,
    backgroundColor: White,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 4,
  },
  contText3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  text3: {
    color: DarkGrey,
    marginTop: 12,
  },
  title2: {
    color: DarkBlue,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 12,
  },
  container7: {
    height: 179,
    backgroundColor: White,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 4,
  },
  container8: {
    height: 144,
    backgroundColor: White,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 4,
    marginBottom: 10,
  },
  title3: {
    color: DarkBlue,
    fontSize: 12,
    marginTop: 12,
    marginLeft: 12,
  },
  container9: {
    backgroundColor: White,
    marginTop: 4,
    height: 32,
    marginHorizontal: 10,
    borderRadius: 4,
    paddingHorizontal: 12,
    justifyContent: 'center',
    borderColor: Grey,
    borderWidth: 1,
  },
  isiText3: {
    color: DarkBlue,
    fontSize: 14,
    fontWeight: '500',
  },
  container10: {
    backgroundColor: LightGrey,
    marginTop: 4,
    height: 32,
    marginHorizontal: 10,
    borderRadius: 4,
    paddingHorizontal: 12,
    justifyContent: 'center',
    borderColor: LightGrey,
    borderWidth: 1,
  },
  title4: {
    color: DarkBlue,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 16,
    justifyContent: 'center',
    textAlign: 'center',
  },
  container11: {
    height: 56,
    backgroundColor: White,
    marginTop: 16,
    marginHorizontal: 10,
    borderRadius: 4,
    marginBottom: 10,
  },
  isiText4: {
    color: LightGreen,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 12,
    marginLeft: 12,
  },
  contText4: {
    flexDirection: 'row',
  },
  isiText5: {
    color: DarkBlue,
    fontSize: 10,
    marginLeft: 12,
  },
  isiText6: {
    color: Orange,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 12,
    marginLeft: 12,
  },
});

export default SummarryTradeInScreen;
