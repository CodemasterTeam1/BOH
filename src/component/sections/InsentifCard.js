import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DarkBlue,
  Grey,
  LightGreen,
  Orange,
  Primary,
  White,
} from '../../styles/Colour';

const InsentifCard = ({tanggal, insentif, booking, type}) => {
  let statusText = '';
  let statusStyles = {};

  if (type === 'create') {
    statusText = 'CREATE';
    statusStyles = styles.create;
  } else if (type === 'validate') {
    statusText = 'VALIDATE';
    statusStyles = styles.validate;
  } else if (type === 'paid') {
    statusText = 'PAID';
    statusStyles = styles.paid;
  }

  return (
    <View style={styles.card}>
      <View style={styles.row1}>
        <Text style={styles.tanggal}>{tanggal}</Text>
        <View style={statusStyles}>
          <Text style={styles.status}>{statusText}</Text>
        </View>
      </View>
      <View style={styles.row2}>
        <Text style={styles.textsmall}>Nilai Insentif</Text>
        <Text style={styles.textbig}>{insentif}</Text>
      </View>
      <View style={styles.row2}>
        <Text style={styles.textsmall}>Jumlah Booking</Text>
        <Text style={styles.textbig}>{booking}</Text>
      </View>
    </View>
  );
};

export default InsentifCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: White,
    paddingVertical: 14,
    marginTop: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Grey,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingBottom: 10,
  },
  tanggal: {
    color: DarkBlue,
    fontWeight: 'bold',
  },
  statuscon: {
    backgroundColor: Orange,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  status: {
    color: White,
    fontSize: 12,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 5,
  },
  textsmall: {
    color: DarkBlue,
  },
  textbig: {
    color: DarkBlue,
    fontSize: 16,
    fontWeight: 'bold',
  },
  create: {
    backgroundColor: Orange,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  validate: {
    backgroundColor: Primary,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  paid: {
    backgroundColor: LightGreen,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
});
