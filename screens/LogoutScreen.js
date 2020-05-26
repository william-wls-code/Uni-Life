import React, {useState} from 'react';
import {TextInput, Button} from 'react-native-paper';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import {firebase} from '@react-native-firebase/app';
import {firestore} from '../config/FirebaseConfig';
import '@react-native-firebase/firestore';
import '@react-native-firebase/database';
import '@react-native-firebase/auth';

import Colors from '../constants/Colors';

const {width, height} = Dimensions.get('screen');

class LogoutScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
      login: null,
    };
  }

  Logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate('Login');
      })
      .catch((error) => this.setState({errorMessage: error.message}));
  };

  Button() {
    if (this.state.loading) {
      return (
        <View style={styles.spinnerStyle}>
          <ActivityIndicator size={'small'} />
        </View>
      );
    }
    return (
      <Button
        mode="contained"
        style={styles.button}
        color={Colors.highlightColor}
        labelStyle={styles.buttonContent}
        onPress={this.Logout.bind(this)}>
        Logout
      </Button>
    );
  }

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>Want to leave the application?</Text>
          <Text style={styles.headerText}>Click the logout button below.</Text>
        </View>
        <View style={styles.formSection}>
          <Text style={styles.errorMessage}>{this.state.error}</Text>
          {this.Button()}
        </View>
      </View>
    );
  }
}

LogoutScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Logout',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="menu"
          style={styles.menu}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    /* justifyContent: 'center',*/
    alignItems: 'center',
    backgroundColor: Colors.surfaceColor,
  },
  headerSection: {
    width: '100%',
    height: 200,
    padding: 20,
    paddingLeft: 35,
    textAlign: 'left',
    color: 'white',
    backgroundColor: Colors.secondaryColor,
    justifyContent: 'center',
  },
  formSection: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.surfaceColor,
    marginTop: 30,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    textAlign: 'left',
    color: 'white',
    paddingBottom: 7.5,
  },
  changeScreen: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    textAlign: 'left',
    color: Colors.secondaryColor,
    marginTop: 25,
  },
  errorMessage: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    textAlign: 'center',
    color: Colors.secondaryColor,
    marginTop: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  headerText: {
    fontFamily: 'Montserrat-Regular',
    color: 'white',
    fontSize: 16,
  },
  formInput: {
    width: width * 0.85,
    paddingTop: 7.5,
    paddingBottom: 7.5,
    backgroundColor: Colors.surfaceColor,
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    width: width / 3,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: Colors.highlightColor,
  },
  buttonContent: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    letterSpacing: 0,
    color: 'white',
  },
});

export default LogoutScreen;
