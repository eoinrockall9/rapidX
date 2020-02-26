// Loading.js
import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

// import firebase from 'react-native-firebase';

export default class CalendarDate extends React.Component {
    constructor(props){
        super(props);
           this.state={
              year:'',
              month:'',
              year:''
   
            };
         }
       componentDidMount(){
           this.setState({
               year: this.props.year,
               month: this.props.month,
               day: this.props.day
           });
       }
     
    
       render() {
           return (
            // <View>{this.props.navigation.state.params.}</View>
            <View></View>
           );
       }
}