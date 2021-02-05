import axios, { AxiosResponse } from "axios";
import { defineAction } from "rd-redux-utils";
import NavigationService from '../../../../../navigation/navigationServise';
import { put, takeEvery, takeLatest } from "redux-saga/effects";
import { API_SERVERS } from "../../../config";
import { InitialState } from "../reducer";
import { searchAction } from "../action";

export const searchStartedAction = defineAction<InitialState>(
    "SEARCH_STARTED"
);
export const searchCompletedAction = defineAction<InitialState>(
    "SEARCH_COMPLETED"
);

export function* searchSaga() {
    yield takeLatest(searchAction.TYPE, function* (
        action: typeof searchAction.typeOf.action
    ) {
        let name: string = action.value;

        try {
            yield put(searchStartedAction({status: 'running'}))
            
            const response: AxiosResponse = yield axios.get(
                `${API_SERVERS}/api/user?name=${name}`
            )

            if (response.status === 200) {
                yield put(
                    searchCompletedAction({
                        status: 'success',
                        searchData: response.data 
                    })
                )
            }
        }catch(err) {
            yield put(searchCompletedAction({
                status: 'error',
                error: err.toString()
            }))
        }
    })
}
