import {View, Text, FlatList, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {DarkBlue, Grey, LightGrey} from '../../styles/Colour';
import RiwayatCard from '../../component/sections/RiwayatCard';
import DaftarBookingCard from '../../component/sections/DaftarBookingCard';
import InsentifCard from '../../component/sections/InsentifCard';

const DetailInsentifScreen = () => {
  const riwayat = [
    {
      date: 'Rabu, 5 Des 2018 Pukul 17.00',
      paidStatus: 'PAID',
    },
    {
      date: 'Selasa, 4 Des 2018 Pukul 10:00',
      paidStatus: 'VALIDATED',
    },
    {
      date: 'Senin, 3 Des 2018 Pukul 09:30',
      paidStatus: 'CREATE',
    },
  ];

  const daftarBooking = [
    {
      kode: 'TR-092018-246',
      namaSales: 'Kukuh Hadi',
      cabang: 'Ciledug',
      tipe: 'Toyota Agya G A/T TRD 2015',
      nopol: 'B 1234 TES',
      namaCust: 'Aji Bayu Wirrotama',
    },
    {
      kode: 'TR-092018-246',
      namaSales: 'Kukuh Hadi',
      cabang: 'Ciledug',
      tipe: 'Toyota Agya G A/T TRD 2015',
      nopol: 'B 1234 TES',
      namaCust: 'Aji Bayu Wirrotama',
    },
  ];

  const insentif = {
    tanggal: 'Sen, 17 Sep 2018 - 10:30',
    insentif: 'Rp 1.000.000',
    booking: '2',
    type: 'create',
  };

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <InsentifCard
          tanggal={insentif.tanggal}
          insentif={insentif.insentif}
          booking={insentif.booking}
          type={insentif.type}
        />
        <View style={styles.headerRiwayat}>
          <Text style={styles.headerText}>Riwayat</Text>
        </View>
        <View style={styles.riwayatCardArea}>
          <FlatList
            data={riwayat}
            renderItem={({item}) => (
              <RiwayatCard date={item.date} status={item.paidStatus} />
            )}
          />
        </View>
        <Text style={[styles.headerText, {alignSelf: 'center'}]}>
          Daftar Booking
        </Text>
        <View style={styles.line}></View>
        <FlatList
          data={daftarBooking}
          renderItem={({item}) => (
            <DaftarBookingCard
              kode={item.kode}
              namaSales={item.namaSales}
              cabang={item.cabang}
              tipe={item.tipe}
              nopol={item.nopol}
              namaCust={item.namaCust}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: LightGrey,
    padding: 16,
  },
  headerRiwayat: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 3,
    borderColor: Grey,
    borderBottomWidth: 1,
  },
  headerText: {
    color: DarkBlue,
    fontWeight: 'bold',
    fontSize: 17,
  },
  riwayatCardArea: {
    backgroundColor: 'white',
    padding: 12,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
    marginBottom: 12,
  },
  line: {
    borderBottomColor: Grey,
    borderBottomWidth: 1,
    marginTop: 16,
    marginBottom: 12,
  },
});

export default DetailInsentifScreen;
