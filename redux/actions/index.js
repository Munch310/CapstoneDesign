import firebase from "firebase"
import '@firebase/firestore/dist/esm/index';
import { USER_STATE_CHANGE } from "../constants/index";

export function fetchUser(){
    return((dispatch) => {
        firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
            if(snapshot.exists){ // firestore /users 안에 uid 관한 데이터가 있으면 가져와서 dispatch 시킴
                dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data()})
            }
            else{
                console.log('존재하지 않습니다.')
            }
        })
    })
}