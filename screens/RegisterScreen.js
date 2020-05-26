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

class RegisterScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
      login: null,
    };
  }

  updateInput(name, value) {
    this.setState(() => ({[name]: value}));
  }

  Register = () => {
    const {email, password} = this.state;
    if (this.state.email === '' || this.state.password === '') {
      alert('Email / Password fields are empty');
    } else {
      this.setState({error: '', loading: true});
      const {email, password} = this.state;
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(this.RegisterSucceed.bind(this))
        .catch(() => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(this.RegisterSucceed.bind(this))
            .catch((error) => {
              let errorCode = error.code;
              let errorMessage = error.message;
              if (errorCode === 'auth/weak-password') {
                this.RegisterFail.bind(this)('Weak password!');
              } else {
                this.RegisterFail.bind(this)(errorMessage);
              }
            });
        });
    }
  };

  RegisterSucceed() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    });
    this.props.navigation.navigate('Home');
  }
  RegisterFail(errorMessage) {
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
        onPress={this.Register.bind(this)}>
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
            Register to embark on your HKUST journey!
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
          <Text
            style={styles.changeScreen}
            onPress={() => this.props.navigation.navigate('Login')}>
            Registered already? Click here to Login.
          </Text>
          <Text style={styles.errorMessage}>{this.state.error}</Text>
          {this.Button()}
        </View>
      </View>
    );
  }
}

RegisterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Register',
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

export default RegisterScreen;
