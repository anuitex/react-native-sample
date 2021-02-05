import { Action } from "redux";
import { RequestLoginModel } from "../models/request/requestLoginModel";
import { registerStartedAction, registerCompletedAction } from "./saga/registerHandler";

export interface InitialState {
    status: "initial" | "running" | "success" | "error";
    error?: string;
    loginData?: RequestLoginModel;
}

const initialState: InitialState = {
    status: "initial",
    loginData: null
}

export const RegisterReducer = (state: InitialState = initialState, action: Action): InitialState => {
    if(registerStartedAction.is(action)) {
        return {
            ...state,
            status: "running",
            error: undefined
        }
    }
    if(registerCompletedAction.is(action)) {
        return {
            ...state,
            status: action.status,
            error: action.error,
            loginData: action.loginData
        }
    }
    return state;
};