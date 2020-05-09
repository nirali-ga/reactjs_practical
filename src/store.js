import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers/reducer";

const middleware = thunk;
const enhancers = applyMiddleware(middleware);

const store = createStore(rootReducer,composeWithDevTools(enhancers));

export default store;