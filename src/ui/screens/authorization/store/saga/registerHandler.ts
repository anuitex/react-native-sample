import axios, { AxiosResponse } from "axios";
import { defineAction } from "rd-redux-utils";
import NavigationService from "../../../../../navigation/navigationServise";
import { put, takeLatest } from "redux-saga/effects";
import { API_SERVERS } from "../../../config";
import { RequestRegisterModel } from "../../models/request/requestRegister.model";
import { registrAction } from "../actions";
import { InitialState } from "../reducer";

export const registerStartedAction = defineAction<InitialState>(
    "REGISTER_STARTED"
);
export const registerCompletedAction = defineAction<InitialState>(
    "REGISTER_COMPLETED"
);

export function* handleRegisterSaga() {
    yield takeLatest(registrAction.TYPE, function* (
        action: typeof registrAction.typeOf.action
    ) {
        let Data: RequestRegisterModel = action;

        try {
            yield put(
                registerStartedAction({
                  status: "running",
                })
            );
            const response: AxiosResponse = yield axios.post(
                `${API_SERVERS}/api/auth/create`,
                Data
            );

            if(response.status === 201) {
                NavigationService.replace("signIn");
                yield put (
                    registerCompletedAction({
                        status: "success",
                        loginData: {email: Data.email, password: Data.password}
                    })
                )
            }
        } catch(err) {
            yield put(
                registerCompletedAction({
                    status: "error",
                    error: err.toString(),
                })
            );
        }
    })
}