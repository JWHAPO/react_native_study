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
    onPress: () => void,
};

const SignInTemp = (props: SignUpProps) => {
    return (
        <View style = {styles.container} >
            <TitleLabel label='로그인'/>
            <CommonImage url='https://reactnative.dev/img/tiny_logo.png' />
            <SignInForm 
                idChange={props.idChange}
                pwdChange={props.pwdChange}
                onPress={props.onPress}
            />
        </View>
    )
}

export default SignInTemp;