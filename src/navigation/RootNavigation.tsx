import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
const Stack = createNativeStackNavigator();
export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeContainer">
        <Stack.Screen
          name="MainScreen"
          options={{headerShown: true}}
          component={MainScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
