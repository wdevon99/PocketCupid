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
  let emotionLevel = Object.keys(emotionsDetails).find(c => {
    if (emotionsDetails[c] === 'VERY_LIKELY') {
      return c;
    }
  });
  if (!emotionLevel) {
    emotionLevel = Object.keys(emotionsDetails).find(c => {
      if (emotionsDetails[c] === 'LIKELY') {
        return c;
      }
    });
  }
  if (!emotionLevel) {
    emotionLevel = Object.keys(emotionsDetails).find(c => {
      if (emotionsDetails[c] === 'POSSIBLY') {
        return c;
      }
    });
  }
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
    case Options.SONG:
      return `Suggest a song to ${emotionSuffix} ${emotion} person`;
    case Options.JOKE:
      return `Suggest a joke to ${emotionSuffix} ${emotion} person`;
    case Options.QUOTE:
      return `Suggest a quote to ${emotionSuffix} ${emotion} person`;
  }
};
