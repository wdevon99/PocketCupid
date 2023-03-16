import axios from 'axios';
// import fs from 'fs';
import RNFetchBlob from 'rn-fetch-blob';
// axios.interceptors.response.use(
//   req => {
//     console.log('success', req);
//     return req;
//   },
//   error => {
//     console.log('error', error.response);
//     return error;
//   },
// );

const getEmotionDataFetch = image => {
  const subscriptionKey = 'e8c01125502d4563b90ecdd6a648b5a8';
  const endpoint = 'https://unihackfacedetectapi.cognitiveservices.azure.com/';
  const imageUrl = image.sourceURL;

  const uri = image.path;
  const filename = uri.substring(uri.lastIndexOf('/') + 1);
  const headers = {
    'Content-Type': 'application/octet-stream',
    'Ocp-Apim-Subscription-Key': subscriptionKey,
  };

  RNFetchBlob.fetch(
    'POST',
    endpoint + '/face/v1.0/detect?returnFaceAttributes=emotion,age,gender',
    headers,
    RNFetchBlob.wrap(image.path),
  )
    .then(res => {
      console.log(' the res --> ', res);
    })
    .catch(err => {
      console.log(' the error --> ', err);
    });
  // return RNFetchBlob.fs
  //   .readFile(image.path, 'base64')
  //   .then(data => {
  //     const body = data;

  //     return RNFetchBlob.fetch(
  //       'POST',
  //       endpoint + '/face/v1.0/detect?returnFaceAttributes=emotion,age,gender',
  //       headers,
  //       body,
  //     );
  //   })
  //   .then(response => {
  //     return response.json();
  //   })
  //   .then(data => {
  //     console.log('response', data);
  //   })
  //   .catch(error => {
  //     console.log('error', error);
  //   });

  // const body = {
  //   url: imageUrl,
  //   returnFaceAttributes: 'emotion,age,gender',
  // };

  // fetch(endpoint + '/face/v1.0/detect', {
  //   method: 'POST',
  //   headers: headers,
  //   body: JSON.stringify(body),
  // })
  //   .then(response => {
  //     return response.json();
  //   })
  //   .then(data => {
  //     console.log('response', data);
  //   })
  //   .catch(error => {
  //     console.log('error', error);
  //   });
};

const getEmotionData = image => {
  const AZURE_END_POINT =
    'https://unihackfacedetectapi.cognitiveservices.azure.com/';
  const AZURE_API_KEY = 'e8c01125502d4563b90ecdd6a648b5a8';
  const formData = new FormData();
  formData.append('photo', {
    uri: image.sourceURL,
    type: image.mime,
    name: image.filename,
  });
  axios
    .post(
      'https://unihackfacedetectapi.cognitiveservices.azure.com/face/v1.0/detect?returnFaceAttributes=emotion',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Ocp-Apim-Subscription-Key': AZURE_API_KEY,
        },
      },
    )
    .then(response => {
      console.log('response', response.data);
    })
    .catch(error => {
      console.log('resp error', error);
    });
};

export default {
  getEmotionData,
  getEmotionDataFetch,
};
