import React from 'react';
import { View, StyleSheet } from 'react-native';

import CommonInputBox from '../molecules/CommonInputBox';
import BottomButton from '../atoms/BottomButton';

const styles = StyleSheet.create({
    commonBox: {
        paddingHorizontal: 8,
        paddingTop: 8
    }
});

type SignInFormProps = {
    idChange: (text: string) => void,
    pwdChange: (text: string) => void,
    onPress: () => void,
};

const SignInForm = (props: SignInFormProps) => {
    return (
        <View style={styles.commonBox} >
            <CommonInputBox
                hint=''
                labelName='ID'
                inputChange={props.idChange}
            />

            <CommonInputBox
                hint=''
                labelName='비밀번호'
                inputChange={props.pwdChange}
            />

            <BottomButton 
                title='로그인'
                onPress={props.onPress}
            />
        </View>
    );
}

export default SignInForm; 