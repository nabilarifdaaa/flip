import React, {useEffect} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {Logo} from '../../assets/images'
import { colors } from '../../utils/Colors';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.icon}/>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 150,
        height: 150
    }
});
