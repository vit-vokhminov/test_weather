import {combineReducers, createStore} from "redux";
import appReducer from "./app-reducer";

let rootReducer = combineReducers({
    appReducer: appReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

let store = createStore(rootReducer);



// @ts-ignore
window.store = store;
export default store;