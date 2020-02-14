import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Home from './src/screens/Home';
import AddItem from './src/screens/AddItem';
import List from './src/screens/ListItems';
import Loading from './src/screens/Loading';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import Tracker from './src/screens/Tracker';
import Charts from './src/screens/Charts';
import Exercises from './src/screens/Exercises';
import Profile from './src/screens/Profile';
import Settings from './src/screens/Settings';
import CalendarScreen from './src/screens/CalendarScreen';

const AppNavigator = createStackNavigator(
  {
    Home,
    AddItem,
    List,
    Loading,
    SignUp,
    Login,
    Tracker,
    Charts,
    Exercises,
    Settings,
    Profile,
    CalendarScreen,
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}