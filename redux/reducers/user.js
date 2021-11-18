const initialState = {
    currentUser: null
}

export const user = (state = initialState, action)=> { // 유저 상태, 행동 넘김
    return {
        ...state,
        currentUser: action.currentUser
    }
}