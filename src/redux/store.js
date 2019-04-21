import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import userReducer from "./reducers/usersReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
const composeEnhancers = composeWithDevTools({});
const store = createStore(combineReducers({
    user: userReducer
}), composeEnhancers(
    applyMiddleware(thunk)
));
export default store;