import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';

const Filter2Modal = show => {
  const [selectedRadio, setSelectionRadio] = useState(1);
  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={show}
      onRequestClose={this.close}>
      <TitleHeader title="Filter" onBack={() => navigation.goBack()} />
      <TouchableOpacity onPress={() => setSelectionRadio(1)}>
        <View style={Styles.main}>
          <Text style={Styles.RadioT1}>A - Z</Text>
          <View style={Styles.Radio1}>
            {selectedRadio == 1 ? <View style={Styles.RadioBg}></View> : null}
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectionRadio(2)}>
        <View style={Styles.main}>
          <Text style={Styles.RadioT1}>Z - A</Text>
          <View style={Styles.Radio1}>
            {selectedRadio == 2 ? <View style={Styles.RadioBg}></View> : null}
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectionRadio(2)}>
        <View style={Styles.main}>
          <Text style={Styles.RadioT1}>Terbaru</Text>
          <View style={Styles.Radio1}>
            {selectedRadio == 2 ? <View style={Styles.RadioBg}></View> : null}
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectionRadio(2)}>
        <View style={Styles.main}>
          <Text style={Styles.RadioT1}>Terlama</Text>
          <View style={Styles.Radio1}>
            {selectedRadio == 2 ? <View style={Styles.RadioBg}></View> : null}
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectionRadio(2)}>
        <View style={Styles.main}>
          <Text style={Styles.RadioT1}>Salesman</Text>
          <View style={Styles.Radio1}>
            {selectedRadio == 2 ? <View style={Styles.RadioBg}></View> : null}
          </View>
        </View>
      </TouchableOpacity>
      <Button>
        <Text>Simpan</Text>
      </Button>
    </Modal>
  );
};

const Styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 20,
  },
  RadioT1: {
    color: 'black',
    fontSize: 20,
  },
  Radio1: {
    width: 40,
    height: 40,
    borderColor: '#287AE5',
    borderRadius: 20,
    borderWidth: 3,
    marginLeft: 180,
  },
  RadioBg: {
    backgroundColor: '#287AE5',
    height: 28,
    width: 28,
    margin: 3,
    borderRadius: 14,
  },
});
export default LoginModal;
