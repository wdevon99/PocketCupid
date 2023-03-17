import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ViewWrapper from '../components/layouts/ViewWrapper/ViewWrapper.component';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 24,
  },
  resultsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resultsBox: {
    padding: 8,
    borderRadius: 14,
    borderWidth: 1,
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
  },
  resultInText: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
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
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'gray',
  },
});

const EmotionResultsScreen = () => {
  return (
    <ViewWrapper>
      <View style={styles.mainContainer}>
        <View style={styles.resultsContainer}>
          <View style={styles.resultsBox}>
            <Text style={styles.resultInText}>
              Your partner is in a normal mood in this image
            </Text>
          </View>
          <Text style={styles.resultPercentage}>50%</Text>
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Text>Suggest a Song</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text>Suggest a Meme</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text>Suggest a Joke</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ViewWrapper>
  );
};

export default EmotionResultsScreen;
