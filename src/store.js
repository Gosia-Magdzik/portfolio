import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reposReducer from "./homepage/RepoCards/fetchRepos/reposSlice";
import { reposSaga } from "./homepage/RepoCards/fetchRepos/reposSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        repos: reposReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(reposSaga);

export default store;

//SagaMiddleware podłączenie sagi do Store'a