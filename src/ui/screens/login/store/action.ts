import { defineAction } from "rd-redux-utils";
import { RequestLoginModel } from "../models/request/requestLogin.model";

export const LoginAction = defineAction<RequestLoginModel>("LOGIN")