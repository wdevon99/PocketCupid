import axios from 'axios';
// import fs from 'fs';

const getEmotionData = () => {
  console.log('hittt');
  const AZURE_END_POINT =
    'https://unihackfacedetectapi.cognitiveservices.azure.com/';
  const AZURE_API_KEY = 'e8c01125502d4563b90ecdd6a648b5a8';
  const headers = {
    'Content-Type': 'application/png',
    'Ocp-Apim-Subscription-Key': AZURE_API_KEY,
  };

  // const imageData = fs.readFileSync('./images/test.png');

  const url = `${AZURE_END_POINT}/face/v1.0/detect?returnFaceLandmarks-true&returnFaceAttributes=age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories&recognitionModel=recognition_03&faceldTimeToLive=60`;

  axios
    .post(url, 'imageData', {headers: headers})
    .then(rep => {
      console.log('rep', rep);
    })
    .catch(error => {
      console.log(error);
    });
};

export default {
  getEmotionData,
};

{
  /* <Button
          onPress={async () => {
            try {
              const data = await service.getEmotionData();
              console.log('data', data);
            } catch (error) {
              console.log('data', error);
            }
          }}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        /> */
}
