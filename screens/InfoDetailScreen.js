import React from 'react';
import {View,StyleSheet} from 'react-native';

import {CATEGORIES, INFODETAIL} from '../data/data';
import InfoList from '../components/InfoList';
import DefaultText from '../components/DefaultText';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const InfoDetailScreen = (props) => {
  const infoId = props.navigation.getParam('infoId');
  const displayedInfo = INFODETAIL.filter(
    (info) => info.infoId.indexOf(infoId) >= 0,
  );

  return <InfoList listData={displayedInfo} />;
};

InfoDetailScreen.navigationOptions = (navigationData) => {
  const infoId = navigationData.navigation.getParam('infoId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === infoId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    paddingTop: 20,
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});

export default InfoDetailScreen;
