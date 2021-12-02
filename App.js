import { StatusBar } from "expo-status-bar";
import React, {Component} from "react";

import {View, Text} from 'react-native'
import * as firebase from 'firebase'

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux' 
import rootReducer from './redux/reducers'
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk))

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
import RegisterScreen from "./Components/auth/Register";
import LoginScreen from "./Components/auth/Login";
import MainScreen from './Components/Main'

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
    }
  }
  componentDidMount(){ // 로그인, 로드 정보  
  firebase.auth().onAuthStateChanged((user) => {
    if(!user){ // user 값이 없으면 logedin 값 false
      this.setState({
        loggedIn: false,
        loaded: true,
      })
    }else { // 아닌경우 로그인
      this.setState({
        loggedIn: true,
        loaded: true,
      })
    }
  })
  }
  render() {
    const {loaded, loggedIn} = this.state;
    if(!loaded){ // 로드 되지 않았다면 로딩중 출력
      return(
        <View style={{ flex: 1, justifyContent: 'center'}}>
          <Text>로딩중</Text>
        </View>
      )
    }
    if(!loggedIn){ // 로드는 되었지만 로그인 되지 않았을때 화면 출력
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Register" component={RegisterScreen}/>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
    }// 로드도 되고 로그인도 되서 들어가졌을때 화면
    return( 
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      
    )
  }
}
export default App