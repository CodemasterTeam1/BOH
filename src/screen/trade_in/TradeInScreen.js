import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {
  DarkBlue,
  DarkGrey,
  Grey,
  LightGrey,
  Primary,
  White,
} from '../../styles/Colour';
import TitleHeader from '../../component/global/TitleHeader';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Tab from '../../component/sections/TabToolsTradeIn';

const TradeInScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TitleHeader title="Tools Trade In" onBack={() => navigation.goBack()} />
      <View style={styles.content}>
        <Text>TR-092018-246</Text>
        <Text style={styles.textDate}>Sen, 17 Sep 2018 - 10.30</Text>
      </View>
      <ScrollView
        style={styles.screenView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.titleCard}>Used Car Information</Text>
          <View style={styles.cardContent}>
            <Text style={styles.textNormal}>Mobil</Text>
            <Text style={styles.textBold}>AVANZA G AT 2016</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.textNormal}>Plat Nomor</Text>
            <Text style={styles.textBold}>B 1234 TES</Text>
          </View>
          <TouchableOpacity style={styles.buttonCard}>
            <Text style={styles.textButton}>Lihat Detail Appraisal</Text>
            <Icon name="arrow-right" size={20} color={White} />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Text style={styles.titleCard}>New Car Information</Text>
          <View style={styles.cardContent}>
            <Text style={styles.textNormal}>Mobil</Text>
            <Text style={styles.textBold}>Rush S AT TRD</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.textNormal}>OTR</Text>
            <Text style={styles.textBold}>Rp 276.600.000</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.titleCard}>Ruang Nego Harga</Text>
          <View style={styles.cardContent}>
            <Text style={styles.textNormal}>Harga Penawaran</Text>
            <Text style={styles.textBold}>Rp 78.500.000</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.textNormal}>Ruang Nego</Text>
            <Text style={styles.textBold}>Rp 3.000.000</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.textNormal}>MRP (Harga Max)</Text>
            <Text style={styles.textBold}>Rp 81.500.000</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.titleCard}>Diskon</Text>
          <View style={styles.cardContent}>
            <Text style={styles.textNormal}>Diskon Kacab</Text>
            <Text style={styles.textBold}>Rp 2.000.000</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.textNormal}>Pengajuan Diskon BOD</Text>
            <Text style={styles.textBold}>-</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.textNormal}>Proyeksi GP (After Disc)</Text>
            <Text style={styles.textBold}>-</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.titleCard}>Gross Profit Trust</Text>
          <View style={styles.cardContent}>
            <Text style={styles.textNormal}>Proyeksi Harga Jual</Text>
            <Text style={styles.textBold}>Rp 120.000.000</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.textNormal}>Pengurangan Over Kilometer</Text>
            <Text style={styles.textBold}>-Rp 550.000</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.textNormal}>
              COGS (harga beli + biaya rekondisi) + OPEX
            </Text>
            <Text style={styles.textBold}>Rp 109.550.000</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.textNormal}>Proyeksi NPBT Trust</Text>
            <Text style={styles.textBold}>Rp 10.450.000</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.lastCard}>
            <Text style={styles.textNormal}>Harga Final</Text>
            <Text style={[styles.textValue, styles.hargaFinalTextValue]}>
              Rp 170.000.000
            </Text>

            <Text style={styles.lastSection}>Sisa Ruang Nego</Text>
            <Text style={styles.textValue}>Rp 2.000.000</Text>
            <Text style={styles.lastSection}>
              Total Benefit Trade-in (Final)
            </Text>
            <Text style={styles.textValue}>Rp 2.000.000</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>History Log</Text>
        <Tab />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: LightGrey,
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 48,
    alignItems: 'center',
    backgroundColor: White,
    color: DarkGrey,
  },
  textDate: {
    color: DarkBlue,
    fontSize: 16,
  },
  screenView: {
    marginHorizontal: 16,
  },
  titleCard: {
    fontWeight: 'bold',
    color: DarkBlue,
    borderBottomColor: Grey,
    borderBottomWidth: 1,
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  card: {
    marginTop: 22,
    backgroundColor: White,
    borderRadius: 4,
    paddingVertical: 12,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingHorizontal: 12,
  },
  buttonCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 12,
    backgroundColor: Primary,
    paddingHorizontal: 16,
    height: 36,
    alignItems: 'center',
    borderRadius: 4,
  },
  textButton: {
    color: White,
  },
  textBold: {
    fontWeight: 'bold',
    color: DarkBlue,
  },
  textNormal: {
    color: DarkBlue,
  },
  lastCard: {
    paddingHorizontal: 12,
  },
  lastSection: {
    marginTop: 16,
    color: DarkBlue,
  },
  textValue: {
    borderRadius: 4,
    paddingHorizontal: 12,
    height: 32,
    textAlignVertical: 'center',
    marginTop: 4,
    backgroundColor: LightGrey,
    color: DarkBlue,
  },
  hargaFinalTextValue: {
    borderWidth: 1,
    backgroundColor: White,
    borderColor: Grey,
  },
  sectionTitle: {
    textAlign: 'center',
    color: DarkBlue,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: Grey,
    paddingVertical: 16,
  },
});

export default TradeInScreen;
