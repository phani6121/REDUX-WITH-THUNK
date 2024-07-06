import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index"
import { thunk } from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
//if we want to see redux store in chrome dev tool need this extension 

export default store;