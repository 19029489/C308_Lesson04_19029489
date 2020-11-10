/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//Exercise 1
const Welcome = () => {
  return <Text>Welcome to C308 Web Frameworks!</Text>;
};

//Exercise 2
class MyFirstApp extends React.Component {
  render() {
    return <Text>My first React Native app</Text>;
  }
}

//Exercise 3
const SemModule = (props) => {
  return (
    <Text>
      {props.day} - {props.modCode}
    </Text>
  );
};

//Exercise 4
class Eats extends React.Component {
  render() {
    return (
      <Text>
        {this.props.name}
        {'\n'}
        {this.props.location}
        {'\n'}
      </Text>
    );
  }
};


const App: () => React$Node = () => {
  console.log('Listing semester modules and recommended eats');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Welcome/>
              <MyFirstApp/>

              <Text>{'\n'}My modules this semester:</Text>
              <SemModule day="Monday" modCode="C348" />
              <SemModule day="Tuesday" modCode="C273" />
              <SemModule day="Friday" modCode="C308" />

              <Text>{'\n'}Recommended Eats @ RP</Text>
              <Eats name="Sweet Tooth Waffles" location="W6 Level 1, E-canteen"/>
              <Eats name="Crowded Bowl" location="W4/W6 Lawn Canteen" />
              <Eats name="Western Cuisine @ Koufu" location="E1 Level 1, Koufu"/>
              <Eats name="Ayam Penyet" location="W4/W6 Lawn Canteen" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
