import axios from "axios";
export const signUp = (userData) => ({
    type: "SIGN_UP",
    userData
})

export const logout = () => ({
    type: "LOGOUT"
})


export const innerLogin = (userData) => ({
    type: "LOGIN",
    userData: {
        id: userData._id,
        email: userData.email,
        name: userData.name,
        type: userData.type
    }
})
export const login = () => {
    return dispatch => {
        let userData;
        //   axios.defaults.headers.common['Authorization'] = localStorage.getItem("userToken");
        axios.get("https://3c61062f.ngrok.io/api/user/").then(data => {
            userData = data.data.user;
            dispatch(innerLogin(userData));
        })
    }


}


