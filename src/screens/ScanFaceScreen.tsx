import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ViewWrapper from '../components/layouts/ViewWrapper/ViewWrapper.component';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '300',
    marginVertical: 8,
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
    textAlign: 'center',
    justifyContent: 'center',
  },
  resultInText: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  startNewScanBox: {
    position: 'absolute',
    borderWidth: 1,
    bottom: 15,
    width: '60%',
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
  savedScanContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  actionButton: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'gray',
    backgroundColor: '#ffffff70',
  },
});

const ScanFaceScreen = () => {
  return (
    <ViewWrapper>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>New San</Text>
        <View style={styles.scanContainer}>
          <View style={styles.scannerBox}>
            <Text style={styles.resultInText}>
              Scan your partner face into here
            </Text>
          </View>
          <View style={styles.startNewScanBox}>
            <Text style={styles.startNewScan}>Start new scan 📷</Text>
          </View>
        </View>
        <Text style={styles.title}>Saved scans</Text>
        <View style={styles.savedScanContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Text>Face 1 was sad</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text>Face 2 was happy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ViewWrapper>
  );
};

export default ScanFaceScreen;
