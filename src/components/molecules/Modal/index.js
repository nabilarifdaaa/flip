import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';
import {Button, Gap} from '../../atoms';
import { Checked, Unchecked } from '../../../assets';

const Modals = ({isVisible, data, onCloseModal, onPressItem, index}) => {
  // const [inde]
  const RadioButton = ({checked}) => {
    return <Image source={checked ? Checked : Unchecked} style={{width: 25, height: 25}} />;
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
                    activeOpacity={1}
                    onPress={() => onPressItem(item.id)}>
                    <RadioButton checked={item.checked}/>
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
