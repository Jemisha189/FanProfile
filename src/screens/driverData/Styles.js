import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import CommonStyle from '../../CommonStyle';
import {COLORS} from '../../constant/Colors';

const createStyles = () => {
  const commonStyles = CommonStyle();
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    safeAreaView: {
      backgroundColor: COLORS.theme,
    },
    contentContainerStyle: {
      flex: 1,
    },
    headerText: {
      color: COLORS.black,
      ...commonStyles.h3_SemiBold,
      alignSelf: 'center',
    },
    loaderView: {
      flex: 1,
      ...commonStyles.centerStyle,
      marginBottom: RFValue(50),
    },
    dataContainer: {
      backgroundColor: COLORS.white,
      borderRadius: RFValue(8),
      justifyContent: 'space-between',
      paddingHorizontal: RFValue(10),
      paddingVertical: RFValue(10),
      marginBottom: RFValue(15),
      ...commonStyles.lightShadowColor,
      marginHorizontal: RFValue(20),
    },

    noDataTitle: {
      marginTop: RFValue(30),
      ...commonStyles.h3_Bold,
    },
    messageStyle: {
      marginHorizontal: RFValue(30),
    },
    containerStyle: {
      marginBottom: RFValue(50),
    },
  });
};
export default createStyles;
