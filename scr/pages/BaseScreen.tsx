import React, { useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../modules/redux/slice/UserSlice";
import { setLevel } from "../../modules/redux/slice/LevelSlice";
import { RootState } from "../../modules/redux/RootReducer";
import MainInput from "../components/organisms/SignUpForm";
import {
    Text, View
} from 'react-native';

const BaseScreen = () => {
    const [text1, setText1] = useState('');
    const dispatch = useDispatch()

    const setUserInfo = () => {
        const result1 = dispatch(setUser({
            id: "111",
            name: "kjw",
            birth: "1987-10-07",
            etc: 'hello RN'
        }));
        console.log("result1:: ", result1);
    }
    setUserInfo();
    let input1 = '';
    let input2 = '';

    return (
        <View>
            <MainInput
                hint1="아이디를 입력"
                hint2="비밀번호를 입력"
                label1="아이디"
                label2="비밀번호"
                inputChange1={(text) => {
                    setText1(text);
                }}
                inputChange2={(text) => { }}
            ></MainInput>
            <Text>{text1}</Text>
        </View>


    );
}

export default BaseScreen;