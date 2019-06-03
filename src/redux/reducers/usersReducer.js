const userReducer = (state = {}, action) => {
    switch (action.type) {
        case "SIGN_UP":
            return { ...state, ...action.userData };
        case "LOGIN":
            return { ...state, ...action.userData };
        case "LOGOUT":
            return ({});
        default: return state;
    }
}

export default userReducer;