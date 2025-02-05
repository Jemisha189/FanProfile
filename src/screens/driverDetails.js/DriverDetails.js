import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator, Image, SafeAreaView, Text, View} from 'react-native';
import CommonStyle from '../../CommonStyle';
import CustomHeader from '../../components/header/CustomHeader';
import {COLORS} from '../../constant/Colors';
import {ICONS, IMAGES} from '../../constant/Images';
import DataContext from '../../context/DataContext';
import {getDriverDetails} from '../../service/DriverDataService';
import createStyles from './Styles';
import {DRIVER_DATA, DRIVER_DETAILS} from '../../constant/HeaderTitle';
import SpinnerLoader from '../../components/spinnerLoader/SpinnerLoader';
import {
  BIRTH_DATE,
  EMAIL,
  FAMILY_NAME,
  NAME,
  NATIONALITY,
  USER_DETAILS,
} from '../../constant/TitleText';
import DetailsComponent from '../../components/deatilsComponent/DetailsComponent';

export default function DriverDetails({route, navigation}) {
  const {name, email} = useContext(DataContext);
  const {driverID} = route?.params;
  const [driverDetails, setDriverDetails] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const commonStyles = CommonStyle();
  const styles = createStyles();

  useEffect(() => {
    fetchDriverData();
  }, []);

  const fetchDriverData = async () => {
    setIsLoading(true);
    //get Data From API
    const driver = await getDriverDetails();
    const driverData =
      driver?.data?.MRData?.StandingsTable?.StandingsLists[0]?.DriverStandings;
    const selectedDriver = driverData.find(
      item => item?.Driver?.permanentNumber === driverID,
    );
    if (driver?.status === 200) {
      setDriverDetails(selectedDriver);
    }
    setIsLoading(false);
  };

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView} />
      <View style={styles.safeAreaView}>
        <View style={{...commonStyles.header}}>
          <CustomHeader
            title={DRIVER_DETAILS}
            titleTextStyle={styles.headerText}
            firstIcon={ICONS.backIcon}
            backPress={onBackPress}
          />
        </View>
      </View>
      {isLoading ? (
        <View style={styles.loaderView}>
          <SpinnerLoader
            style={styles.loader}
            size={'large'}
            color={COLORS.theme}
          />
        </View>
      ) : (
        <View style={styles.mainContainer}>
          <View>
            <View style={styles.driverDetailView}>
              <Text style={styles.textHeader}>{DRIVER_DETAILS}</Text>
              <View style={styles.imageView}>
                <Image source={IMAGES.driver} style={styles.image} />
                <View style={styles.pointView}>
                  <Text style={styles.pointText}>{driverDetails?.points}</Text>
                </View>
              </View>
              <DetailsComponent
                title={NAME}
                data={driverDetails?.Driver?.givenName}
              />
              <DetailsComponent
                title={NATIONALITY}
                data={driverDetails?.Driver?.nationality}
              />
              <DetailsComponent
                title={FAMILY_NAME}
                data={driverDetails?.Driver?.familyName}
              />
              <DetailsComponent
                title={BIRTH_DATE}
                data={driverDetails?.Driver?.dateOfBirth}
              />
            </View>
          </View>
          <View style={styles.driverDetailView}>
            <Text style={styles.textHeader}>{USER_DETAILS}</Text>
            <DetailsComponent title={NAME} data={name} />
            <DetailsComponent title={EMAIL} data={email} />
          </View>
        </View>
      )}
    </View>
  );
}
