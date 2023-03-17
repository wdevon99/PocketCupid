import axios from 'axios';

const getEmotionData = async image => {
  const KEY = '';

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

  const response = axios.post(
    'https://vision.googleapis.com/v1/images:annotate',
    body,
    {
      headers: {
        Authorization: KEY,
        'x-goog-user-project': 'sinuous-vent-253013',
        'Content-Type': 'application/json; charset=utf-8',
      },
    },
  );

  return await response;
};

export default {
  getEmotionData,
};
