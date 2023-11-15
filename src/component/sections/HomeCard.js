import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  White,
  Primary,
  DarkBlue,
  DarkGrey,
  Grey,
  LightGrey,
  Orange,
  LightGreen,
  Yellow,
} from '../../styles/Colour';

const HomeCard = ({kode, tanggal, mobil, nama, role, type}) => {
  let statusStyles = {};

  if (type === 'Diskon Sudah Terupdate') {
    statusStyles = styles.diskon;
  } else if (type === 'Subsidi Sudah Terupdate') {
    statusStyles = styles.subsidi;
  } else if (type === 'MRP Sudah Terupdate') {
    statusStyles = styles.mrp;
  } else if (type === 'Dalam Proses') {
    statusStyles = styles.request;
  } else if (type == 'New Approval') {
    statusStyles = styles.newapproval;
  } else if (type == 'No Deal') {
    statusStyles = styles.nodeal;
  } else if (type == 'Deal') {
    statusStyles = styles.deal;
  }

  return (
    <View style={styles.card}>
      <View style={styles.row1}>
        <Text style={styles.kode}>{kode}</Text>
        <Text style={styles.tanggal}>{tanggal} </Text>
      </View>
      <Text style={styles.mobil}>{mobil}</Text>
      <View style={styles.line}></View>
      <View style={styles.row3}>
        <View>
          <Text style={styles.nama}>{nama}</Text>
          <Text style={styles.role}>{role}</Text>
        </View>
        <View style={statusStyles}>
          <Text style={styles.status}>{type}</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: White,
    paddingVertical: 8,
    marginTop: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Grey,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    paddingHorizontal: 12,
  },
  kode: {
    color: DarkGrey,
  },
  tanggal: {
    color: DarkBlue,
  },
  mobil: {
    color: DarkBlue,
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    marginTop: 8,
  },
  line: {
    borderColor: Grey,
    borderBottomWidth: 1,
    marginTop: 12,
    marginHorizontal: 12,
    borderStyle: 'dashed',
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  nama: {
    color: DarkBlue,
    fontWeight: '500',
  },
  role: {
    color: DarkGrey,
    fontSize: 12,
  },
  statuscon: {
    backgroundColor: Primary,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  status: {
    color: White,
    fontSize: 10,
  },
  diskon: {
    backgroundColor: Primary,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  subsidi: {
    backgroundColor: LightGreen,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  mrp: {
    backgroundColor: Yellow,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  request: {
    backgroundColor: DarkBlue,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  newapproval: {
    backgroundColor: Primary,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  nodeal: {
    backgroundColor: Orange,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  deal: {
    backgroundColor: LightGreen,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
});
