import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import TitleHeader from '../global/TitleHeader';

const CalendarModal = show => {
  return (
    <Modal visible={show.show}>
      <TitleHeader
        title="Pilih bulan"
        onBack={() => navigation.goBack()}
        share={null}
        isSearchBar={true}
      />
      <ScrollView>
        <TouchableOpacity>
          <View style={Styles.bar1}>
            <Text style={Styles.bart1}> September 2021 </Text>
            <Text style={Styles.bart2}> Rp 3.000.000 </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={Styles.bar1}>
            <Text style={Styles.bart1}> Agustus 2021 </Text>
            <Text style={Styles.bart2}> Rp 3.000.000 </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={Styles.bar1}>
            <Text style={Styles.bart1}> Juli 2021 </Text>
            <Text style={Styles.bart2}> Rp 3.000.000 </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={Styles.bar1}>
            <Text style={Styles.bart1}> juni 2021 </Text>
            <Text style={Styles.bart2}> Rp 3.000.000 </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={Styles.bar1}>
            <Text style={Styles.bart1}> Mei 2021 </Text>
            <Text style={Styles.bart2}> Rp 3.000.000 </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={Styles.bar1}>
            <Text style={Styles.bart1}> April 2021 </Text>
            <Text style={Styles.bart2}> Rp 3.000.000 </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={Styles.bar1}>
            <Text style={Styles.bart1}> Maret 2021 </Text>
            <Text style={Styles.bart2}> Rp 3.000.000 </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={Styles.bar1}>
            <Text style={Styles.bart1}> Februari 2021 </Text>
            <Text style={Styles.bart2}> Rp 3.000.000 </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={Styles.bar1}>
            <Text style={Styles.bart1}> Januari 2021 </Text>
            <Text style={Styles.bart2}> Rp 3.000.000 </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </Modal>
  );
};

const Styles = StyleSheet.create({
  bar1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 296,
    height: 36,
    borderColor: '#EDEDED',
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderCurve: 10,
    alignSelf: 'center',
    top: 16,
    paddingHorizontal: 10,
  },
  bart1: {
    fontSize: 16,
    color: '#002558',
  },
  bart2: {
    fontSize: 14,
    color: '#287AE5',
  },
});

export default CalendarModal;
