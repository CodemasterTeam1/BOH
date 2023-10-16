import {StyleSheet, Text, View, Modal, Image} from 'react-native';
import React from 'react';
import {DarkBlue, Primary} from '../../styles/Colour';

const ValidationModal = ({show, onClose, image, title, message}) => {
  return (
    <Modal transparent visible={show} onRequestClose={onClose}>
      <View style={styles.screen}>
        <View style={styles.body}>
          <View style={styles.content}>
            <Image source={image} style={{height: 60, resizeMode: 'contain'}} />
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.contentText}>{message}</Text>
          </View>
          <Text style={styles.pressedText} onPress={onClose}>
            LANJUTKAN
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default ValidationModal;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 35,
    height: 270,
    width: 280,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: DarkBlue,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 30,
  },
  contentText: {
    color: DarkBlue,
    fontWeight: '500',
    fontSize: 17,
    marginTop: 10,
    textAlign: 'center',
  },
  pressedText: {
    color: Primary,
    fontWeight: '500',
    fontSize: 15,
    marginTop: 15,
    alignSelf: 'flex-end',
  },
});
