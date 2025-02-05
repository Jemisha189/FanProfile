import {StyleSheet} from 'react-native';
import CommonStyle from '../../CommonStyle';
import {COLORS} from '../../constant/Colors';
import {RFValue} from 'react-native-responsive-fontsize';

const createStyles = () => {
  const commonStyles = CommonStyle();
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    safeAreaView: {
      backgroundColor: COLORS.theme,
    },
    mainContainer: {
      ...commonStyles.globalMarginHorizontal,
      marginTop: RFValue(10),
    },
    headerText: {
      color: COLORS.black,
      ...commonStyles.h3_SemiBold,
      alignSelf: 'center',
    },
    labelStyle: {marginBottom: RFValue(10), ...commonStyles.h5_Medium},
    saveBtn: {
      ...commonStyles.centerStyle,
      backgroundColor: COLORS.theme,
      height: RFValue(38),
      width: '50%',
      borderRadius: RFValue(8),
      paddingHorizontal: RFValue(10),
      alignSelf: 'center',
      marginTop: RFValue(10),
    },
    saveTxt: {
      ...commonStyles.h4_Medium,
      color: COLORS.black,
    },
  });
};

export default createStyles;
