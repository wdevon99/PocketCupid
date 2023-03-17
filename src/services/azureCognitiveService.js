import axios from 'axios';
import json from './sample';

const getEmotionData = async image => {
  const KEY = 'Bearer ya29.a0AVvZVsrcJyrjELFTnULSUkNOUEKSJ0FzQ7UQcgTXe4eEsvfsqpIJxfaXVQvFkMETZinYcfVo07A_N2HAShVYLgoFmyWii65DE647BLyCxpkmc1lKR8nbjHFKt_pJKVxR-OYZ27OpZHoQ5hTU88-7Z7TA_JKOaCgYKAUASARASFQGbdwaIlppxmRe1gFvH2ONhuhl4rw0163';

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

  //return {data: json};
};

export default {
  getEmotionData,
};
