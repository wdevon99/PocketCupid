import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import ViewWrapper from '../components/layouts/ViewWrapper/ViewWrapper.component';
import {ReturnEmotionWithEmoji} from '../helpers/PhraseGenarator';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  resultsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  resultsBox: {
    padding: 8,
    flex: 1,
    borderColor: 'gray',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 8,
    marginTop: 15,
  },
  resultInText: {
    fontSize: 30,
    fontWeight: '400',
    marginVertical: 20,
  },
  resultPercentage: {
    position: 'absolute',
    borderWidth: 1,
    right: 7,
    bottom: 7,
    width: 60,
    height: 60,
    borderRadius: 30,
    textAlign: 'center',
    paddingTop: 20,
    borderColor: 'gray',
  },
  actionsContainer: {
    padding: 8,
    flex: 2,
    marginTop: 24,
  },
  actionButton: {
    height: 70,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  rowContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {width: 20, height: 20, margin: 15, transform: [{rotate: '180deg'}]},
  infoText: {
    fontSize: 30,
    fontWeight: '400',
    color: '#232323',
    marginLeft: 30,
  },
  actionIcon: {
    width: 50,
    height: 60,
  },
  actionText: {
    fontSize: 20,
    fontWeight: '400',
    color: '#232323',
    marginLeft: 20,
  },
  moodContainer: {
    padding: 8,
    marginTop: 44,
    height: 150,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 8,
    flexDirection: 'row',
  },
  moodImage: {
    width: 150,
    height: 150,
    marginTop: -25,
  },
});

const ResultScreen = (props: {
  navigation: {navigate: {goBack: () => void}},
}) => {
  const route = useRoute();

  const [choice, setChoice] = useState('');
  const [mood, setMood] = useState();

  useEffect(() => {
    const {emotionInput} = route.params;
    const mood = ReturnEmotionWithEmoji(emotionInput);
    setMood(mood);
    setChoice(props.route?.params?.choices);
  }, []);

  return (
    <ViewWrapper>
      <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../assets/forward-arrow.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.moodContainer}>
          <Image
            style={styles.moodImage}
            source={mood?.emojy || require('../assets/neutral.gif')}
          />
          <View
            style={{flex: 1, paddingHorizontal: 5, justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '400',
                marginVertical: 15,
              }}>
              {mood?.emotion}
            </Text>
          </View>
        </View>
        <View style={styles.resultsContainer}>
          <View style={styles.resultsBox}>
            <Text style={styles.resultInText}>{choice}</Text>
          </View>
        </View>
      </View>
    </ViewWrapper>
  );
};

export default ResultScreen;
