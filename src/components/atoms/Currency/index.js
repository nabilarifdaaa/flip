import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import { colors } from '../../../utils';

const Currency = ({amount}) => {

  const reformatCurrency = (amount) => {
    let curr = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    return curr
  };

  return (
    <View>
      <Text style={styles.txt}>Rp {reformatCurrency(amount)}</Text>
    </View>
  );
};
export default Currency;

const styles = StyleSheet.create({
  txt: {
    color: colors.black
  }
});
