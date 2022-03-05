import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Arrow} from '../../../assets';

const TextContent = ({title, desc, sender, to, type, style}) => {
  if (type === 'bank') {
    return (
      <View style={styles.row}>
        <Text style={styles.bankNameTxt}>{sender}</Text>
        <Image source={Arrow} style={styles.iconArrow} />
        <Text style={styles.bankNameTxt}>{to}</Text>
      </View>
    );
  }
  return (
    <View style={style}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};
export default TextContent;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  iconArrow: {
    width: 20,
    height: 20,
  },
  bankNameTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: 14
  },
  desc: {
    fontSize: 14
  }
});
