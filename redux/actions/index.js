import firebase from "firebase"
import '@firebase/firestore/dist/esm/index';
import { USER_STATE_CHANGE } from "../constants/index";

export function fetchUser(){
    return((dispatch) => {
        firebase.firestore()
        .collection("user")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
            if(snapshot.exists){
                console.log(snapshot.data())
                dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.doc()})
            }
            else{
                console.log('존재하지 않습니다.')
            }
        })
    })
}