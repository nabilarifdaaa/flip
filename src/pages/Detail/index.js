import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import {
  Header,
  TextContent,
  Gap,
  Link,
  Button,
  Currency,
  Date,
  Statusbar,
} from '../../components';
import {colors} from '../../utils';
import {useSelector} from 'react-redux';
import Clipboard from '@react-native-clipboard/clipboard';

const Detail = ({navigation, route}) => {
  const [textLink, setTextLink] = useState('Lihat');
  const {transaction} = useSelector(state => state);
  const [show, setShow] = useState(false);
  const item = route.params.key;

  const handleMore = () => {
    setShow(!show);
    if (!show) {
      setTextLink('Tutup');
    } else {
      setTextLink('Lihat');
    }
  };

  const copyToClipboard = text => {
    Clipboard.setString(text);
    Alert.alert('Copied Successfully')
  };

  return (
    <View style={styles.container}>
      <Statusbar />
      <Header title="Detail" onPress={() => navigation.goBack()} hasBack />
      <Gap height={20} />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.titleContent}>ID TRANSAKSI: {item.id}</Text>
          <Gap width={10} />
          <Button icon="copy" onPress={() => copyToClipboard(item.id)} />
        </View>
      </View>
      <Gap height={5} />
      <View style={styles.content}>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <Text style={styles.titleContent}>DETAIL TRANSAKSI </Text>
          <Link text={textLink} onPress={() => handleMore()} />
        </View>
      </View>
      <Gap height={5} />
      {show && (
        <View style={styles.content}>
          <TextContent
            type="bank"
            sender={item.sender_bank}
            to={item.beneficiary_bank}
          />
          <Gap height={10} />
          <View style={styles.row}>
            <TextContent
              title={item.beneficiary_name}
              desc={item.account_number}
              style={styles.halfContent}
            />
            <View>
              <Text style={styles.title}>Nominal</Text>
              <Currency amount={item.amount} />
            </View>
          </View>
          <Gap height={20} />
          <View style={styles.row}>
            <TextContent
              title="Berita Transfer"
              desc={item.remark}
              style={styles.halfContent}
            />
            <TextContent
              title="Kode Unik"
              desc={item.unique_code}
              style={styles.halfContent}
            />
          </View>
          <Gap height={20} />
          <View>
            <Text style={styles.title}>Waktu Dibuat</Text>
            <Date dateProp={item.created_at} />
          </View>
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
  titleContent: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: 14,
    color: colors.black,
  },
});
