import React, {useState, Component} from 'react';
import {Text, View} from 'react-native';
import EventsNavigator from './navigation/EventsNavigator';
import {enableScreens} from 'react-native-screens';
import {firebase} from '@react-native-firebase/app';
import {firestore} from './config/FirebaseConfig';
import '@react-native-firebase/firestore';
import '@react-native-firebase/database';
import '@react-native-firebase/auth';
import LoginScreen from './screens/LoginScreen';

enableScreens(); //for boosting efficiency

export default function App() {
  return <EventsNavigator />;
}
