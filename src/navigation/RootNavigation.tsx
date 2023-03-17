import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import IntroScreen from '../screens/IntroScreen';
import EmotionResultsScreen from '../screens/EmotionResultsScreen';
import ScanFaceScreen from '../screens/ScanFaceScreen';

const Stack = createNativeStackNavigator();
export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScanFace">
        <Stack.Screen
          name="MainScreen"
          options={{headerShown: true}}
          component={MainScreen}
        />
        <Stack.Screen
          name="IntroScreen"
          options={{headerShown: false}}
          component={IntroScreen}
        />
        <Stack.Screen
          name="ScanFace"
          options={{headerShown: false}}
          component={ScanFaceScreen}
        />
        <Stack.Screen
          name="EmotionResults"
          options={{headerShown: false}}
          component={EmotionResultsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
