import React, { useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { setUser } from '../../../modules/redux/slice/UserSlice';
import SignUpTemp from '../templates/SignUpTemp';
import {  }

const [name, setName] = useState('');
const [id, setId] = useState('');
const [pwd, setPwd] = useState('');
const [birth, setBirth] = useState('');
const [etc, setEtc] = useState('');


const alertMsg = (title: string, description: string) =>
    Alert.alert(title, description, [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

function validInfo() {
    const dispatch = useDispatch()

    //위에는 valid

    const result1 = dispatch(setUser({
        id: id,
        pwd: pwd,
        name: name,
        birth: birth,
        etc: etc
    }));

    //저장되었습니다 > 로그인 페이지로 이동

}

const SignUp = () => {
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
                validInfo();
            }}
        />
    )
}

export default SignUp;