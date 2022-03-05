import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../atoms/Button';
import {colors} from '../../../utils';

const Header = ({title, onPress, hasBack}) => {
  return (
    <View style={styles.container}>
      {hasBack && <Button icon="back" onPress={onPress} size={22} />}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: '10%',
    backgroundColor: colors.primary,
    width: '100%',
  },
  text: {
    fontSize: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    color: colors.white,
  },
});
