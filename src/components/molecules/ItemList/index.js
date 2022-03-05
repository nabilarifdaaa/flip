import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import {Badge, Gap} from '../../atoms';
import TextContent from '../TextContent';
import {Arrow, Dot} from '../../../assets';
import {colors} from '../../../utils';

const ItemList = ({
  sender_bank,
  beneficiary_bank,
  beneficiary_name,
  amount,
  completed_at,
  status,
  onPress,
}) => {
  const [date, setDate] = useState('');
  const [currency, setCurrency] = useState('');

  const reformatData = (date, amount) => {
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
    let newDate = splitDate[2] + ' ' + month[splitDate[1]] + ' ' + splitDate[0];
    setDate(newDate);

    let curr = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount);
    setCurrency(curr);
  };

  useEffect(() => {
    reformatData(completed_at, amount);
  }, [completed_at, amount]);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container(status)}>
      <View>
        <TextContent type='bank' sender={sender_bank} to={beneficiary_bank}/>
        <Gap height={3}/>
        <Text style={styles.nameTxt}>{beneficiary_name}</Text>
        <Gap height={3}/>
        <View style={styles.row}>
          <Text>{currency}</Text>
          <Image source={Dot} style={styles.iconDot} />
          <Text>{date}</Text>
        </View>
      </View>
      <Badge type={status} />
    </TouchableOpacity>
  );
};
export default ItemList;

const styles = StyleSheet.create({
  container: status => ({
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 7,
    borderLeftWidth: 7,
    borderLeftColor: status === 'SUCCESS' ? colors.green : colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  row: {
    flexDirection: 'row',
  },
  iconDot: {
    width: 10,
    height: 10,
    margin: '1%',
  },
  nameTxt: {
    fontSize: 13,
    textTransform: 'uppercase',
  },
});
