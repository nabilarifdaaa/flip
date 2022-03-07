import React from 'react';
import {StyleSheet, TextInput, View, Image} from 'react-native';
import {colors} from '../../../utils';
import {Button} from '../../atoms';
import {SearchIcon} from '../../../assets';

const Search = ({titleButton, onPress, onChange}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={SearchIcon} style={styles.icon} />
        <TextInput
          placeholder="Cari nama, bank, atau nominal"
          placeholderTextColor={colors.grey}
          onChangeText={val => onChange(val)}
          style={styles.input}
        />
      </View>
      <Button icon="expand-with-text" title={titleButton} onPress={onPress} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '8%',
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 20,
    height: 20,
  },
  input: {
    height: 40,
    color: colors.black
  }
});
