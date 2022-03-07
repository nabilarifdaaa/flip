import {StyleSheet, StatusBar, Platform, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

const Statusbar = () => {
  const STATUS_BAR_HEIGHT =
    Platform.OS === 'ios' ? 25 : StatusBar.currentHeight;

  return (
    <View
      style={{
        width: '100%',
        height: STATUS_BAR_HEIGHT,
        backgroundColor: colors.primary,
      }}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={colors.primary}
        translucent={true}
      />
    </View>
  );
};
export default Statusbar;

const styles = StyleSheet.create({});
