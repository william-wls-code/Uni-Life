import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';

import {CATEGORIES} from '../data/data';
import CategoryGridTile from '../components/CategoryGridTile';
import Colors from '../constants/Colors';

const InfoScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        icon={itemData.item.icon}
        link={itemData.item.link}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'InfoDetail',
            params: {
              infoId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
};

const InfoNavOptions = {
  headerStyle: {
    backgroundColor: 'white',
  },
  headerTitleStyle: {
    fontFamily: 'Montserrat-Bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'Montserrat-Regular',
  },
  headerTintColor: Colors.primaryColor,
  headerTitle: 'Screen',
};

InfoScreen.navigationOptions = (navData) => {
  return {
    navigationOptions: InfoNavOptions,
    headerTitle: 'Information',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.surfaceColor,
    margin: 15,
  },
});

export default InfoScreen;
