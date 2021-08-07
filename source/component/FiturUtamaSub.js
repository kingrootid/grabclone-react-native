import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  imageFiturUtama: {
    height: 55,
    width: 55,
    marginTop: 15,
  },
  textFiturUtama: {
    textAlign: 'center',
    marginTop: 4,
  },
});
// const FiturUtamaSub = props => {
//   return (
//     <View style={{width: '25%', alignItems: 'center'}}>
//       <Image style={styles.imageFiturUtama} source={props.image} />
//       <Text style={styles.textFiturUtama}>{props.title}</Text>
//     </View>
//   );
// };

// menggunakan class component
class FiturUtamaSub extends React.Component {
  render() {
    return (
      <View style={{width: '25%', alignItems: 'center'}}>
        <Image style={styles.imageFiturUtama} source={this.props.image} />
        <Text style={styles.textFiturUtama}>{this.props.title}</Text>
      </View>
    );
  }
}
export default FiturUtamaSub;
