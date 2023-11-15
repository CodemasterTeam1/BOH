import React, {useState} from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const Model = [
  {label: 'camry', value: '1'},
  {label: 'corolla', value: '2'},
  {label: 'prius', value: '3'},
  {label: 'crown', value: '4'},
  {label: 'Mirai', value: '5'},
  {label: 'GR', value: '6'},
  {label: 'Highlander', value: '7'},
  {label: 'Siena', value: '8'},
];

const Tipe = [
  {label: 'HYBRID', value: '1'},
  {label: 'AUTO', value: '2'},
  {label: 'MANUAL', value: '3'},
];

const Tahun = [
  {label: '2012', value: '1'},
  {label: '2013', value: '2'},
  {label: '2014', value: '3'},
  {label: '2015', value: '4'},
  {label: '2016', value: '5'},
  {label: '2017', value: '6'},
  {label: '2018', value: '7'},
  {label: '2019', value: '8'},
];

const CekHarga = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={Styles.main}>
      <Text style={Styles.MainText}>Brand</Text>
      <View style={Styles.container}>
        <Dropdown
          style={[Styles.dropdown, isFocus && {borderColor: 'blue'}]}
          placeholderStyle={Styles.placeholderStyle}
          selectedTextStyle={Styles.selectedTextStyle}
          inputSearchStyle={Styles.inputSearchStyle}
          iconStyle={Styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>

      <Text style={Styles.MainText}>Model</Text>
      <View style={Styles.container}>
        <Dropdown
          style={[Styles.dropdown, isFocus && {borderColor: 'blue'}]}
          placeholderStyle={Styles.placeholderStyle}
          selectedTextStyle={Styles.selectedTextStyle}
          inputSearchStyle={Styles.inputSearchStyle}
          iconStyle={Styles.iconStyle}
          data={Model}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <Text style={Styles.MainText}>Tipe</Text>
      <View style={Styles.container}>
        <Dropdown
          style={[Styles.dropdown, isFocus && {borderColor: 'blue'}]}
          placeholderStyle={Styles.placeholderStyle}
          selectedTextStyle={Styles.selectedTextStyle}
          inputSearchStyle={Styles.inputSearchStyle}
          iconStyle={Styles.iconStyle}
          data={Tipe}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <Text style={Styles.MainText}>Tahun</Text>
      <View style={Styles.container}>
        <Dropdown
          style={[Styles.dropdown, isFocus && {borderColor: 'blue'}]}
          placeholderStyle={Styles.placeholderStyle}
          selectedTextStyle={Styles.selectedTextStyle}
          inputSearchStyle={Styles.inputSearchStyle}
          iconStyle={Styles.iconStyle}
          data={Tahun}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <View style={Styles.info}>
        <Text style={Styles.Tinfo}>Kuota cek harga hari ini:</Text>
        <TouchableOpacity>
          <Text style={Styles.num}>0/50</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={Styles.button1}>
        <Text style={Styles.Tbutton1}> Cek Harga </Text>
      </TouchableOpacity>

      <TouchableOpacity style={Styles.button2}>
        <Text style={Styles.Tbutton2}> Mobil Tidak Ada Di List </Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  main: {
    width: 328,
    height: 436,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    margin: 15,
    alignSelf: 'center',
    marginTop: 72,
  },
  button1: {
    width: 304,
    height: 36,
    backgroundColor: '#287AE5',
    margin: 5,
    justifyContent: 'center',
  },
  button2: {
    width: 304,
    height: 36,
    borderColor: '#287AE5',
    borderWidth: 2,
    margin: 5,
    justifyContent: 'center',
  },

  Tbutton1: {
    alignSelf: 'center',
    fontSize: 18,
  },
  Tbutton2: {
    color: '#287AE5',
    alignSelf: 'center',
    fontSize: 20,
  },
  MainText: {
    color: '#002558',
    fontSize: 12,
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 35,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: 'black',
  },
  info: {
    width: 304,
    height: 32,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Tinfo: {
    color: 'black',
    fontSize: 14,
    marginRight: 100,
  },
  num: {
    color: '#002558',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CekHarga;
