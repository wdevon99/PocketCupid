const sample_input = {
  responses: [
    {
      faceAnnotations: [
        {
          boundingPoly: {
            vertices: [
              {
                x: 116,
                y: 10,
              },
              {
                x: 201,
                y: 10,
              },
              {
                x: 201,
                y: 108,
              },
              {
                x: 116,
                y: 108,
              },
            ],
          },
          fdBoundingPoly: {
            vertices: [
              {
                x: 124,
                y: 29,
              },
              {
                x: 192,
                y: 29,
              },
              {
                x: 192,
                y: 105,
              },
              {
                x: 124,
                y: 105,
              },
            ],
          },
          landmarks: [
            {
              type: 'LEFT_EYE',
              position: {
                x: 146.22607,
                y: 61.685326,
                z: -0.00026845932,
              },
            },
            {
              type: 'RIGHT_EYE',
              position: {
                x: 171.97733,
                y: 62.860374,
                z: -0.63609195,
              },
            },
            {
              type: 'LEFT_OF_LEFT_EYEBROW',
              position: {
                x: 138.40584,
                y: 55.39968,
                z: 1.0828781,
              },
            },
            {
              type: 'RIGHT_OF_LEFT_EYEBROW',
              position: {
                x: 152.55379,
                y: 57.909054,
                z: -5.707442,
              },
            },
            {
              type: 'LEFT_OF_RIGHT_EYEBROW',
              position: {
                x: 165.97597,
                y: 58.851505,
                z: -5.9992266,
              },
            },
            {
              type: 'RIGHT_OF_RIGHT_EYEBROW',
              position: {
                x: 181.23816,
                y: 58.215187,
                z: 0.059814453,
              },
            },
            {
              type: 'MIDPOINT_BETWEEN_EYES',
              position: {
                x: 158.93196,
                y: 63.185406,
                z: -5.180974,
              },
            },
            {
              type: 'NOSE_TIP',
              position: {
                x: 157.51518,
                y: 77.858536,
                z: -9.01851,
              },
            },
            {
              type: 'UPPER_LIP',
              position: {
                x: 157.45903,
                y: 84.56955,
                z: -2.0616674,
              },
            },
            {
              type: 'LOWER_LIP',
              position: {
                x: 157.42207,
                y: 94.595795,
                z: 1.6248298,
              },
            },
            {
              type: 'MOUTH_LEFT',
              position: {
                x: 145.90814,
                y: 86.94545,
                z: 5.253023,
              },
            },
            {
              type: 'MOUTH_RIGHT',
              position: {
                x: 169.76268,
                y: 88.4211,
                z: 4.741049,
              },
            },
            {
              type: 'MOUTH_CENTER',
              position: {
                x: 157.37369,
                y: 89.993835,
                z: 0.6887553,
              },
            },
            {
              type: 'NOSE_BOTTOM_RIGHT',
              position: {
                x: 164.84702,
                y: 77.68317,
                z: -0.22903109,
              },
            },
            {
              type: 'NOSE_BOTTOM_LEFT',
              position: {
                x: 150.20161,
                y: 77.31103,
                z: 0.057325125,
              },
            },
            {
              type: 'NOSE_BOTTOM_CENTER',
              position: {
                x: 157.63524,
                y: 80.85269,
                z: -3.0550659,
              },
            },
            {
              type: 'LEFT_EYE_TOP_BOUNDARY',
              position: {
                x: 146.4283,
                y: 59.833553,
                z: -1.7543545,
              },
            },
            {
              type: 'LEFT_EYE_RIGHT_CORNER',
              position: {
                x: 151.6678,
                y: 62.240353,
                z: -0.064628124,
              },
            },
            {
              type: 'LEFT_EYE_BOTTOM_BOUNDARY',
              position: {
                x: 146.04875,
                y: 63.38375,
                z: 0.14092803,
              },
            },
            {
              type: 'LEFT_EYE_LEFT_CORNER',
              position: {
                x: 141.30377,
                y: 60.70986,
                z: 2.222582,
              },
            },
            {
              type: 'RIGHT_EYE_TOP_BOUNDARY',
              position: {
                x: 172.21518,
                y: 60.82849,
                z: -2.4127624,
              },
            },
            {
              type: 'RIGHT_EYE_RIGHT_CORNER',
              position: {
                x: 177.46739,
                y: 62.755608,
                z: 1.3340511,
              },
            },
            {
              type: 'RIGHT_EYE_BOTTOM_BOUNDARY',
              position: {
                x: 172.14128,
                y: 64.61101,
                z: -0.51364017,
              },
            },
            {
              type: 'RIGHT_EYE_LEFT_CORNER',
              position: {
                x: 166.9388,
                y: 62.805016,
                z: -0.4490478,
              },
            },
            {
              type: 'LEFT_EYEBROW_UPPER_MIDPOINT',
              position: {
                x: 145.33714,
                y: 54.56562,
                z: -4.1889553,
              },
            },
            {
              type: 'RIGHT_EYEBROW_UPPER_MIDPOINT',
              position: {
                x: 173.38687,
                y: 56.397087,
                z: -4.8487005,
              },
            },
            {
              type: 'LEFT_EAR_TRAGION',
              position: {
                x: 130.33713,
                y: 62.16559,
                z: 30.721596,
              },
            },
            {
              type: 'RIGHT_EAR_TRAGION',
              position: {
                x: 187.61168,
                y: 66.30702,
                z: 29.472546,
              },
            },
            {
              type: 'FOREHEAD_GLABELLA',
              position: {
                x: 159.32393,
                y: 58.680573,
                z: -6.683573,
              },
            },
            {
              type: 'CHIN_GNATHION',
              position: {
                x: 156.94374,
                y: 106.31487,
                z: 7.4008617,
              },
            },
            {
              type: 'CHIN_LEFT_GONION',
              position: {
                x: 135.12506,
                y: 86.489944,
                z: 25.446356,
              },
            },
            {
              type: 'CHIN_RIGHT_GONION',
              position: {
                x: 179.43935,
                y: 91.97174,
                z: 24.621801,
              },
            },
            {
              type: 'LEFT_CHEEK_CENTER',
              position: {
                x: 140.45483,
                y: 76.37549,
                z: 5.632987,
              },
            },
            {
              type: 'RIGHT_CHEEK_CENTER',
              position: {
                x: 176.54205,
                y: 78.45478,
                z: 4.7685733,
              },
            },
          ],
          rollAngle: 3.321211,
          panAngle: -1.4509199,
          tiltAngle: -13.002498,
          detectionConfidence: 0.933396,
          landmarkingConfidence: 0.8047599,
          joyLikelihood: 'VERY_UNLIKELY',
          sorrowLikelihood: 'VERY_UNLIKELY',
          angerLikelihood: 'VERY_LIKELY',
          surpriseLikelihood: 'VERY_UNLIKELY',
          underExposedLikelihood: 'VERY_UNLIKELY',
          blurredLikelihood: 'VERY_UNLIKELY',
          headwearLikelihood: 'VERY_UNLIKELY',
        },
      ],
    },
  ],
};

