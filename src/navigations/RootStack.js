import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SystemBars} from 'react-native-edge-to-edge';
import {stackData} from '../constant/json/RouterData';
import {SCREENS} from '../constant/ScreensName';
import DriverData from '../screens/driverData/DriverData';
import DriverDetails from '../screens/driverDetails.js/DriverDetails';
import UserData from '../screens/userData/UserData';
const Stack = createNativeStackNavigator();

function RootStack() {
  const screenComponents = {
    UserData,
    DriverData,
    DriverDetails,
  };
  return (
    <>
      <SystemBars style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={SCREENS.userData}>
          {stackData.map(item => {
            const ScreenComponent = screenComponents[item.screenName];
            // Ensure the ScreenComponent is defined
            if (!ScreenComponent) {
              return null;
            }
            return (
              <Stack.Screen
                key={item.screenID}
                name={item.screenName}
                component={ScreenComponent}
                options={{
                  headerShown: false,
                }}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default RootStack;
