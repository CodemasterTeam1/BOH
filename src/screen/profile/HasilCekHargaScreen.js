import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TitleHeader from '../../component/global/TitleHeader';
import {
  BlueGrey,
  DarkBlue,
  LightGrey,
  LowWhite,
  Primary,
  Putih,
  White,
} from '../../styles/Colour';

const HasilCekHargaScreen = () => {
  return (
    <View style={styles.ksluruhan}>
      <TitleHeader
        title="Hasil Cek Harga"
        onBack={() => navigation.goBack()}
        share={null}
        isSearchBar={false}
      />
      <View style={{marginTop: 15, marginBottom: 30}}>
        <Text
          style={{
            color: DarkBlue,
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Perkiraan Harga
        </Text>
      </View>
      <View
        style={{
          borderColor: BlueGrey,
          borderWidth: 1,
          marginHorizontal: 85,
          borderRadius: 5,
          marginBottom: 20,
        }}>
        <View
          style={{
            backgroundColor: Primary,
            alignSelf: 'center',
            borderRadius: 5,
            marginTop: -13,
          }}>
          <Text
            style={{
              color: White,
              fontSize: 16,
              marginHorizontal: 16,
              marginVertical: 4,
              fontWeight: 'bold',
            }}>
            TOYOTA
          </Text>
        </View>
        <View style={{marginTop: 7}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 24,
              color: DarkBlue,
              fontWeight: 'bold',
            }}>
            Camry
          </Text>
        </View>
        <View style={{marginTop: 5, marginBottom: 7}}>
          <Text style={{textAlign: 'center', color: DarkBlue, fontSize: 16}}>
            All New Camry 3.5 Q AT
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: Primary,
          marginHorizontal: 16,
          borderRadius: 5,
        }}>
        <View
          style={{
            backgroundColor: LowWhite,
            marginHorizontal: 8,
            marginTop: 8,
            borderRadius: 5,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              fontWeight: 'bold',
              color: Putih,
              marginVertical: 7,
            }}>
            *Harga berlaku untuk Plat B
          </Text>
        </View>
        <View
          style={{
            alignContent: 'space-between',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 9,
            marginBottom: 11,
          }}>
          <View style={{marginHorizontal: 40}}>
            <Text style={{fontWeight: 'bold', fontSize: 14, color: Putih}}>
              Rp 80.000.000
            </Text>
          </View>
          {/* <View style={{marginHorizontal: 40}}>
            <Text style={{fontWeight: 'bold', fontSize: 14}}>-----------</Text>
          </View> */}
          <View style={styles.line}></View>
          <View style={{marginHorizontal: 40}}>
            <Text style={{fontWeight: 'bold', fontSize: 14, color: Putih}}>
              Rp 100.000.000
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          borderWidth: 1,
          marginTop: 20,
          marginHorizontal: 16,
          borderColor: BlueGrey,
        }}>
        <View
          style={{
            alignContent: 'space-between',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <View style={{alignItems: 'center', marginVertical: 15}}>
            <View style={{marginHorizontal: 9}}>
              <Text style={{fontSize: 12, color: DarkBlue}}>
                Estimasi Kilometer
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 16, color: DarkBlue, fontWeight: 'bold'}}>
                &lt; 180.000
              </Text>
            </View>
          </View>
          <View
            style={{
              borderRightWidth: 1,
              borderLeftWidth: 1,
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <View style={{marginHorizontal: 9}}>
              <Text style={{fontSize: 12, color: DarkBlue}}>
                Estimasi Warna
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 12, fontWeight: 'bold', color: DarkBlue}}>
                Non Hitam/Putih
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'center', marginVertical: 15}}>
            <View style={{marginHorizontal: 9}}>
              <Text style={{fontSize: 12, color: DarkBlue}}>
                Estimasi Tahun
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  color: DarkBlue,
                  fontWeight: 'bold',
                }}>
                2007
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          borderWidth: 1,
          marginTop: 20,
          marginHorizontal: 16,
          borderColor: BlueGrey,
        }}>
        <View style={{marginTop: 7, marginBottom: 9}}>
          <Text
            style={{
              fontSize: 18,
              color: DarkBlue,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Keterangan
          </Text>
        </View>
        <View
          style={{
            borderTopWidth: 1,
            width: 50,
            alignSelf: 'center',
            borderColor: BlueGrey,
            marginBottom: 12,
          }}
        />
        <View style={{marginHorizontal: 16, marginBottom: 8}}>
          <Text style={{fontSize: 14, color: DarkBlue}}>
            Harga yang diberikan merupakan estimasi awal yang dapat di tawarkan
            Toyota Trust dan bukan merupakan harga final setelah proses
            appraisal.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HasilCekHargaScreen;

const styles = StyleSheet.create({
  ksluruhan: {backgroundColor: Putih, flex: 1},
  line: {
    borderColor: Putih,
    borderTopWidth: 2,
    width: 50,
    marginTop: 9,
  },
});
