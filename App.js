/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import {logo} from './src/assets';
import Login from './src/screens/Login';
import {storage} from './src/utils/mmkvstore';
import {colors} from './src/constants/colors';
const App = () => {
  // const username = storage.getString('user.name');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.black}}>
      {/* <Text>hello</Text>
      <Icon name="rocket" size={30} color="#900" />
      <Image
        source={logo}
        style={{width: 200, height: 200, backgroundColor: 'red'}}
      /> */}
      <Login />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
