import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import FiturUtamaSub from './FiturUtamaSub';
const styles = StyleSheet.create({
  wrapperFiturUtama: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    flexWrap: 'wrap',
    width: '100%',
  },
});
const FiturUtama = () => {
  return (
    <View style={styles.wrapperFiturUtama}>
      <FiturUtamaSub image={require('../icon/food.jpg')} title="Food" />
      <FiturUtamaSub image={require('../icon/bike.jpg')} title="Bike" />
      <FiturUtamaSub image={require('../icon/car.jpg')} title="Car" />
      <FiturUtamaSub image={require('../icon/send.jpg')} title="Delivery" />
      <FiturUtamaSub
        image={require('../icon/subscribe.jpg')}
        title="Subscription"
      />
      <FiturUtamaSub image={require('../icon/doctor.jpg')} title="Doctor" />
      <FiturUtamaSub image={require('../icon/pulsa.jpg')} title="Pulsa/Token" />
      <FiturUtamaSub image={require('../icon/more.jpg')} title="More" />
    </View>
  );
};
export default FiturUtama;
