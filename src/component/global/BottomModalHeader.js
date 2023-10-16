import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {DarkBlue, Grey} from '../../styles/Colour';

const BottomModalHeader = ({show, onClose, title = 'Header', children}) => {
  return (
    <Modal transparent visible={show} onRequestClose={onClose}>
      <View style={styles.screen}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
            <TouchableOpacity onPress={onClose}>
              <Icon name="times" size={18} style={{color: DarkBlue}} />
            </TouchableOpacity>
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default BottomModalHeader;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  content: {
    width: '100%',
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: Grey,
    borderBottomWidth: 1,
  },
  headerTitle: {
    color: DarkBlue,
    fontWeight: 'bold',
    fontSize: 17,
  },
});
