import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Pressable,
  Platform,
  Image,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import handleShare from '../../utils/HandleShare';
import TitleHeader from '../../component/global/TitleHeader';

import {White, DarkBlue, Grey, LightGrey, Primary} from '../../styles/Colour';

const EditDataDiriScreen = () => {
  const [nama, setNama] = useState('');
  const [noTelp, setNoTelp] = useState('');
  const [tanggalLahir, setTanggalLahir] = useState('');

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChangePicker = ({type}, selectedDate) => {
    if (type == 'set') {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === 'android') {
        toggleDatePicker();
        setTanggalLahir(currentDate.toDateString());
      }
    } else {
      toggleDatePicker();
    }
  };

  const checkData = () => {
    if (nama === '' || noTelp === '' || tanggalLahir === '') {
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
        title="Edit Data Diri"
        onBack={() => navigation.goBack()}
        share={null}
        isSearchBar={false}
      />
      <View style={styles.container3}>
        <View style={styles.contText3}>
          <Text style={styles.title}>Data Diri</Text>
        </View>
        <View style={styles.line}></View>
        <Text style={styles.isiText}>Nama Kepala Cabang</Text>
        <TextInput
          placeholder="Masukkan Nama Kepala Cabang"
          style={styles.txtInput}
          value={nama}
          onChangeText={text => setNama(text)}
        />
        <Text style={styles.isiText}>No. Telepon</Text>
        <TextInput
          placeholder="Masukkan Nomor Telepon"
          style={styles.txtInput}
          keyboardType="number-pad"
          value={noTelp}
          onChangeText={text => setNoTelp(text)}
        />
        <Text style={styles.isiText}>Tanggal Lahir</Text>
        {showPicker && (
          <DateTimePicker
            mode="date"
            display="spinner"
            value={date}
            onChange={onChangePicker}
          />
        )}
        {!showPicker && (
          <Pressable onPress={toggleDatePicker}>
            <View style={styles.kotakInput}>
              <TextInput
                placeholder="Masukkan Tanggal Lahir"
                style={styles.txtInput1}
                value={tanggalLahir}
                editable={false}
              />
              <Image
                source={require('../../assets/icons/calendar_ic.png')} // Ganti dengan path gambar yang Anda inginkan
                style={styles.iconImage}
              />
            </View>
          </Pressable>
        )}
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
  kotakInput: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Grey,
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: 12,
  },
  iconImage: {
    width: 24,
    height: 24,
    marginRight: 12,
    marginTop: -3,
    resizeMode: 'contain',
  },
  txtInput1: {
    paddingLeft: 12,
    color: DarkBlue,
    flex: 1,
    alignSelf: 'flex-end',
  },
});

export default EditDataDiriScreen;
