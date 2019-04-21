const userReducer = (state = {}, action) => {
    switch (action.type) {
        case "SIGN_UP":
            return { ...action.userData };
        case "LOGIN":
            return { ...action.userData };
        case "LOGOUT":
            return {};
        default: return state;
    }
}

export default userReducer;