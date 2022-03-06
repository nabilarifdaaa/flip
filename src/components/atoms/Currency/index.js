import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const Currency = ({amount}) => {
    
  const [currency, setCurrency] = useState('');

  const reformatCurrency = (amount) => {
    let curr = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount);
    let reformatCurr = curr.replace(',00', '');
    setCurrency(reformatCurr);
  };

  useEffect(() => {
    reformatCurrency(amount)
  },[amount]);

  return (
    <View>
      <Text>{currency}</Text>
    </View>
  );
};
export default Currency;

const styles = StyleSheet.create({});
