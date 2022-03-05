import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { colors } from '../../../utils';

const Link = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
export default Link;

const styles = StyleSheet.create({
    text: {
        color: colors.primary,
        fontSize: 16
    }
});
