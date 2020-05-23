import React from 'react';

import {CATEGORIES, INFODETAIL} from '../data/data';
import EventList from '../components/EventList';

const CategoryInfoScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');

  const displayedInfo = INFODETAIL.filter(
    (info) => info.categoryIds.indexOf(catId) >= 0,
  );

  return <EventList listData={displayedInfo} navigation={props.navigation} />;
};

CategoryInfoScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryInfoScreen;
