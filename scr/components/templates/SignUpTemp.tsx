import React, { Children } from 'react';
import { View, StyleSheet } from 'react-native';

import SignUpForm from '../organisms/SignUpForm';
import TitleLabel from '../atoms/TitleLabel';
import CommonImage from '../atoms/CommonImage';


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingTop: 8
    }
});

type SignUpProps = {
    nameChange: (text: string) => void,
    idChange: (text: string) => void,
    pwdChange: (text: string) => void,
    birthChange: (text: string) => void,
    etcChange: (text: string) => void,
    onPress: () => void,
};

const SignUpTemp = (props: SignUpProps) => {
    return (
        <View style = {styles.container} >
            <TitleLabel label='회원가입'/>
            <CommonImage url='https://e7.pngegg.com/pngimages/198/657/png-clipart-yocale-logo-business-cards-sales-others-miscellaneous-service.png' />
            <SignUpForm 
                nameChange={props.nameChange}
                idChange={props.idChange}
                pwdChange={props.pwdChange}
                birthChange={props.birthChange}
                etcChange={props.etcChange}
                onPress={props.onPress}
            />
        </View>
    )
}

export default SignUpTemp;