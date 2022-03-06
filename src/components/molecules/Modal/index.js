import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';
import {Button, Gap} from '../../atoms';

const Modals = ({isVisible, data, onCloseModal, onPressItem, checked}) => {
  const RadioButton = () => {
    if (checked) {
      return <Button icon="checked" size={25} onPress={onPressItem}/>;
    }
    return <Button icon="unchecked" size={25} onPress={onPressItem}/>;
  };
  
  return (
    <View>
      <Modal
        visible={isVisible}
        transparent={true}
        animationType={'fade'}
        onRequestClose={onCloseModal}>
        <TouchableOpacity
          style={styles.containerBg}
          activeOpacity={1}
          onPressOut={onCloseModal}>
          <TouchableWithoutFeedback>
            <View style={styles.containerContent}>
              {data.map((item, ind) => {
                return (
                  <TouchableOpacity
                    key={ind}
                    style={styles.itemList}
                    onPress={onPressItem}>
                    <RadioButton/>
                    <Gap width={10} />
                    <Text style={styles.itemText}>{item.type}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
export default Modals;

const styles = StyleSheet.create({
  containerBg: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '10%',
    backgroundColor: colors.opacityBg,
  },
  containerContent: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 25,
    paddingTop: 45,
  },
  itemList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  itemText: {
    fontSize: 14,
    fontWeight: '500',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
