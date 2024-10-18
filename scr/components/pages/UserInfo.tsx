import React from 'react';

import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../../../modules/redux/RootReducer';

import UserInfoTemp from '../templates/UserInfoTemp';
import { RootStackParamList } from '../../../App';

const UserInfo = () => {
    const userInfo = useSelector((state: RootState) => state.user);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    let userId = userInfo.id;
    let userPw = userInfo.pwd;
    return (
        <UserInfoTemp
            id={userInfo.id}
            name={userInfo.name}
            birth={userInfo.birth}
            etc={userInfo.etc}
            onPress={() => {
                navigation.navigate('SignIn');
            }}
        />
    )
}

export default UserInfo;