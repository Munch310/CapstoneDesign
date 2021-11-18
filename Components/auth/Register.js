import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'

import firebase from 'firebase'
import '@firebase/firestore/dist/esm/index';
import { result } from 'lodash';

export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email : '',
            password: '',
            name: '',
        }
        this.onSignUp = this.onSignUp.bind(this)
    }
    onSignUp(){ // firebase 인증 관련
        const { email, password, name } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            firebase.firestore().collection("users") // users 에 
                .doc(firebase.auth().currentUser.uid) // uid 값 가져와서
                .set({ // 이름 이메일 
                    name,
                    email
                })
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
            alert("작성이 올바르지 않습니다.")
        })
    }
    render() {
        return ( // 로그인 폼
            <View> 
                <TextInput
                    placeholder="name"
                    onChangeText={(name) => this.setState({ name })}
                />
                <TextInput
                    placeholder="email"
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />
                <Button
                    onPress={() => this.onSignUp()}
                    title="제출"
                ></Button>
            </View>
        )
    }
}

export default Register
