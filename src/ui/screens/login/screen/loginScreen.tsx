import React from "react";
import { LoginFormContainer } from "../containers/loginFormContainer";

interface LoginPageProps {
    navigation?: any
}

export const  LoginPage = ({navigation}: LoginPageProps): JSX.Element => {
    return (
        <LoginFormContainer navigation={navigation} />
    )
}