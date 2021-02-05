import { Action } from "redux";
import { ResponseUserModel } from "../../../../shared/models/response/responseUser.model";
import { resetSearchList } from "./action";
import { searchStartedAction, searchCompletedAction } from "./saga/searchSaga";

export interface InitialState {
    status: "initial" | "running" | "success" | "error";
    error?: string;
    searchData?: ResponseUserModel[];
};

const initialState: InitialState = {
    status: 'initial',
    searchData: null
}

export const searchReducer = (state: InitialState = initialState, action: Action): InitialState => {
    if(searchStartedAction.is(action)) {
        return {
            ...state,
            status: 'running'
        }
    }

    if(searchCompletedAction.is(action)) {
        return {
            ...state,
            status: action.status,
            error: action.error,
            searchData: action.searchData
        }
    }

    if(resetSearchList.is(action)) {
        return {
            ...state,
            searchData: null
        }
    }

    return state;
}