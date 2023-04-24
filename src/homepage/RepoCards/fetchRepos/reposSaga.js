import { delay, call, put, takeLatest } from "redux-saga/effects";
import { getRepos } from "./getRepos";
import { fetchError, fetchRepos, fetchReposSuccess } from "./reposSlice";

//function* generator funkcji

function* fetchReposHandler () {
    try {
        yield delay (3_000);
        const reposData = yield call(getRepos);
        yield put(fetchReposSuccess(reposData));
    }   catch (error) {
        yield delay(1_000);
        yield put(fetchError());
    }
}

export function* reposSaga() {
    yield takeLatest(fetchRepos, fetchReposHandler);
}