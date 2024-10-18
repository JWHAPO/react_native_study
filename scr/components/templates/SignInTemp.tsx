import React, { Children } from 'react';
import { View, StyleSheet } from 'react-native';

import SignInForm from '../organisms/SignInForm';
import TitleLabel from '../atoms/TitleLabel';
import CommonImage from '../atoms/CommonImage';


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingTop: 8
    }
});

type SignUpProps = {
    idChange: (text: string) => void,
    pwdChange: (text: string) => void,
    onLogin: () => void,
    onSignUp: () => void,
};

const SignInTemp = (props: SignUpProps) => {
    return (
        <View style = {styles.container} >
            <TitleLabel label='로그인'/>
            <CommonImage url='https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg' />
            <SignInForm 
                idChange={props.idChange}
                pwdChange={props.pwdChange}
                onLogin={props.onLogin}
                onSignUp={props.onSignUp}
            />
        </View>
    )
}

export default SignInTemp;