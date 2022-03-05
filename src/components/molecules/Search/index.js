import React from 'react';
import {StyleSheet, TextInput, View, Image} from 'react-native';
import {colors} from '../../../utils';
import {Button} from '../../atoms';
import {SearchIcon} from '../../../assets';

const Search = ({titleButton, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={SearchIcon} style={styles.icon} />
        <TextInput
          placeholder="Cari nama, bank, atau nominal"
          placeholderTextColor={colors.grey}
        />
      </View>
      <Button icon="expand-with-text" title={titleButton} onPress={onPress}/>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '5%',
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
  },
});
