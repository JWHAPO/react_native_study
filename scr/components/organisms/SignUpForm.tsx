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

type InputBoxProps = {
    nameChange: (text: string) => void,
    idChange: (text: string) => void,
    pwdChange: (text: string) => void,
    birthChange: (text: string) => void,
    etcChange: (text: string) => void,
    onPress: () => void,
};

const SignUpForm = (props: InputBoxProps) => {
    return (
        <View style={styles.commonBox} >
            <CommonInputBox
                hint='3글자 이상 입력'
                labelName='이름'
                inputChange={props.nameChange}
            />
            
            <CommonInputBox
                hint='영문 또는 숫자 입력'
                labelName='아이디'
                inputChange={props.idChange}
            />
            
            <CommonInputBox
                hint='영문 숫자 특수기호 조합 8자 이상'
                labelName='비밀번호'
                inputChange={props.pwdChange}
            />
            
            <CommonInputBox
                hint='예) 20010910'
                labelName='생년월일'
                inputChange={props.birthChange}
            />
            
            <CommonInputBox
                hint=''
                labelName='자기소개'
                inputChange={props.etcChange}
            />


            <BottomButton 
                title='회원가입'
                onPress={props.onPress}
            />
        </View>
    );
}

export default SignUpForm; 