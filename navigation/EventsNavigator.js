import React from 'react';
import {Platform, Text} from 'react-native';
import {
  createMaterialTopTabNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  createTopTabNavigator,
  createBottomTabNavigator,
} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AcademicsScreen from '../screens/AcademicsScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import EventScreen from '../screens/EventScreen';
import EventDetailScreen from '../screens/EventDetailScreen';
import InfoScreen from '../screens/InfoScreen';
import InfoDetailScreen from '../screens/InfoDetailScreen';
import NewsScreen from '../screens/NewsScreen';
import TodoScreen from '../screens/TodoScreen';
import MapScreen from '../screens/MapScreen';
import CalendarScreen from '../screens/CalendarScreen';
import Colors from '../constants/Colors';
import NewsDetailScreen from '../screens/NewsDetailScreen';
import LoginScreen from '../screens/LoginScreen';
import LogoutScreen from '../screens/LogoutScreen';
import RegisterScreen from '../screens/RegisterScreen';

const defaultStackNavOptions = {
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

const AuthNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
  },
  {
    defaultNavigationOptions: {headerShown: false},
  },
);

const EventNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Event: EventScreen,
    EventDetail: EventDetailScreen,
  },
  {defaultNavigationOptions: defaultStackNavOptions},
);

const NewsNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    News: NewsScreen,
    NewsDetail: NewsDetailScreen,
  },
  {defaultNavigationOptions: defaultStackNavOptions},
);

const AcademicsNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Academics: AcademicsScreen,
  },
  {defaultNavigationOptions: defaultStackNavOptions},
);

const TodoNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Todo: TodoScreen,
  },
  {defaultNavigationOptions: defaultStackNavOptions},
);

const InformationNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Information: InfoScreen,
    InfoDetail: InfoDetailScreen,
  },
  {defaultNavigationOptions: defaultStackNavOptions},
);

const FeedbackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Feedback: FeedbackScreen,
  },
  {defaultNavigationOptions: defaultStackNavOptions},
);

const MapNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Mapsc: MapScreen,
  },
  {defaultNavigationOptions: defaultStackNavOptions},
);

const CalendarNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Calendar: CalendarScreen,
  },
  {defaultNavigationOptions: defaultStackNavOptions},
);

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: true,
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
        headerTitle: 'UniLife',
      },
    },
    EventNav: EventNavigator,
    NewsNav: NewsNavigator,
    AcademicsNav: AcademicsNavigator,
    TodoNav: TodoNavigator,
    InfoNav: InformationNavigator,
    FeedbackNav: FeedbackNavigator,
    MapNav: MapNavigator,
    CalNav: CalendarNavigator,
  },
  {
    defaultNavigationOptions: {headerShown: false},
  },
);

const tabScreenConfig = {
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <MaterialIcons name="home" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.secondaryColor,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{fontFamily: 'Montserrat-Bold'}}>Home</Text>
        ) : (
          'Home'
        ),
    },
  },

  Map: {
    screen: MapScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <MaterialIcons name="map" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.secondaryColor,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{fontFamily: 'Montserrat-Bold'}}>Map</Text>
        ) : (
          'Map'
        ),
    },
  },
};

const InfoFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: Colors.secondaryColor,
        shifting: true,
        barStyle: {
          backgroundColor: Colors.tabColor,
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: 'Montserrat-Regular',
          },
          activeTintColor: Colors.accentColor,
        },
      });

const SettingsNavigator = createDrawerNavigator({
  Home: InfoFavTabNavigator,
  Logout: LogoutScreen,
});

const MainNavigator = createSwitchNavigator(
  {
    Authenticate: {
      screen: AuthNavigator,
    },
    Home: {
      screen: SettingsNavigator,
    },
  },
  {
    initialRouteName: 'Authenticate',
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'Montserrat-Bold',
      },
    },
  },
);

export default createAppContainer(MainNavigator);
