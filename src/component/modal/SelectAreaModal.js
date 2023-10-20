import React, {useState} from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {handleSelectArea} from '../../utils/SelectArea';
import {DarkBlue, DarkGrey, Grey, Primary, White} from '../../styles/Colour';

const ModalSelectArea = ({isVisible, data, onClose, onContinue}) => {
  const [selectedArea, setSelectedArea] = useState(null);

  return (
    <Modal transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Pilih Area</Text>
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  setSelectedArea(handleSelectArea(selectedArea, item))
                }>
                <View style={styles.itemContainer}>
                  <Text style={styles.itemText}>{item.namaKota}</Text>
                  <View style={styles.checkboxContainer}>
                    {selectedArea && selectedArea.id === item.id && (
                      <View style={styles.checkbox} />
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onContinue(selectedArea);
              // onClose();
            }}>
            <Text style={styles.buttonText}>LANJUTKAN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DarkGrey,
  },
  modalContent: {
    width: '80%',
    backgroundColor: White,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: DarkBlue,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomColor: Grey,
    borderBottomWidth: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  itemText: {
    fontSize: 16,
    color: DarkBlue,
  },
  checkboxContainer: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: Primary,
    marginRight: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: Primary,
  },
  button: {
    backgroundColor: Primary,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 16,
    height: 48,
  },
  buttonText: {
    color: White,
    fontWeight: 'bold',
  },
});

export default ModalSelectArea;
