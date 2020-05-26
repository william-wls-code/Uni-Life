import React from 'react';
import {Text, View} from 'react-native';
import EventsNavigator from './navigation/EventsNavigator';
import {enableScreens} from 'react-native-screens';

enableScreens(); //for boosting efficiency

export default function App() {
  return <EventsNavigator />;
}
