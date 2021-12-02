import React from 'react'
import { Text, View, Button } from 'react-native'

export default function Home({ navigation }) { //스타일 변경해야함 아래
    return (
        <View style={{ flex: 1, justifyContent: 'center'}}> 
            <Button
                title='공지게시판'
                onPress={() => navigation.navigate("PostForm")}/>
            <Button
                title='?????밑에 추가'
                onPress={() => navigation.navigate("test2")}/>
        </View>
    )
}

