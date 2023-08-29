import react from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation/appNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import{ createNativeStackNavigator } from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
//import auth from '@react-native-firebase/auth';
//import { firebase } from './config';
import Loading from './screens/loading';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import profilepage from './screens/profilepage';
import HomeScreen from './screens/HomeScreen';  

const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    
    <AppNavigation/> 
    
 
);
{
 // initialRouteName: 'Loading'
}
 
}


