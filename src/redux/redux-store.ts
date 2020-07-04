import {combineReducers, compose, createStore} from "redux";
import appReducer from "./app-reducer";

let rootReducer = combineReducers({
    appReducer: appReducer,
});

type RootReducerType = typeof rootReducer;  // (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,  composeEnhancers());


// @ts-ignore
window.store = store;
export default store;