import React, {useState} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {DarkBlue, Putih, Grey, DarkGrey, Primary} from '../../styles/Colour';

const RequestDiscountModal = ({show, onClose}) => {
  const [diskon, setDiskon] = useState('');
  const [catatan, setCatatan] = useState('');

  const handleRequestSended = () => {
    onClose();
  };

  return (
    <Modal transparent visible={show} onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.header}>
            <Text style={styles.title}>Request Discount</Text>
            <TouchableOpacity onPress={onClose}>
              <Icon name="close" size={23} color={DarkBlue} />
            </TouchableOpacity>
          </View>
          <View style={styles.line}></View>
          <View style={styles.container1}>
            <View style={styles.containerDalam}>
              <Text style={styles.subTitle}>Masukkan Diskon</Text>
              <View style={styles.containerDalam}>
                <Text style={styles.teksBiasa}>OTR : </Text>
                <Text style={[styles.subTitle, {fontWeight: 'bold'}]}>
                  Rp 276.600.000
                </Text>
              </View>
            </View>
            <View style={styles.containerInput}>
              <View style={styles.currencySymbol}>
                <Text style={{color: DarkBlue}}>Rp</Text>
              </View>
              <TextInput
                placeholder="Masukkan Diskon"
                style={styles.txtInput}
                value={diskon}
                onChangeText={text => setDiskon(text)}
                keyboardType="number-pad"
              />
            </View>
            <Text style={[styles.teksBiasa, {marginTop: 6}]}>
              * Request Pengajuan Discount
            </Text>
          </View>

          <View style={[styles.container1, {marginTop: -4}]}>
            <View style={styles.containerDalam}>
              <Text style={styles.subTitle}>Notes</Text>
              <Text style={styles.teksBiasa}>0/100</Text>
            </View>
            <TextInput
              placeholder="Masukkan Catatan"
              style={styles.txtInput1}
              value={catatan}
              onChangeText={text => setCatatan(text)}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleRequestSended}>
              <Text style={styles.textButton}>SEND REQUEST</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: Putih,
    borderBottomWidth: 1,
  },
  body: {
    width: '100%',
    backgroundColor: Putih,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 16,
    color: DarkBlue,
    fontWeight: 'bold',
  },
  line: {
    borderColor: Grey,
    borderBottomWidth: 1,
    width: '100%',
  },
  container1: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  containerDalam: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subTitle: {
    fontSize: 12,
    color: DarkBlue,
  },
  teksBiasa: {
    color: DarkGrey,
    fontSize: 12,
  },
  txtInput: {
    marginTop: 10,
    borderRadius: 4,
    paddingLeft: 12,
    borderColor: Grey,
    borderWidth: 1,
    color: DarkBlue,
  },
  txtInput1: {
    paddingBottom: 60,
    marginTop: 10,
    borderRadius: 4,
    paddingLeft: 12,
    borderColor: Grey,
    borderWidth: 1,
    color: DarkBlue,
  },
  button: {
    backgroundColor: Primary,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    marginBottom: 16,
    marginHorizontal: 16,
  },
  textButton: {
    color: Putih,
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
  },
  containerInput: {
    marginTop: 10,
    borderRadius: 4,
    paddingLeft: 12,
    borderWidth: 1,
    color: DarkBlue,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Grey,
  },
  currencySymbol: {
    marginRight: 8,
  },
  txtInput: {
    flex: 1, // Allow the TextInput to expand and fill the remaining space
  },
});

export default RequestDiscountModal;
