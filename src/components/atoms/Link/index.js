import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

const Link = ({text, onPress, size}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(size)}>{text}</Text>
    </TouchableOpacity>
  );
};
export default Link;

const styles = StyleSheet.create({
  text: size => ({
    color: colors.primary,
    fontSize: size ? size : 16,
  }),
});
