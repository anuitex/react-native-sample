import axios, { AxiosResponse } from "axios";
import { defineAction } from "rd-redux-utils";
import NavigationService from '../../../../../navigation/navigationServise';
import { put, takeLatest } from "redux-saga/effects";
import { API_SERVERS } from "../../../config";
import { RequestLoginModel } from "../../models/request/requestLogin.model";
import { LoginAction } from "../action";
import { InitialState } from "../reducer";

export const loginStartedAction = defineAction<InitialState>(
    "LOGIN_STARTED"
);
export const loginCompletedAction = defineAction<InitialState>(
    "LOGIN_COMPLETED"
);

export function* handleLoginSaga() {
    yield takeLatest(LoginAction.TYPE, function* (
        action: typeof LoginAction.typeOf.action
    ) {
        let data: RequestLoginModel = action;

        try {
            yield put(loginStartedAction({status: 'running'}))

            const response: AxiosResponse = yield axios.post(
                `${API_SERVERS}/api/auth/login`,
                data
            );

            if(response.status === 200) {
                console.log(response.data.userData);
                NavigationService.replace("main");
                yield put(
                    loginCompletedAction({
                        status: 'success',
                        ownerData: response.data.userData
                    })
                )
            }
        } catch(err) {
            yield put(
                loginCompletedAction({
                    status: 'error',
                    error: err.toString(),
                })
            )
        }
    })
}