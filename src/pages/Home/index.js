import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {Header, ItemList, Search, Gap, Modal} from '../../components';
import axios from 'axios';
import {colors} from '../../utils';

const Home = ({navigation}) => {
  const [list, setList] = useState([]);
  const [text, setText] = useState('URUTKAN');
  const [filter, setFilter] = useState([
    {
      id: 1,
      type: 'URUTKAN',
    },
    {
      id: 2,
      type: 'Nama A-Z',
    },
    {
      id: 3,
      type: 'Nama Z-A',
    },
    {
      id: 4,
      type: 'Tanggal Terbaru',
    },
    {
      id: 5,
      type: 'Tanggal Terlama',
    },
  ]);
  const [showFilter, setShowFilter] = useState(false);
  const [check, setCheck] = useState(false);

  const getTransaction = () => {
    const url = 'https://nextar.flip.id/frontend-test';

    axios
      .get(url)
      .then(response => {
        setList(response.data);
      })
      .catch(error => {
        console.log('error catch', error);
      });
  };

  useEffect(() => {
    getTransaction();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="List Transaksi" />
      <View style={styles.content}>
        <Search titleButton={text} onPress={() => setShowFilter(true)} />
        <Gap height={20} />
        <ScrollView style={{height: '85%'}}>
          {Object.entries(list).map(key => {
            return (
              <View style={{marginBottom: 15}} key={key}>
                <ItemList
                  sender_bank={key[1].sender_bank}
                  beneficiary_bank={key[1].beneficiary_bank}
                  beneficiary_name={key[1].beneficiary_name}
                  amount={key[1].amount}
                  completed_at={key[1].completed_at}
                  status={key[1].status}
                  onPress={() => navigation.navigate('Detail')}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
      <Modal
        data={filter}
        isVisible={showFilter}
        checked={check}
        onCloseModal={() => setShowFilter(false)}
        onPressItem={() => setCheck(!check)}
      />
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  content: {
    padding: 20,
  },
});
