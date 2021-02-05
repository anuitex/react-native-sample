import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { RegisterReducer } from "./ui/screens/authorization/store/reducer";
import { handleRegisterSaga } from "./ui/screens/authorization/store/saga/registerHandler";
import { LoginReducer } from "./ui/screens/login/store/reducer";
import { handleLoginSaga } from "./ui/screens/login/store/saga/loginHandler";
import { searchReducer } from "./ui/screens/searchScreen/store/reducer";
import { searchSaga } from "./ui/screens/searchScreen/store/saga/searchSaga";

const reducers = {
    register: RegisterReducer,
    login: LoginReducer,
    search: searchReducer,
}
const rootReducer = combineReducers(reducers);


//Sagas
function* appSaga() {
    yield all([handleRegisterSaga(), handleLoginSaga(), searchSaga()]);
}
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (window as any)["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

export const appStore = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(appSaga);

type FirstArg<TFunction> = TFunction extends (arg: infer TArg, ...rest: any[]) => any ? TArg : any;
type State<TReducerMap> = {
    [P in keyof TReducerMap]: Exclude<FirstArg<TReducerMap[P]>, undefined>;
};

export type AppState = State<typeof reducers>;