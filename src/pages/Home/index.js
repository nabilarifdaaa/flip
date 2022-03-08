import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {Header, ItemList, Search, Gap, Modal, Statusbar} from '../../components';
import {colors} from '../../utils';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {
  listTransaction,
  filterTransaction,
} from '../../redux/actions/transactionAction';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {transaction} = useSelector(state => state);
  const [list, setList] = useState({})
  const [search, setSearch] = useState('')
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
        setList({...response.data})
        dispatch(listTransaction({...response.data}));
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
        if(item.slug === 'sort'){ //jika pilih 'urutkan' maka kembali ke state list awal sebelum di sort
          dispatch(listTransaction({...list}))
        }else{ 
          dispatch(filterTransaction(item.slug));
        }
        return {...item, checked: !item.checked};
      }
      return item;
    });
    setFilter(updatedList);
    setShowFilter(false);
  };

  onChange = val => {
    setSearch(val.toLowerCase())
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
          {Object.values(transaction.listTransaction).filter(key => {
            return (
              key.beneficiary_name
                .toLowerCase()
                .includes(search) ||
              key.beneficiary_bank
                .toLowerCase()
                .includes(search) ||
              key.sender_bank
                .toLowerCase()
                .includes(search) ||
              `${key.amount}`.includes(search)
            );
          }).map(key => {
            return (
              <View style={{marginBottom: 15}} key={key.id}>
                <ItemList
                  sender_bank={key.sender_bank}
                  beneficiary_bank={
                    key.beneficiary_bank
                  }
                  beneficiary_name={
                    key.beneficiary_name
                  }
                  amount={key.amount}
                  created_at={key.created_at}
                  status={key.status}
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
    paddingBottom: '20%',
  },
});
