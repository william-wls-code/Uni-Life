import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Colors from '../constants/Colors';
import DefaultText from './DefaultText';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const InfoItem = (props) => {
  return (
    <ScrollView>
      <View style={styles.gridItem}>
        <TouchableOpacity style={{flex: 1}}>
          <View style={{...styles.container}}>
            <Text style={styles.title} numberOfLines={5}>
              {props.title}
            </Text>
            {props.remarks.map((remarks) => (
              <ListItem key={remarks}>{remarks}</ListItem>
            ))}
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 8,
    borderRadius: 10,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
  },
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    paddingLeft: 25,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderColor: '#e8e8e8',
    borderWidth: 2,
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    paddingBottom: 5,
    textAlign: 'left',
    color: Colors.primaryColor,
  },
});

export default InfoItem;
