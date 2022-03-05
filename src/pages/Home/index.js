import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {ItemList} from '../../components';
import axios from 'axios';
import { colors } from '../../utils';

const Home = ({navigation}) => {
  const [list, setList] = useState([]);

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
      <ScrollView>
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
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.bg,
  },
});
