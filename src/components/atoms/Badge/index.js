import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { colors } from '../../../utils';

const Badge = ({type}) => {
  const [title, setTitle] = useState('')
  useEffect(()=>{
    if(type==='SUCCESS'){
      setTitle('Berhasil')
    }else{
      setTitle('Pengecekan')
    }
  },[type])
  
  return (
    <View style={styles.container(type)}>
      <Text style={styles.text(type)}>{title}</Text>
    </View>
  );
};
export default Badge;

const styles = StyleSheet.create({
  container: type => ({
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 5,
    borderWidth: type==='PENDING'? 1 : 0,
    borderColor: type==='PENDING'? colors.primary : '',
    backgroundColor: type==='SUCCESS' ? colors.green : ''
  }),
  text: type =>({
    fontWeight: 'bold',
    fontSize: 11,
    color: type==='SUCCESS'? colors.white: '#000'
  })
});
