import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {
  White,
  Primary,
  DarkBlue,
  DarkGrey,
  LightGrey,
} from '../../styles/Colour';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ErrorUncompliteModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      {/* <Button title="Buka Modal" onPress={toggleModal} /> */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={toggleModal}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Image
              source={require('../../assets/icons/error_ic.png')}
              style={styles.image}
            />
            <Text style={styles.text}>Data kurang lengkap</Text>
            <Text style={styles.text2}>
              Silahkan cek ulang data yang belum lengkap
            </Text>
            <TouchableOpacity style={{alignSelf: 'flex-end', marginRight: 5}}>
              <Text style={styles.text3}>KEMBALI</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: LightGrey,
  },
  modalContent: {
    backgroundColor: White,
    width: '80%',
    height: 254,
    borderRadius: 4,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: DarkBlue,
    marginTop: 32,
    // marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text2: {
    textAlign: 'center',
    color: DarkBlue,
    marginTop: 10,
    marginHorizontal: 20,
    fontSize: 16,
  },
  text3: {
    color: Primary,
    marginTop: 17,
    fontWeight: 'bold',
    marginRight: 20.75,
  },
  image: {
    marginTop: 32,
    height: 54,
    width: 54,
    resizeMode: 'contain',
  },
});

export default ErrorUncompliteModal;
