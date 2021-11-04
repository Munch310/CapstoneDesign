import { StatusBar } from "expo-status-bar";
import React from "react";

import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDd3a1mhtAvqGHUtfPrPRU_QkipXyGCJkQ",
  authDomain: "test-dav-6733f.firebaseapp.com",
  projectId: "test-dav-6733f",
  storageBucket: "test-dav-6733f.appspot.com",
  messagingSenderId: "813721804490",
  appId: "1:813721804490:web:d769731abff4f92cbe1e33",
  measurementId: "G-SJ8Q9S4YCP"
};

if(firebase.apps.length == 0 ){
  firebase.initializeApp(firebaseConfig)
}

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "./Components/auth/Landing";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}}>

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}