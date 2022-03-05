import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Back, Copy} from '../../../assets';

const Button = ({icon, onPress, size}) => {
  const Icon = () => {
    if (icon === 'back') {
      return <Image source={Back} style={styles.icon(size)} />;
    }
    if (icon === 'copy') {
      return <Image source={Copy} style={styles.icon(size)} />;
    }
    return <Image source={ICBack} style={styles.icon} />;
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
});
