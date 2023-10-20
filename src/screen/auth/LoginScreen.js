import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  DarkBlue,
  DarkGrey,
  LightGrey,
  Primary,
  White,
} from '../../styles/Colour';
import ModalSelectArea from '../../component/modal/SelectAreaModal';
import UserApi from '../../data/remote/apiservice/UserApi';
import {useDispatch, useSelector} from 'react-redux';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedArea, setSelectedArea] = useState(null);

  const cities = [
    {id: 1, namaKota: 'Jakarta'},
    {id: 2, namaKota: 'Surabaya'},
    {id: 3, namaKota: 'Bandung'},
  ];

  const handleLogin = () => {
    if (email && pass) {
      setIsModalVisible(true);
    } else {
      alert('Login gagal. Mohon isi alamat email dan password.');
    }
  };

  const login = async () => {
    const user = {
      email: email,
      password: pass,
    };

    const res = await UserApi.Login(user);
    console.log('Data Login: ', res);
    if (res.code === 200) {
      setIsModalVisible(true);
      addLoggedUser(res);
    } else {
      loginErrorToast;
    }
  };

  const loginErrorToast = () => {
    ToastAndroid.show('LoginError', ToastAndroid.SHORT);
  };

  const dispatch = useDispatch();
  const {user} = useSelector(state => state.user);
  const addLoggedUser = res => {
    console.log('res: ', res);
    var dataUser = [...user];
    const data = {
      dataUser: res,
    };
    dataUser.push(data);
    dispatch({type: 'LOGIN', data: dataUser});
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Digital Approval</Text>
        </View>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo-toyota.png')}
        />
        <View style={styles.inputContainer}>
          <Icon style={styles.icon} name="envelope" size={15} solid />
          <TextInput
            style={styles.input}
            placeholder="Alamat Email"
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon style={styles.icon} name="lock" size={15} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            label="Password"
            value={pass}
            onChangeText={pass => setPass(pass)}
            secureTextEntry={true}
          />
        </View>
        <Text style={styles.reset} onPress={() => {}}>
          Reset Password
        </Text>
        <TouchableOpacity onPress={() => login()}>
          <Text style={styles.login}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <ModalSelectArea
        isVisible={isModalVisible}
        data={cities}
        // onClose={() => setIsModalVisible(false)}
        onContinue={selected => {
          setSelectedArea(selected);
          setIsModalVisible(false);
          navigation.navigate('ToolsTradeIn');
        }}
      />
      {/* {selectedArea && <Text>Anda memilih kota: {selectedArea.namaKota}</Text>} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: LightGrey,
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    marginHorizontal: 20,
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: White,
    borderRadius: 10,
  },
  titleContainer: {
    marginTop: -18,
  },
  title: {
    backgroundColor: DarkBlue,
    padding: 8,
    textAlign: 'center',
    fontSize: 16,
    color: White,
    borderRadius: 100,
    width: 170,
    height: 36,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  logo: {
    width: 127,
    height: 55,
    alignSelf: 'center',
    marginTop: 27,
    marginBottom: 38,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: DarkGrey,
    borderRadius: 5,
    height: 48,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 16,
  },
  icon: {
    marginLeft: 16,
    marginRight: 8,
    width: 16,
    height: 16,
    color: DarkBlue,
  },
  input: {
    height: 48,
    width: '100%',
    color: DarkBlue,
  },
  reset: {
    fontStyle: 'italic',
    color: Primary,
    textAlign: 'right',
  },
  login: {
    fontSize: 16,
    color: White,
    backgroundColor: Primary,
    width: '100%',
    height: 48,
    alignSelf: 'center',
    textAlign: 'center',
    padding: 12,
    fontWeight: 'bold',
    borderRadius: 5,
    marginTop: 24,
  },
});

export default LoginScreen;
