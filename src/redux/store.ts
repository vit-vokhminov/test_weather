import { combineReducers, compose, createStore } from 'redux';
import appReducer from './appReducer';

let rootReducer = combineReducers({
    appReducer: appReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());

export default store;
