import axios from 'axios';

const getEmotionData = image => {
  const body = {
    requests: [
      {
        image: {
          content: image.data,
        },
        features: [
          {
            maxResults: 1,
            type: 'FACE_DETECTION',
          },
        ],
      },
    ],
  };
  axios
    .post('https://vision.googleapis.com/v1/images:annotate', body, {
      headers: {
        Authorization: 'Get the token from chat',
        'x-goog-user-project': 'sinuous-vent-253013',
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
    .then(response => {
      console.log('response', response);
    })
    .catch(error => {
      console.log('resp error', error);
    });
};

export default {
  getEmotionData,
};
