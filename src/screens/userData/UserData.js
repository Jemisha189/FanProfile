import React, {useContext, useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import CommonStyle from '../../CommonStyle';
import CustomInput from '../../components/customInput/CustomInput';
import CustomHeader from '../../components/header/CustomHeader';
import {SAVE} from '../../constant/ButtonLabel';
import {COLORS} from '../../constant/Colors';
import {USER_DATA} from '../../constant/HeaderTitle';
import {ICONS} from '../../constant/Images';
import {EMAIL, NAME} from '../../constant/InputLabel';
import {ENTER_EMAIL, ENTER_NAME} from '../../constant/Placeholder';
import {SCREENS} from '../../constant/ScreensName';
import {ValidationSchema} from '../../constant/ValidationSchema';
import DataContext from '../../context/DataContext';
import createStyles from './Styles';

const UserData = ({navigation}) => {
  const commonStyles = CommonStyle();
  const styles = createStyles();
  const {name, setName, email, setEmail} = useContext(DataContext);
  const [error, setError] = useState({});

  const handleSaveData = () => {
    const userData = {
      name: name,
      email: email,
    };
    const validation = ValidationSchema(userData, 0);
    setError(validation);
    if (Object.keys(validation).length === 0) {
      navigation.replace(SCREENS.driverData);
    }
  };
  return (
    <View style={styles.container}>
      {/* header */}
      <SafeAreaView style={styles.safeAreaView} />
      <View style={styles.safeAreaView}>
        <View style={{...commonStyles.header}}>
          <CustomHeader title={USER_DATA} titleTextStyle={styles.headerText} />
        </View>
      </View>
      <View style={styles.mainContainer}>
        <CustomInput
          label={NAME}
          labelStyle={styles.labelStyle}
          placeholder={ENTER_NAME}
          placeholderTextColor={COLORS.grey}
          firstIcon={ICONS.name}
          value={name}
          onChangeText={txt => setName(txt)}
          error={error.name}
        />
        <CustomInput
          label={EMAIL}
          labelStyle={styles.labelStyle}
          placeholder={ENTER_EMAIL}
          placeholderTextColor={COLORS.grey}
          firstIcon={ICONS.email}
          keyboardType={'email-address'}
          value={email}
          onChangeText={txt => setEmail(txt)}
          error={error.email}
        />
        <TouchableOpacity onPress={handleSaveData} style={styles.saveBtn}>
          <Text style={styles.saveTxt}>{SAVE}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserData;
