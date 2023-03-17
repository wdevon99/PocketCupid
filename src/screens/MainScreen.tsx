import * as React from 'react';
import {Text, Button, View} from 'react-native';
import ViewWrapper from '../components/layouts/ViewWrapper/ViewWrapper.component';
import ImagePicker from 'react-native-image-crop-picker';
import azureCognitiveService from '../services/azureCognitiveService';
const MainScreen = () => {
  const handlePhotoSelect = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      includeBase64: true,
    })
      .then(image => {
        azureCognitiveService.getEmotionData(image);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <ViewWrapper>
      <View>
        <Text>Hi</Text>
        <Button title="Open Image" onPress={handlePhotoSelect} />
      </View>
    </ViewWrapper>
  );
};

export default MainScreen;
