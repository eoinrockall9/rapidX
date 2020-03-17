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
import DynamicStretch from './src/screens/Exercise/DynamicStretch';
import Foamroll from './src/screens/Exercise/Foamroll';
import LongDistance from './src/screens/Exercise/Long-Distance';
import Sprint from './src/screens/Exercise/Sprint';
import Static from './src/screens/Exercise/StaticStretch';
import Warmup from './src/screens/Exercise/Warmup';
import Stopwatch from './src/screens/Stopwatch';
import RecentRuns from './src/screens/RecentRuns';
import Stats from './src/screens/Stats';
import Provinces from './src/screens/Parkrun/Provinces';
import Connacht from './src/screens/Parkrun/Provinces/Connacht';
import Leinster from './src/screens/Parkrun/Provinces/Leinster';
import Munster from './src/screens/Parkrun/Provinces/Munster';
import Ulster from './src/screens/Parkrun/Provinces/Ulster';
import Galway from './src/screens/Parkrun/Provinces/Connacht/Galway/Galway'
import Leitrim from './src/screens/Parkrun/Provinces/Connacht/Leitrim/Leitrim'
import Mayo from './src/screens/Parkrun/Provinces/Connacht/Mayo/Mayo'
import Roscommon from './src/screens/Parkrun/Provinces/Connacht/Roscommon/Roscommon'
import Sligo from './src/screens/Parkrun/Provinces/Connacht/Sligo/Sligo'
import Clare from './src/screens/Parkrun/Provinces/Munster/Clare/Clare'
import Cork from './src/screens/Parkrun/Provinces/Munster/Cork/Cork'
import Kerry from './src/screens/Parkrun/Provinces/Munster/Kerry/Kerry'
import Limerick from './src/screens/Parkrun/Provinces/Munster/Limerick/Limerick'
import Tipperary from './src/screens/Parkrun/Provinces/Munster/Tipperary/Tipperary'
import Waterford from './src/screens/Parkrun/Provinces/Munster/Waterford/Waterford'
import Cavan from './src/screens/Parkrun/Provinces/Ulster/Cavan/Cavan'
import Donegal from './src/screens/Parkrun/Provinces/Ulster/Donegal/Donegal'
import Monaghan from './src/screens/Parkrun/Provinces/Ulster/Monaghan/Monaghan'

console.disableYellowBox = true;


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
    DynamicStretch,
    Foamroll,
    LongDistance,
    Sprint,
    Static,
    Warmup,
    Stopwatch, 
    RecentRuns,
    Stats,
    Provinces,
    Connacht,
    Leinster,
    Munster,
    Ulster,
    Galway, Leitrim, Mayo, Roscommon, Sligo,
    Clare, Cork, Kerry, Limerick, Tipperary, Waterford,
    Cavan, Donegal, Monaghan,
    
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