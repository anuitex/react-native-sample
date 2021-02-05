import { defineAction } from "rd-redux-utils";
import { RequestRegisterModel } from "../models/request/requestRegister.model";

export const registrAction = defineAction<RequestRegisterModel>("REGISTR")
