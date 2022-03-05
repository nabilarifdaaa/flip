import React from 'react';
import {StyleSheet, TouchableOpacity, Image, View, Text} from 'react-native';
import {Back, Copy, Expand, Unchecked, Checked, Close} from '../../../assets';
import { colors } from '../../../utils';

const Button = ({icon, onPress, size, title}) => {
  const Icon = () => {
    if (icon === 'back') {
      return <Image source={Back} style={styles.icon(size)} />;
    }
    if (icon === 'copy') {
      return <Image source={Copy} style={styles.icon(size)} />;
    }
    if (icon === 'expand-with-text') {
      return (
        <View style={styles.btnWithTxt}>
          <Text style={styles.text}>{title}</Text>
          <Image source={Expand} style={styles.icon(size)} />
        </View>
      );
    }
    if (icon === 'unchecked') {
      return <Image source={Unchecked} style={styles.icon(size)} />;
    }
    if (icon === 'checked') {
      return <Image source={Checked} style={styles.icon(size)} />;
    }
    if (icon === 'close') {
      return <Image source={Close} style={styles.icon(size)} />;
    }
    return <Image source={Back} style={styles.icon} />;
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  icon: size => ({
    width: size ? size : 20,
    height: size ? size : 20,
  }),
  btnWithTxt: {
    flexDirection: 'row',
    alignItems: 'center'
  },  
  text: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '600'
  }
});
