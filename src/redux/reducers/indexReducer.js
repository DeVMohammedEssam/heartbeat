const userReducer = (state = {notifications:[]}, action) => {
    switch (action.type) {
        case "ADD_NOTI":
            if(state.notifications.length<3){
                state.notifications.push(action.data)
            }
            return { ...state };
            
        default: return state;
    }
}

export default userReducer;