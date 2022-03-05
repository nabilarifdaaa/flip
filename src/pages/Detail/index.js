import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, TextContent, Gap, Link, Button} from '../../components';
import {colors} from '../../utils';

const Detail = ({navigation}) => {
  const [textLink, setTextLink] = useState('Lihat');
  const [show, setShow] = useState(false);

  const handleMore = () => {
    setShow(!show);
    if (!show) {
      setTextLink('Tutup');
    }else{
      setTextLink('Lihat');
    }
    
  };
  
  return (
    <View style={styles.container}>
      <Header title="Detail" onPress={() => navigation.goBack()} />
      <Gap height={20} />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.titleText}>ID TRANSAKSI: </Text>
          <Text style={styles.titleText}>id transc</Text>
          <Gap width={10} />
          <Button icon="copy" />
        </View>
      </View>
      <Gap height={5} />
      <View style={styles.content}>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <Text style={styles.titleText}>DETAIL TRANSAKSI </Text>
          <Link text={textLink} onPress={() => handleMore()} />
        </View>
      </View>
      <Gap height={5} />
      {show && (
        <View style={styles.content}>
          <TextContent type="bank" sender="sender" to="to" />
          <Gap height={10} />
          <View style={styles.row}>
            <TextContent
              title="Name"
              desc="no rek"
              style={styles.halfContent}
            />
            <TextContent
              title="Nominal"
              desc="amount"
              style={styles.halfContent}
            />
          </View>
          <Gap height={20} />
          <View style={styles.row}>
            <TextContent
              title="Berita Transfer"
              desc="no rek"
              style={styles.halfContent}
            />
            <TextContent
              title="Kode Unik"
              desc="amount"
              style={styles.halfContent}
            />
          </View>
          <Gap height={20} />
          <TextContent
            title="Waktu Dibuat"
            desc="amount"
            style={styles.halfContent}
          />
        </View>
      )}
    </View>
  );
};
export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  row: {
    flexDirection: 'row',
  },
  halfContent: {
    width: '50%',
  },
  content: {
    padding: '5%',
    backgroundColor: colors.white,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
