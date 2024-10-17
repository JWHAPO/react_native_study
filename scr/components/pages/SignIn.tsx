import React, { useState } from 'react';

import { useSelector } from "react-redux";
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import SignInTemp from '../templates/SignInTemp';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../../../modules/redux/RootReducer';
import {
    Alert
} from 'react-native';


const [id, setId] = useState('');
const [pwd, setPwd] = useState('');

const alertMsg = (title: string, description: string) =>
    Alert.alert(title, description, [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

function login() {
    const userInfo = useSelector((state: RootState) => state.user);
    let userId = userInfo.id;
    let userPw = userInfo.pwd;

    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

    if (userId == id && userPw == pwd) {
        //login 성공
        navigation.navigate('UserInfo');
    } else {
        //login 실패
        alertMsg('로그인', '실패');
    }

}

export type StackParamList = {
    UserInfo: undefined
};

const SignIn = () => {

    return (
        <SignInTemp
            idChange={(text) => {
                setId(text);
            }}
            pwdChange={(text) => {
                setPwd(text);
            }}
            onPress={() => {
                login();
            }}
        />
    )
}

export default SignIn;