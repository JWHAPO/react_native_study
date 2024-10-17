import React, { useState } from 'react';


import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../../modules/redux/RootReducer';

import UserInfoTemp from '../templates/UserInfoTemp';


const UserInfo = () => {
    const userInfo = useSelector((state: RootState) => state.user);
    let userId = userInfo.id;
    let userPw = userInfo.pwd;
    return (
        <UserInfoTemp
            id={userInfo.id}
            name={userInfo.name}
            birth={userInfo.birth}
            etc={userInfo.etc}
            onPress={() => {
                
            }}
        />
    )
}

export default UserInfo;