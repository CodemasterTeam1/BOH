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

const OdooModal = () => {
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
            <Text style={styles.text}>
              Apakah anda yakin akan meneruskan ke Odoo?
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text2}>YA</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text3}>Batal</Text>
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
    height: 216,
    borderRadius: 4,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: Primary,
    marginTop: 40,
    // marginBottom: 10,
    fontSize: 15,
  },
  button: {
    backgroundColor: Primary,
    width: '95%',
    height: 36,
    borderRadius: 4,
    justifyContent: 'center',
    marginTop: 40,
  },
  text2: {
    textAlign: 'center',
    color: White,
    fontWeight: 'bold',
  },
  text3: {
    color: DarkGrey,
    marginTop: 17,
  },
});

export default OdooModal;
