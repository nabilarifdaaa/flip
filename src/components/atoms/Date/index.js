import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DateComponent = ({dateProp}) => {
  //   console.log('func ', date)

  const reformatDate = date => {
    let formatDate = new Date(date);
    // let newDate = formatDate.getDate();
    // let month = formatDate.getMonth();
    // let year = formatDate.getYear();

    // const months = [
    //   'Januari',
    //   'Februari',
    //   'Maret',
    //   'April',
    //   'Mei',
    //   'Juni',
    //   'Juli',
    //   'Agustus',
    //   'September',
    //   'Oktober',
    //   'November',
    //   'Desember',
    // ];

    // let newMonth = months[month];
    // let formatted = newDate + ' ' + newMonth + ' ' + year;
    // setDateNew(formatted);
    // return formatted;
  };

  // //   useEffect(() => {
  // //     reformatDate(date)
  // //   },[]);

  return (
    <View>
      {/* <Text>{reformatDate(dateProp)}</Text> */}
    </View>
  );
};

export default DateComponent;

const styles = StyleSheet.create({});
