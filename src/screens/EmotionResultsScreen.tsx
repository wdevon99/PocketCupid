import {useRoute} from '@react-navigation/native';
import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import ViewWrapper from '../components/layouts/ViewWrapper/ViewWrapper.component';
import {AskChatGtp} from '../helpers/ChatGtp';
import {ConvertEmotionToPhrase, Options} from '../helpers/PhraseGenarator';

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

const EmotionResultsScreen = (props: {
  navigation: {navigate: {goBack: () => void}};
}) => {
  const route = useRoute();

  const onOptionSelected = async option => {
    const {emotionsInput} = route.params;
    const phrase = ConvertEmotionToPhrase(emotionsInput, option);

    console.log('phrase => ', phrase);

    const choices = await AskChatGtp(phrase);

    console.log('choices => ', choices);
  };

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
          <Text style={styles.infoText}>
            Based on the analysis it looks like person is
          </Text>
        </View>
        <View style={styles.moodContainer}>
          <Image
            style={styles.moodImage}
            source={require('../assets/moodEmoji.png')}
          />
          <View style={{flex: 1, paddingHorizontal: 10}}>
            <Text style={{fontSize: 20, fontWeight: '300'}}>
              This person seems
            </Text>
            <Text
              style={{
                fontSize: 40,
                fontWeight: '400',
                lineHeight: 37,
                marginVertical: 15,
              }}>
              Extremly happy
            </Text>
          </View>
        </View>
        <View style={styles.resultsContainer}>
          <View style={styles.resultsBox}>
            <Text style={styles.resultInText}>You could...</Text>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => onOptionSelected(Options.SONG)}>
              <Image
                style={styles.actionIcon}
                source={require('../assets/song.png')}
              />
              <Text style={styles.actionText}>Play them a song</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => onOptionSelected(Options.QUOTE)}>
              <Image
                style={styles.actionIcon}
                source={require('../assets/video.png')}
              />
              <Text style={styles.actionText}>Show them a quote</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => onOptionSelected(Options.JOKE)}>
              <Image
                style={styles.actionIcon}
                source={require('../assets/joke.png')}
              />
              <Text style={styles.actionText}>Tell them a joke</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ViewWrapper>
  );
};

export default EmotionResultsScreen;
