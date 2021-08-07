import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import ImgBanner from './source/images/awan.jpg';
import OvoComponent from './source/component/OvoComponent';
import FiturUtama from './source/component/FiturUtama';
import PromoItems from './source/component/PromoItems';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  imageBanner: {
    height: 140,
    width: width,
  },
  greetingText: {
    fontSize: 17,
    fontWeight: 'bold',
    position: 'absolute',
    alignSelf: 'center',
    top: 30,
    color: '#383838',
  },
  wrapperOvo: {
    marginHorizontal: 18,
    height: 150,
    marginTop: -60,
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 10,
  },
  textOvo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginTop: 10,
  },
  garisDiOvo: {
    height: 0.8,
    backgroundColor: '#adadad',
    marginTop: 10,
  },
  divider: {
    width: width,
    height: 15,
    backgroundColor: '#ededed',
    marginVertical: 15,
  },
});
class Home extends React.Component {
  render() {
    return (
      <ScrollView>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="rgba(0,0,0,0)"
          translucent
        />
        <Image style={styles.imageBanner} source={ImgBanner} />
        <Text style={styles.greetingText}>Selamat Siang</Text>
        <View style={styles.wrapperOvo}>
          <View style={styles.textOvo}>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: '#383838'}}>
              OVO Balance
            </Text>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: '#383838'}}>
              Rp. 1.000.000
            </Text>
          </View>
          <View style={styles.garisDiOvo}></View>
          <OvoComponent />
        </View>
        <View style={{marginHorizontal: 18}}>
          <FiturUtama />
        </View>
        <View style={styles.divider}></View>
        <PromoItems />
      </ScrollView>
    );
  }
}
export default Home;
