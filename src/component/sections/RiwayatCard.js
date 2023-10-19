import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DarkBlue, Grey, Primary, White} from '../../styles/Colour';
import Icon from 'react-native-vector-icons/FontAwesome5';

const RiwayatCard = ({date, status}) => {
  return (
    <View style={styles.card}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.checkIcon}>
          <Icon name="check" color={White} />
        </View>
        <View>
          <Text style={styles.textDate}>{date}</Text>
          <Text style={styles.textStatus}>{status}</Text>
        </View>
      </View>
    </View>
  );
};

export default RiwayatCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Grey,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
  },
  checkIcon: {
    backgroundColor: DarkBlue,
    borderRadius: 25,
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 18,
  },
  textDate: {
    color: 'black',
  },
  textStatus: {
    color: Primary,
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 8,
  },
});
