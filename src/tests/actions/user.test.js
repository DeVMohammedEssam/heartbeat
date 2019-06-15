import { signUp, logout, innerLogin, login } from "../../redux/actions/user";
test("should return sign up action object", () => {
    const userData = {
        name: "mohammed",
        email: "me@gmial.com"
    }
    expect(signUp(userData)).toEqual({
        type: "SIGN_UP",
        userData
    })
})
test("should return logout action object", () => {

    expect(logout()).toEqual({ type: "LOGOUT" })
})
test("should return inner login action object", () => {
    const userData = {
        _id: "123abc",
        email: "me@gmial.com",
        name: "mohammed",
        type: "0"
    }
    expect(innerLogin(userData)).toEqual({
        type: "LOGIN",
        userData: {
            email: userData.email,
            name: userData.name,
            type: userData.type,
            id: userData._id
        }
    })
})

