import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Arrow} from '../../../assets';
import { colors } from '../../../utils';

const TextContent = ({title, desc, sender, to, type, style}) => {
  
  if (type === 'bank') {
    let lengthSender = sender.length
    let lengthTo = to.length
    return (
      <View style={styles.row}>
        <Text style={styles.bankNameTxt(lengthSender)}>{sender}</Text>
        <Image source={Arrow} style={styles.iconArrow} />
        <Text style={styles.bankNameTxt(lengthTo)}>{to}</Text>
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
  bankNameTxt: length=> ({
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: length<=4?'uppercase':'capitalize',
    color: colors.black
  }),
  title: {
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: 14,
    color: colors.black
  },
  desc: {
    fontSize: 14,
    color: colors.black
  }
});
