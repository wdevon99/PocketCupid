import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import ViewWrapper from '../components/layouts/ViewWrapper/ViewWrapper.component';
import ImagePicker from 'react-native-image-crop-picker';

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
    borderWidth: 1,
    minWidth: 220,
    alignSelf: 'center',
    height: 50,
    borderRadius: 30,
    borderColor: 'gray',
    backgroundColor: 'black',
    justifyContent: 'center',
    marginBottom: 20,
  },
  startNewScan: {
    textAlign: 'center',
    fontSize: 14,
    color: 'white',
    fontWeight: '600',
  },
});

const ScanFaceScreen = () => {
  const [photo, setPhoto] = React.useState(null);

  const handleOnCaptureInit = () => {
    Alert.alert(
      'Select Image Source',
      'Choose the source of the image',
      [
        {
          text: 'Gallery',
          onPress: () => handlePhotoSelect(),
        },
        {
          text: 'Camera',
          onPress: () => handleOnCameraCapture(),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };

  const handleOnCameraCapture = async () => {
    const image = await ImagePicker.openCamera({
      includeBase64: true,
      cropping: true,
      height: 1000,
      width: 1000,
    });
    console.log('Image', image);
    setPhoto(image);
  };

  const handlePhotoSelect = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      includeBase64: true,
    })
      .then(image => {
        // azureCognitiveService.getEmotionData(image);
        setPhoto(image);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleScanPhoto = () => {
    // to send the api
  };

  console.log('Image Display', photo?.path);
  return (
    <ViewWrapper>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>New Scan</Text>
        <View style={styles.scanContainer}>
          <View style={styles.scannerBox}>
            <Image
              style={{width: 300, height: 300}}
              source={
                photo?.data
                  ? {uri: `data:${photo.mime};base64,${photo.data}`}
                  : require('../assets/scanner-icon.png')
              }
            />
          </View>
          {!photo?.data ? (
            <TouchableOpacity onPress={handleOnCaptureInit}>
              <View style={styles.startNewScanBox}>
                <Text style={styles.startNewScan}>Take a photo 📷</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleScanPhoto}>
              <View style={styles.startNewScanBox}>
                <Text style={styles.startNewScan}>Start Scan</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ViewWrapper>
  );
};

export default ScanFaceScreen;
