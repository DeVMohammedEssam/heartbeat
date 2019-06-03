import { signUp, logout, innerLogin, login } from "../../redux/actions/user";
import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import Axios from "axios";
const mockStore = configureMockStore([thunk]);
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
beforeEach(() => {
    moxios.install(Axios);
})
afterEach(() => {
    moxios.uninstall(Axios);

})



test("should make a request to get user data and dispatch it", async () => {
    moxios.stubRequest('https://3c61062f.ngrok.io/api/user/', {
        status: 200,
        response: { userToken: "A1B2C3" }
    })
    const store = mockStore({});
    await store.dispatch(login());
    const actions = await store.getActions();

})