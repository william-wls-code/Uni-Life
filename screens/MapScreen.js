import React from 'react';
import {View, StyleSheet} from 'react-native';
import Map from '../components/Map';

const MapScreen = (props) => {
  return (
    <View>
      <Map />
    </View>
  );
};

MapScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Map',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MapScreen;
