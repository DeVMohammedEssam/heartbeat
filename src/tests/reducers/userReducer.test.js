import userReducer from "../../redux/reducers/usersReducer";
test("should return user data when action type is sign up", () => {
    const action = {
        type: "SIGN_UP",
        userData: {
            name: "mohammed"
        }
    }
    expect(userReducer(undefined, action))
})
test("should return user data when action type is login", () => {
    const action = {
        type: "LOGIN",
        userData: {
            name: "mohammed"
        }
    }
    expect(userReducer(undefined, action))
})
test("should return empty object when action type is logout", () => {
    const action = {
        type: "LOGOUT",
        userData: {
            name: "mohammed"
        }
    }
    expect(userReducer(undefined, action)).toEqual({});
})
test("should return default state when theres's no action type", () => {
    expect(userReducer(undefined, ({ type: "" }))).toEqual({});
}) 