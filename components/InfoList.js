import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import InfoItem from './InfoItem';

const InfoList = (props) => {
  const renderInfoItem = (itemData) => {
    return (
      <InfoItem title={itemData.item.title} remarks={itemData.item.remarks} />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderInfoItem}
        style={{width: '100%'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

export default InfoList;
