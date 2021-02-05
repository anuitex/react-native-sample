import { Action } from "redux";
import { ResponseOwnerDataModel } from "../../../../shared/models/response/responseOwnerData.model";
import { loginCompletedAction, loginStartedAction } from "./saga/loginHandler";

export interface InitialState {
    status: "initial" | "running" | "success" | "error";
    error?: string;
    ownerData?: ResponseOwnerDataModel;
};

const initialState: InitialState = {
    status: 'initial',
    ownerData: null
}

export const LoginReducer = (state: InitialState = initialState, action: Action): InitialState => {
    if (loginStartedAction.is(action)) {
        return {
            ...state,
            status: 'running',
            error: undefined
        }
    }

    if (loginCompletedAction.is(action)) {
        return {
            ...state,
            status: action.status,
            error: action.error,
            ownerData: action.ownerData
        }
    }

    return state;
}