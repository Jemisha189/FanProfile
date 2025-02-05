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
    driverDetailView: {
      backgroundColor: COLORS.white,
      borderRadius: RFValue(8),
      justifyContent: 'space-between',
      paddingHorizontal: RFValue(30),
      paddingVertical: RFValue(10),
      marginBottom: RFValue(15),
      ...commonStyles.lightShadowColor,
    },
    textHeader: {
      color: COLORS.black,
      ...commonStyles.h4_Bold,
      marginBottom: RFValue(10),
      textAlign: 'center',
    },
    imageView: {
      height: RFValue(140),
      width: RFValue(125),
      alignSelf: 'center',
      marginVertical: RFValue(5),
    },
    image: {
      height: RFValue(140),
      width: RFValue(125),
      borderTopLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderTopRightRadius: RFValue(20),
      borderBottomLeftRadius: RFValue(20),
      resizeMode: 'cover',
    },
    pointView: {
      height: RFValue(35),
      width: RFValue(35),
      borderTopLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderTopRightRadius: RFValue(8),
      borderBottomLeftRadius: RFValue(8),
      backgroundColor: COLORS.lightTheme,
      position: 'absolute',
      right: 0,
      bottom: 0,
      ...commonStyles.centerStyle,
    },
    pointText: {
      color: COLORS.black,
      ...commonStyles.h3_SemiBold,
    },
    mainContainer: {
      ...commonStyles.globalMarginHorizontal,
      marginTop: RFValue(15),
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
