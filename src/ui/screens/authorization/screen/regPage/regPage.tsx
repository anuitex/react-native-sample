import React from "react";
import { RegFormContainer } from "../../containers/regFormContainer";

interface RegPageProps {
    navigation?: any
}

export const  RegPage = ({navigation}: RegPageProps): JSX.Element => {
    
    return (
        <RegFormContainer navigation={navigation} />
    )
}