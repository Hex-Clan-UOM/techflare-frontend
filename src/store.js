import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

const initState={
    message:"hello"
}

const middleware=[thunk];

const store=createStore(
    rootReducer,
    initState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
