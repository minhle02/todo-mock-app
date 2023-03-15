//Screen 1
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  SafeAreaView,
  Image
} from 'react-native';

import { Calendar } from 'react-native-calendars';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SearchPage = (props) => {
  //Set up top image bar
  const BURGERICONSIZE = windowHeight / 10;
  const topBarImageStyle = StyleSheet.create({
    topBar: {
      height: BURGERICONSIZE,
      width: BURGERICONSIZE
    }
  });
  const topBarImage = <Image
    source={require('../assets/burger-icon.webp')}
    style={topBarImageStyle.topBar}>
  </Image>;

  
  //Set up Calendar
  const calendarStyle = StyleSheet.create({
    calendarMenu: {
      width: windowWidth,
    }
  })
  
  let calendar = <Calendar style={calendarStyle.calendarMenu}
    onDayPress={(day) => {
        console.log('selected day', day);
        const screenHandler = props.screenSwitch;
        screenHandler({screen: 2, arg: day.timestamp})
    }}
  >
    
  </Calendar>;
  
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.topBarWrapper}>
        {topBarImage}
      </View>
      <View style={styles.calendarWrapper}>
        {calendar}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarWrapper: {
    flex: 1,
    width: windowWidth,
    alignItems: 'center'
  },
  calendarWrapper: {
    width: windowWidth,
    flex: 5,
    justifyContent: 'flex-start',
  },
});

export default SearchPage;