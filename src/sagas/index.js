import { put, takeLatest, all, call } from 'redux-saga/effects';
import { userDetail } from '../apiAction';
function* fetchUsers() {

    console.log("raseem ayatt")
    const res = yield call(users)


    yield put({ type: "USERS", users: res, });

}
async function users() {
    return await userDetail().then((response) => response.data)
}
function* actionWatcher() {
    yield takeLatest('GET_USERS', fetchUsers)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}