import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ViewWrapper from '../components/layouts/ViewWrapper/ViewWrapper.component';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    marginVertical: 12,
  },
  scanContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: '#ffffff70',
  },
  scannerBox: {
    padding: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startNewScanBox: {
    position: 'absolute',
    borderWidth: 1,
    bottom: 25,
    width: '60%',
    minWidth: 220,
    alignSelf: 'center',
    height: 50,
    borderRadius: 30,
    paddingTop: 15,
    borderColor: 'gray',
    backgroundColor: 'black',
  },
  startNewScan: {
    textAlign: 'center',
    fontSize: 14,
    color: 'white',
    fontWeight: '600',
  },
});

const ScanFaceScreen = () => {
  return (
    <ViewWrapper>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>New Scan</Text>
        <View style={styles.scanContainer}>
          <View style={styles.scannerBox}>
            <Image source={require('../assets/scanner-icon.png')} />
          </View>
          <View style={styles.startNewScanBox}>
            <Text style={styles.startNewScan}>Start new scan 📷</Text>
          </View>
        </View>
      </View>
    </ViewWrapper>
  );
};

export default ScanFaceScreen;
