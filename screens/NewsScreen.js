import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {NEWS} from '../data/data';
import NewsList from '../components/NewsList';
import Colors from '../constants/Colors';

const NewsScreen = (props) => {
  return <NewsList listData={NEWS} navigation={props.navigation} />;
};

NewsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'News',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.surfaceColor,
  },
});

export default NewsScreen;
