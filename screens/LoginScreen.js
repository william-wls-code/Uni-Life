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
import DefaultText from '../components/DefaultText';
import {firebase} from '@react-native-firebase/app';
import {firestore} from '../config/FirebaseConfig';
import '@react-native-firebase/firestore';
import '@react-native-firebase/database';
import '@react-native-firebase/auth';

import Colors from '../constants/Colors';

const {width, height} = Dimensions.get('screen');

class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  updateInput(name, value) {
    this.setState(() => ({[name]: value}));
  }

  Login() {
    this.setState({error: '', loading: true});
    const {email, password} = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.LoginSucceed.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.LoginSucceed.bind(this))
          .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            if (errorCode === 'auth/weak-password') {
              this.LoginFail.bind(this)('Weak password!');
            } else {
              this.LoginFail.bind(this)(errorMessage);
            }
          });
      });
  }
  LoginSucceed() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    });
  }
  LoginFail(errorMessage) {
    this.setState({error: errorMessage, loading: false});
  }

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
        onPress={this.Login.bind(this)}>
        Sign In
      </Button>
    );
  }

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>Welcome to UniLife!</Text>
          <Text style={styles.headerText}>
            Login to embark on your HKUST journey!
          </Text>
        </View>
        <View style={styles.formSection}>
          <TextInput
            label="Email"
            returnKeyType="next"
            value={this.state.email}
            onChangeText={(text) => this.updateInput('email', text)}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            style={styles.formInput}
            underlineColor={Colors.secondaryColor}
            theme={{colors: {primary: Colors.highlightColor}}}
          />
          <TextInput
            label="Password"
            returnKeyType="next"
            value={this.state.password}
            onChangeText={(text) => this.updateInput('password', text)}
            autoCapitalize="none"
            autoCompleteType="off"
            textContentType="none"
            keyboardType="default"
            style={styles.formInput}
            underlineColor={Colors.secondaryColor}
            theme={{colors: {primary: Colors.highlightColor}}}
            secureTextEntry
          />
          {this.Button()}
        </View>
        <DefaultText>{this.state.error}</DefaultText>
      </View>
    );
  }
}

LoginScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Login',
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
    height: 150,
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

export default LoginScreen;
