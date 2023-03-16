import axios from 'axios';
// import fs from 'fs';
import ImagePicker from 'react-native-image-crop-picker';

const getImage = async image => {
  const photo = {
    // uri: image.sourceURL,
    url: image,
    type: 'image/png',
    // name: `photo-${index}.jpg`,
  };

  const form = new FormData();
  form.append('File', photo);

  return form;
};
const getEmotionData = image => {
  console.log('hittt');
  const AZURE_END_POINT =
    'https://unihackfacedetectapi.cognitiveservices.azure.com/';
  const AZURE_API_KEY = 'e8c01125502d4563b90ecdd6a648b5a8';
  const headers = {
    'Content-Type': 'application/png',
    'Ocp-Apim-Subscription-Key': AZURE_API_KEY,
  };

  // const url = `${AZURE_END_POINT}/face/v1.0/detect?returnFaceLandmarks-true&returnFaceAttributes=headPose,glasses,occlusion,accessories&recognitionModel=recognition_03&faceldTimeToLive=60`;
  // const fileStream = getImage(image);
  // console.log('xfileStream', fileStream);
  // axios
  //   .post(url, fileStream, {headers: headers})
  //   .then(rep => {
  //     console.log('rep', rep);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });

  const faceAttributes =
    'age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise';
  const detectionModel = 'detection_01';
  const faceApiForUrl = axios.create({
    baseURL: AZURE_END_POINT,
    timeout: 50000,
    headers: {
      'Ocp-Apim-Subscription-Key': AZURE_API_KEY,
      'Content-Type': 'application/json',
    },
    params: {
      returnFaceId: true,
      returnFaceLandmarks: false,
      returnFaceAttributes: faceAttributes,
      detectionModel: detectionModel,
    },
  });
  return faceApiForUrl.post('/face/v1.0/detect', {
    url: image.sourceURL,
  });
};

export default {
  getEmotionData,
};
