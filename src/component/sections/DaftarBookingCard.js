import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DarkBlue, Grey} from '../../styles/Colour';

const DaftarBookingCard = ({
  kode,
  namaSales,
  cabang,
  tipe,
  nopol,
  namaCust,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.textKodeBooking}>{kode}</Text>
      <View style={styles.textRow}>
        <Text style={styles.text}>Nama Salesman</Text>
        <Text
          style={[
            styles.text,
            {
              fontWeight: 'bold',
              textAlign: 'right',
            },
          ]}>
          {namaSales}
        </Text>
      </View>
      <View style={styles.textRow}>
        <Text style={styles.text}>Cabang</Text>
        <Text
          style={[
            styles.text,
            {
              fontWeight: 'bold',
              textAlign: 'right',
            },
          ]}>
          {cabang}
        </Text>
      </View>
      <View style={styles.textRow}>
        <Text style={styles.text}>Tipe Mobil</Text>
        <Text
          style={[
            styles.text,
            {
              fontWeight: 'bold',
              textAlign: 'right',
            },
          ]}>
          {tipe}
        </Text>
      </View>
      <View style={styles.textRow}>
        <Text style={styles.text}>Nomor Polisi</Text>
        <Text
          style={[
            styles.text,
            {
              fontWeight: 'bold',
              textAlign: 'right',
            },
          ]}>
          {nopol}
        </Text>
      </View>
      <View style={styles.textRow}>
        <Text style={styles.text}>Nama Customer</Text>
        <Text
          style={[
            styles.text,
            {
              fontWeight: 'bold',
              textAlign: 'right',
            },
          ]}>
          {namaCust}
        </Text>
      </View>
    </View>
  );
};

export default DaftarBookingCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Grey,
    padding: 12,
    marginBottom: 12,
  },
  textKodeBooking: {
    color: Grey,
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
  },
  text: {
    color: DarkBlue,
    fontSize: 15,
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
});