export const Options = {
  SONG: 'SONG',
  JOKE: 'JOKE',
  QUOTE: 'QUOTE',
};

export const ConvertEmotionToPhrase = (input, option) => {
  const emotionsDetails = (({
    angerLikelihood,
    sorrowLikelihood,
    surpriseLikelihood,
    joyLikelihood,
    blurredLikelihood,
  }) => {
    return {
      angerLikelihood,
      sorrowLikelihood,
      surpriseLikelihood,
      joyLikelihood,
      blurredLikelihood,
    };
  })(input.responses[0].faceAnnotations[0]);

  const emotionLevel = Object.keys(emotionsDetails).find(c => {
    if (emotionsDetails[c] === 'VERY_LIKELY') {
      return c;
    }
  });

  let emotionSuffix = '';
  let emotion = '';

  switch (emotionLevel) {
    case 'angerLikelihood':
      emotionSuffix = 'cool down';
      emotion = 'angry';
      break;
    case 'blurredLikelihood':
      emotionSuffix = 'cheer up';
      emotion = 'sad';
      break;
    case 'joyLikelihood':
      emotionSuffix = 'cheer up';
      emotion = 'happy';
      break;
    case 'sorrowLikelihood':
      emotionSuffix = 'cheer up';
      emotion = 'sad';
      break;
    case 'surpriseLikelihood':
      emotionSuffix = 'cheer up';
      emotion = 'happy';
      break;
    default:
      emotionSuffix = 'cheer up';
      emotion = 'happy';
  }

  switch (option) {
    case Options.Song:
      return `Suggest a song to ${emotionSuffix} ${emotion} person`;
    case Options.Joke:
      return `Suggest a joke to ${emotionSuffix} ${emotion} person`;
    case Options.Quote:
      return `Suggest a quote to ${emotionSuffix} ${emotion} person`;
  }
};
