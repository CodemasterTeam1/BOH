import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {White, Primary, DarkBlue, DarkGrey, Grey} from '../../styles/Colour';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import UserApi from '../../data/remote/apiservice/UserApi';
import LoadingModal from '../../component/modal/LoadingModal';

const ProfileScreen = () => {
  const {user} = useSelector(state => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const isFoccused = useIsFocused();
  const [userDetail, setUserDetail] = useState({});
  useEffect(() => {
    GetUserDetail();
  }, [isFoccused]);

  useEffect(() => {
    console.log('updated userDetail:', userDetail);
  }, [userDetail]);

  const GetUserDetail = async () => {
    setIsLoading(true);
    console.log(user.token);
    const res = await UserApi.GetUserDetail(user.user.id, user.token);
    console.log(res);
    if (res.code === 200) {
      setUserDetail(res.profile);
      setIsLoading(false);
    } else {
      console.log(res);
      setIsLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          style={styles.image}
          source={require('../../assets/images/background-profil_ic.png')}>
          <View style={styles.contImage}>
            <Image
              source={require('../../assets/images/profile.jpg')}
              style={styles.image2}
            />
            <View style={styles.icon}>
              <Icon name="arrow-alt-circle-right" size={25} color={White} />
            </View>
          </View>
          <View style={styles.contText}>
            <Text style={styles.text}>{user.user.name}</Text>
          </View>
        </ImageBackground>
        <View style={styles.container2}>
          <View style={styles.contText2}>
            <Text style={styles.text2}>Cek Harga Kendaraan</Text>
          </View>
          <View style={styles.contIcon}>
            <Icon name="angle-right" size={22} color={White} />
          </View>
        </View>
        <ScrollView>
          <View style={styles.container3}>
            <View style={styles.contText3}>
              <Text style={styles.title}>Data Diri</Text>
              <Text style={styles.title2}>Edit Data Diri</Text>
            </View>
            <View style={styles.line}></View>
            <Text style={styles.isiText}>Nama Kepala Cabang</Text>
            <Text style={styles.isiText2}>{user.user.name ?? '-'}</Text>
            <Text style={styles.isiText}>No. Telepon</Text>
            <Text style={styles.isiText2}>{user.user.phone ?? '-'}</Text>
            <Text style={styles.isiText}>Tanggal Lahir</Text>
            <Text style={styles.isiText2}>{userDetail.dateOfBirth ?? '-'}</Text>
          </View>

          <View style={styles.container3}>
            <View style={styles.contText3}>
              <Text style={styles.title}>Data Rekening</Text>
              <Text style={styles.title2}>Edit Data Rekening</Text>
            </View>
            <View style={styles.line}></View>
            <Text style={styles.isiText}>Bank</Text>
            <Text style={styles.isiText2}>{userDetail.bankName ?? '-'}</Text>
            <Text style={styles.isiText}>Nama Pemilik Rekening</Text>
            <Text style={styles.isiText2}>{user.user.name ?? '-'}</Text>
            <Text style={styles.isiText}>No. Rekening</Text>
            <Text style={styles.isiText2}>{userDetail.bankAccNo ?? '-'}</Text>
          </View>

          <View style={styles.container4}>
            <View style={styles.contText3}>
              <Text style={styles.title}>Data Rekening</Text>
              <Text style={styles.title2}>Edit Data Rekening</Text>
            </View>
            <View style={styles.line}></View>
            <Text style={styles.isiText}>No. KTP</Text>
            <Text style={styles.isiText2}>{userDetail.noKTP ?? '-'}</Text>
            <Text style={styles.isiText}>Foto KTP</Text>
            {userDetail.ktp ? (
              <Image
                source={require('../../assets/images/ktp_img.jpg')}
                style={styles.ktp}
              />
            ) : (
              <Image
                source={require('../../assets/images/default.jpg')}
                style={styles.ktp}
              />
            )}
            <Text style={styles.isiText}>No. NPWP</Text>
            <Text style={styles.isiText2}>{userDetail.noNPWP ?? '-'}</Text>
            <Text style={styles.isiText}>Foto NPWP</Text>
            {userDetail.npwp ? (
              <Image
                source={require('../../assets/images/ktp_img.jpg')}
                style={styles.ktp}
              />
            ) : (
              <Image
                source={require('../../assets/images/default.jpg')}
                style={styles.ktp}
              />
            )}
          </View>
        </ScrollView>
      </View>
      <LoadingModal isloading={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 142,
    width: '100%',
  },
  image2: {
    width: 64,
    height: 64,
    borderRadius: 100,
  },
  contImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  contText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  text: {
    color: White,
    fontWeight: 'bold',
    fontSize: 20,
  },
  icon: {
    position: 'absolute',
    top: 1,
    right: 12,
  },
  container2: {
    backgroundColor: Primary,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 48,
    marginHorizontal: 10,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  contText2: {justifyContent: 'center'},
  text2: {
    color: White,
    fontSize: 14,
    fontWeight: '500',
  },
  contIcon: {justifyContent: 'center'},
  contText3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingHorizontal: 10,
  },
  container3: {
    height: 220,
    backgroundColor: White,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 4,
  },
  line: {
    borderColor: '#EDEDED',
    borderBottomWidth: 1,
    marginTop: 10,
    width: '100%',
  },
  title: {
    color: DarkBlue,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 12,
  },
  title2: {
    color: Primary,
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 12,
  },
  isiText: {
    fontSize: 12,
    color: DarkBlue,
    marginLeft: 12,
    marginTop: 16,
  },
  isiText2: {
    fontSize: 14,
    color: DarkBlue,
    fontWeight: 'bold',
    marginLeft: 12,
    marginTop: 4,
  },
  container4: {
    height: 700,
    backgroundColor: White,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 4,
  },
  ktp: {
    height: 128,
    width: 214,
    resizeMode: 'contain',
    marginLeft: 12,
    marginTop: 4,
  },
});
export default ProfileScreen;
