import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {DarkBlue, Grey, LightGrey, Primary} from '../../styles/Colour';
import {launchImageLibrary} from 'react-native-image-picker';

const EditDokumenScreen = () => {
  const [inputKTP, setInputKTP] = useState('');
  const [inputNPWP, setInputNPWP] = useState('');
  const [imageKTP, setImageKTP] = useState('');
  const [imageNPWP, setImageNPWP] = useState('');

  const openImagePicker = status => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.assets?.[0]?.base64;
        if (status === 'ktp') {
          setImageKTP(imageUri);
        } else {
          setImageNPWP(imageUri);
        }
      }
    });
  };

  const checkData = () => {
    if (
      inputKTP === '' ||
      inputNPWP === '' ||
      imageKTP === '' ||
      imageNPWP === ''
    ) {
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
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.content}>
          <Text style={styles.textHeader}>Data Rekening</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.titleInput}>No. KTP</Text>
          <TextInput
            placeholder="1234567890123456"
            style={styles.input}
            onChangeText={text => setInputKTP(text)}
          />
          <Text style={styles.titleInput}>Foto KTP</Text>
          <View style={styles.imageArea}>
            {imageKTP && (
              <Image
                source={{uri: `data:image/png;base64,${imageKTP}`}}
                style={{height: 120, width: 200, marginBottom: 5}}
              />
            )}
            <TouchableOpacity
              style={styles.button}
              onPress={() => openImagePicker('ktp')}>
              <Text style={styles.textButton}>UNGGAH KTP</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.titleInput}>No. NPWP</Text>
          <TextInput
            placeholder="1234567890123456"
            style={styles.input}
            onChangeText={text => setInputNPWP(text)}
          />
          <Text style={styles.titleInput}>Foto NPWP</Text>
          <View style={styles.imageArea}>
            {imageNPWP && (
              <Image
                source={{uri: `data:image/png;base64,${imageNPWP}`}}
                style={{height: 120, width: 200, marginBottom: 5}}
              />
            )}
            <TouchableOpacity
              style={styles.button}
              onPress={() => openImagePicker('npwp')}>
              <Text style={styles.textButton}>UNGGAH NPWP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 16,
          paddingVertical: 12,
        }}>
        <TouchableOpacity style={styles.button} onPress={() => checkData()}>
          <Text style={styles.textButton}>SIMPAN</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EditDokumenScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: LightGrey,
    padding: 16,
    flex: 1,
  },
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: LightGrey,
  },
  textHeader: {
    color: DarkBlue,
    fontWeight: '800',
    fontSize: 18,
  },
  titleInput: {
    color: DarkBlue,
    fontSize: 15,
    fontWeight: '400',
    marginTop: 10,
  },
  input: {
    color: DarkBlue,
    paddingHorizontal: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Grey,
    fontSize: 15,
    marginTop: 5,
    paddingVertical: 5,
    marginBottom: 5,
  },
  imageArea: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Grey,
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 5,
  },
  button: {
    width: '100%',
    backgroundColor: Primary,
    paddingVertical: 7,
    alignItems: 'center',
    borderRadius: 5,
  },
  textButton: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});
