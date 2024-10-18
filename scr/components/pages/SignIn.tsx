import React, { useState } from 'react';

import { useSelector } from "react-redux";
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import SignInTemp from '../templates/SignInTemp';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../../../modules/redux/RootReducer';
import {
    Alert
} from 'react-native';
import { RootStackParamList } from '../../../App';

const alertMsg = (title: string, description: string) =>
    Alert.alert(title, description, [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

const SignIn = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const userInfo = useSelector((state: RootState) => state.user);
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    return (
        <SignInTemp
            idChange={(text) => {
                setId(text);
            }}
            pwdChange={(text) => {
                setPwd(text);
            }}
            onLogin={() => {
                
                if (userInfo.id == id && userInfo.pwd == pwd) {
                    //login 성공
                    navigation.navigate('UserInfo');
                } else {
                    //login 실패
                    alertMsg('로그인', '실패 - '+userInfo.id+", "+userInfo.pwd);
                }
            }}
            onSignUp={() => {
                navigation.navigate('SignUp');
            }}
        />
    )
}

export default SignIn;