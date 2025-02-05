import {View, Text} from 'react-native';
import React from 'react';
import createStyles from './Styles';

export default function DetailsComponent({title, data}) {
  const styles = createStyles();
  return (
    <View style={styles.textView}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.text}>{data}</Text>
    </View>
  );
}
