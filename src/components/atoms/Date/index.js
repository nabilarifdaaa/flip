import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { colors } from '../../../utils';

const DateComponent = ({dateProp}) => {

  const reformatDate = date => {
    let splitTime = date.split(' ');
    let splitDate = splitTime[0].split('-');
    let month = new Array();
    month['01'] = 'Januari';
    month['02'] = 'Februari';
    month['03'] = 'Maret';
    month['04'] = 'April';
    month['05'] = 'Mei';
    month['06'] = 'Juni';
    month['07'] = 'Juli';
    month['08'] = 'Agustus';
    month['09'] = 'September';
    month['10'] = 'Oktober';
    month['11'] = 'November';
    month['12'] = 'Desember';
    let newDate =
      splitDate[2].replace(/^0+/, '') +
      ' ' +
      month[splitDate[1]] +
      ' ' +
      splitDate[0];
    return newDate
  };

  return (
    <View>
      <Text style={styles.txt}>{reformatDate(dateProp)}</Text>
    </View>
  );
};

export default DateComponent;

const styles = StyleSheet.create({
  txt: {
    color: colors.black
  }
});
