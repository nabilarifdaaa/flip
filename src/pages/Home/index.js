import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {Header, ItemList, Search, Gap, Modal, Statusbar} from '../../components';
import {colors} from '../../utils';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {
  listTransaction,
  searchTransaction,
  allList,
  filterTransaction,
} from '../../redux/actions/transactionAction';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {transaction} = useSelector(state => state);
  const [text, setText] = useState('URUTKAN');
  const [filter, setFilter] = useState([
    {
      id: 1,
      type: 'URUTKAN',
      slug: 'sort',
      checked: false,
    },
    {
      id: 2,
      type: 'Nama A-Z',
      slug: 'sort_a_z',
      checked: false,
    },
    {
      id: 3,
      type: 'Nama Z-A',
      slug: 'sort_z_a',
      checked: false,
    },
    {
      id: 4,
      type: 'Tanggal Terbaru',
      slug: 'newest_date',
      checked: false,
    },
    {
      id: 5,
      type: 'Tanggal Terlama',
      slug: 'oldest_date',
      checked: false,
    },
  ]);
  const [showFilter, setShowFilter] = useState(false);

  const getTransaction = () => {
    const url = 'https://nextar.flip.id/frontend-test';

    axios
      .get(url)
      .then(response => {
        dispatch(listTransaction({...response.data}));
        dispatch(allList({...response.data}));
      })
      .catch(error => {
        console.log('error catch', error);
      });
  };

  useEffect(() => {
    getTransaction();
  }, []);

  const selectFilter = id => {
    let updatedList = filter.map(item => {
      if (item.id !== id)
        return {
          ...item,
          checked: false,
        };
      if (item.id == id) {
        setText(item.type);
        dispatch(filterTransaction(item.slug));
        return {...item, checked: !item.checked};
      }
      return item;
    });
    setFilter(updatedList);
    setShowFilter(false);
  };

  onChange = val => {
    if (val) {
      const valLowCase = val.toLowerCase();
      dispatch(searchTransaction(valLowCase));
    } else {
      dispatch(listTransaction({...transaction.allList}));
    }
  };

  return (
    <View style={styles.container}>
      <Statusbar />
      <Header title="List Transaksi" />
      <View style={styles.content}>
        <Search
          titleButton={text}
          onPress={() => setShowFilter(true)}
          onChange={onChange}
        />
        <Gap height={20} />
        <ScrollView style={{height: '85%'}}>
          {Object.keys(transaction.listTransaction).map(key => {
            return (
              <View style={{marginBottom: 15}} key={key}>
                <ItemList
                  sender_bank={transaction.listTransaction[key].sender_bank}
                  beneficiary_bank={
                    transaction.listTransaction[key].beneficiary_bank
                  }
                  beneficiary_name={
                    transaction.listTransaction[key].beneficiary_name
                  }
                  amount={transaction.listTransaction[key].amount}
                  created_at={transaction.listTransaction[key].created_at}
                  status={transaction.listTransaction[key].status}
                  onPress={() => navigation.navigate('Detail', {key})}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
      <Modal
        data={filter}
        isVisible={showFilter}
        onCloseModal={() => setShowFilter(false)}
        onPressItem={i => selectFilter(i)}
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
    paddingBottom: '10%',
  },
});
