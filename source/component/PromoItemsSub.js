import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 8,
    width: width / 2 - 27,
    marginRight: 18,
    marginBottom: 18,
  },
  promoImage: {
    height: width / 2 - 27,
    width: width / 2 - 27,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  textPromo: {
    marginLeft: 10,
    marginVertical: 10,
  },
  textDiskon: {
    position: 'absolute',
    top: 10,
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 7,
    left: 4,
  },
});
const PromoItemsSub = props => {
  return (
    <View style={styles.wrapper}>
      <Image source={{uri: props.image}} style={styles.promoImage} />
      <View style={styles.textPromo}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          {props.text}
        </Text>
      </View>
      {props.diskon ? (
        <View style={styles.textDiskon}>
          <Text>{props.diskon}</Text>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};
export default PromoItemsSub;
