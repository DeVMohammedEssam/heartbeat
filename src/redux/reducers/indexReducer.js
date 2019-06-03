const userReducer = (state = {}, action) => {
    switch (action.type) {
        case "ANALYZE":
            return { ...action.userData };
     
        default: return state;
    }
}

export default userReducer;