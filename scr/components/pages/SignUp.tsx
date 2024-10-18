import React, { useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { setUser } from '../../../modules/redux/slice/UserSlice';
import SignUpTemp from '../templates/SignUpTemp';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import {
    Alert
} from 'react-native';
import { RootStackParamList } from '../../../App';


const alertMsg = (title: string, description: string) =>
    Alert.alert(title, description, [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

const SignUp = () => {

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [birth, setBirth] = useState('');
    const [etc, setEtc] = useState('');

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const dispatch = useDispatch()

    return (
        <SignUpTemp
            nameChange={(text) => {
                setName(text);
            }}
            idChange={(text) => {
                setId(text);
            }}
            pwdChange={(text) => {
                setPwd(text);
            }}
            birthChange={(text) => {
                setBirth(text);
            }}
            etcChange={(text) => {
                setEtc(text);
            }}
            onPress={() => {

                //위에는 valid

                const result1 = dispatch(setUser({
                    name: name,
                    id: id,
                    birth: birth,
                    pwd: pwd,
                    etc: etc
                }));

                //저장되었습니다 > 로그인 페이지로 이동

                navigation.navigate('SignIn');
            }}
        />
    )
}

export default SignUp;