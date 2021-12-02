import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/actions/index'

import HomeScreen from './auth/main/Home'
import AddScreen from './auth/main/Add'
import ProfileScreen from './auth/main/Profile'

const Tab = createBottomTabNavigator();

export class Main extends Component {
    componentDidMount(){
         this.props.fetchUser();
    }
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen}  // tab 바 
                options={{
                    tabBarIcon:({color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} /> // 여기 아이콘
                    ),
                
                }}/>
                <Tab.Screen name="Add" component={AddScreen} 
                options={{
                    tabBarIcon:({color, size}) => (
                        <MaterialCommunityIcons name="plus-blox" color={color} size={26} /> // 아이콘 
                    ),
                
                }}/>
                <Tab.Screen name="profile" component={ProfileScreen} 
                options={{
                    tabBarIcon:({color, size}) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                    ),
                
                }}/>
            </Tab.Navigator>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch);
 
export default connect (mapStateToProps, mapDispatchProps)(Main); // redux 데이터 연결 지금은 email이랑 name 관리
