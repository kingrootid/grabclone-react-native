import React, {Component} from 'react';
import {View, Text, Stylesheet} from 'react-native';
import PromoItemsSub from './PromoItemsSub';
const PromoItems = () => {
  return (
    <View
      style={{
        marginHorizontal: 18,
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
      }}>
      <PromoItemsSub
        image="https://cdns.klimg.com/merdeka.com/i/w/news/2020/11/08/1240131/540x270/8-makanan-betawi-yang-wajib-dicoba-enak-dan-legendaris.jpg"
        text="Makanan Khas Betawi"
        diskon="Diskon 40%"
      />
      <PromoItemsSub
        image="https://assets.grab.com/wp-content/uploads/sites/9/2019/12/18153245/ID-betawi-gadogado-iStock-1.jpg"
        text="Makanan Khas Betawi 2"
        diskon="Diskon 40%"
      />
      <PromoItemsSub
        image="https://blog.tripcetera.com/id/wp-content/uploads/2019/05/semur-jengkol.jpg"
        text="Makanan Jengkol"
      />
    </View>
  );
};
export default PromoItems;
