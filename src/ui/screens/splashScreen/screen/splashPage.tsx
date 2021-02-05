import React from "react";
import { SplashScreenContainer } from "../containers/splashContainer";

interface SplashPageProps {
    navigation?: any
}

export const  SplashPage = ({navigation}: SplashPageProps): JSX.Element => {
    return (
        <SplashScreenContainer navigation={navigation} />
    )
}