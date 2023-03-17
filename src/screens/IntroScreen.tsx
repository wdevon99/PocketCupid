import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ViewWrapper from '../components/layouts/ViewWrapper/ViewWrapper.component';
import PagerView from 'react-native-pager-view';
import {Images} from '../constants/imageConstants';

const styles = StyleSheet.create({
  childWrapper: {position: 'absolute', bottom: 60, paddingHorizontal: 25},
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: 'white',
    marginLeft: 270,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {width: 20, height: 20, margin: 15},
  skipText: {fontSize: 20, fontWeight: '500'},
  infoText: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#232323',
    textAlign: 'center',
    marginTop: 50,
  },
  image: {
    width: 300,
    height: 400,
  },
});

const introArray = [
  {
    index: 0,
    text: 'To know thyself is the beginning of wisdom...',
    image: Images.illastrater1,
  },
  {
    index: 1,
    text: 'Love is when you can understand each other’s silences...',
    image: Images.illastrater2,
  },
  {
    index: 2,
    text: 'Mutual understanding is the main backbone of happy relationship....',
    image: Images.illastrater3,
  },
];

const IntroScreen = (props: {
  navigation: {navigate: (arg0: string) => void};
}) => {
  const viewPager = useRef() as MutableRefObject<PagerView>;
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index === 3) {
      props.navigation.navigate('MainScreen');
    } else {
      setIndex(index + 1);
      viewPager?.current?.setPage(index);
    }
  };

  useEffect(() => {
    return () => {
      setIndex(0);
    };
  }, []);

  return (
    <ViewWrapper>
      <PagerView
        ref={viewPager}
        style={{flex: 1, marginTop: 100}}
        initialPage={0}>
        {introArray.map(item => {
          return (
            <View key={item.index} style={{alignItems: 'center'}}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={item?.image}
              />
              <Text style={styles.infoText}>{item.text}</Text>
            </View>
          );
        })}
      </PagerView>
      <View style={styles.childWrapper}>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('MainScreen')}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleNext();
            }}
            style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../assets/forward-arrow.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ViewWrapper>
  );
};

export default IntroScreen;
