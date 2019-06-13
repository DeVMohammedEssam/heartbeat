import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import userReducer from "./reducers/usersReducer";
import indexReducer from "./reducers/indexReducer";

import { composeWithDevTools } from 'redux-devtools-extension';
const composeEnhancers = composeWithDevTools({});
const store = createStore(combineReducers({
    user: userReducer,
        index: indexReducer

}), composeEnhancers(
    applyMiddleware(thunk)
));
export default store;