import * as React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  useColorScheme,
  StatusBar,
  View,
  ImageBackground,
} from 'react-native';
import Colors from '../../../styles/colors';
import styles from './ViewWrapper.style';

const ViewWrapper: React.FC<PropsWithChildren> = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.BLACK : Colors.WHITE,
  };
  return (
    <ImageBackground
      resizeMode="cover"
      style={[styles.childWrapper]}
      source={require('../../../assets/blur.png')}>
      <SafeAreaView style={[styles.wrapper]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />

        <View style={[styles.childWrapper]}>{children}</View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ViewWrapper;
