import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import {Badge, Currency, Gap, Date} from '../../atoms';
import TextContent from '../TextContent';
import {Dot} from '../../../assets';
import {colors} from '../../../utils';

const ItemList = ({
  sender_bank,
  beneficiary_bank,
  beneficiary_name,
  amount,
  created_at,
  status,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container(status)}>
      <View>
        <TextContent type="bank" sender={sender_bank} to={beneficiary_bank} />
        <Gap height={3} />
        <Text style={styles.nameTxt}>{beneficiary_name}</Text>
        <Gap height={3} />
        <View style={styles.row}>
          <Currency amount={amount} />
          <Image source={Dot} style={styles.iconDot} />
          <Date dateProp={created_at}/>
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
    margin: '2%',
  },
  nameTxt: {
    fontSize: 13,
    textTransform: 'uppercase',
  },
});
