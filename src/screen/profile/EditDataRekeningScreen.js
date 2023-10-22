import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import TitleHeader from '../../component/global/TitleHeader';

import {White, DarkBlue, Grey, LightGrey, Primary} from '../../styles/Colour';

const EditDataRekeningScreen = () => {
  const [bank, setBank] = useState('BCA');
  const [namaPemilik, setNamaPemilik] = useState('');
  const [noRekening, setNoRekening] = useState('');

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'BCA', value: 'BCA'},
    {label: 'BRI', value: 'BRI'},
    {label: 'Jago', value: 'Jago'},
  ]);

  const checkData = () => {
    if (namaPemilik === '' || noRekening === '' || bank === '') {
      emptyFieldToast();
    } else {
      successToast();
    }
  };

  const emptyFieldToast = () => {
    ToastAndroid.show('Field must not be empty!', ToastAndroid.SHORT);
  };

  const successToast = () => {
    ToastAndroid.show('Data saved successfully!', ToastAndroid.SHORT);
  };

  return (
    <View style={styles.screen}>
      <TitleHeader
        title="Edit Data Rekening"
        onBack={() => navigation.goBack()}
        share={null}
        isSearchBar={false}
      />
      <View style={styles.container3}>
        <View style={styles.contText3}>
          <Text style={styles.title}>Data Rekening</Text>
        </View>
        <View style={styles.line}></View>
        <Text style={styles.isiText}>Bank</Text>
        <View style={{marginHorizontal: 12}}>
          <DropDownPicker
            open={open}
            value={bank}
            items={items}
            setOpen={setOpen}
            setValue={setBank}
            setItems={setItems}
            style={styles.dropdownInput}
            dropDownContainerStyle={{
              backgroundColor: White,
              borderColor: Grey,
            }}
            textStyle={{color: DarkBlue}}
          />
        </View>

        <Text style={styles.isiText}>Nama Pemilik Rekening</Text>
        <TextInput
          placeholder="Masukkan Nama Pemilik Rekening"
          style={styles.txtInput}
          value={namaPemilik}
          onChangeText={text => setNamaPemilik(text)}
        />
        <Text style={styles.isiText}>No. Rekening</Text>
        <TextInput
          placeholder="Masukkan Nomor Rekening"
          style={styles.txtInput}
          value={noRekening}
          keyboardType="number-pad"
          onChangeText={text => setNoRekening(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => checkData()}>
          <Text style={styles.textButton}>SIMPAN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: LightGrey,
    flex: 1,
  },
  contText3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingHorizontal: 10,
  },
  container3: {
    height: 350,
    backgroundColor: White,
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 4,
  },
  title: {
    color: DarkBlue,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 12,
  },
  line: {
    borderColor: Grey,
    borderBottomWidth: 1,
    marginTop: 10,
    width: '100%',
  },
  isiText: {
    fontSize: 12,
    color: DarkBlue,
    marginLeft: 12,
    marginTop: 16,
  },
  txtInput: {
    marginTop: 10,
    borderRadius: 4,
    marginHorizontal: 12,
    paddingLeft: 12,
    borderColor: Grey,
    borderWidth: 1,
    color: DarkBlue,
  },
  button: {
    width: '100%',
    backgroundColor: Primary,
    paddingVertical: 7,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: White,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  textButton: {
    color: White,
    fontWeight: '500',
    fontSize: 16,
  },
  dropdownInput: {
    marginTop: 10,
    borderRadius: 4,
    paddingLeft: 12,
    borderColor: Grey,
    borderWidth: 1,
  },
});

export default EditDataRekeningScreen;
