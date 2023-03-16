import * as React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import ViewWrapper from '../components/layouts/ViewWrapper/ViewWrapper.component';

const IntroScreen = () => {
  return (
    <ViewWrapper>
      
      <View style={{position:'absolute' , bottom: 60 , paddingHorizontal: 25}}>
        <View style={{flex:1 , flexDirection:'row', justifyContent:''}}>
            <Text style={{fontSize: 20, fontWeight: 500}}>Skip</Text>
            <View style={{width: 15, backgroundColor:'white'}}>

            </View>
        </View>
      </View>
    </ViewWrapper>
  );
};

export default IntroScreen;
