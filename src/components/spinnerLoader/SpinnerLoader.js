import React, {useContext} from 'react';
import {ActivityIndicator, View} from 'react-native';
import DataContext from '../../context/DataContext';
import createStyles from './Styles';

const SpinnerLoader = ({size = 'large', color, style}) => {
  const {COLORS} = useContext(DataContext);
  const styles = createStyles();
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={size} color={color || COLORS.theme} />
    </View>
  );
};

export default SpinnerLoader;
