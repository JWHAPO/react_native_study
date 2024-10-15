import React, { useState } from 'react';

import UserInfoTemp from '../templates/UserInfoTemp';

function validInfo() {

}

const UserInfo = () => {
    return (
        <UserInfoTemp
            id={}
            name={}
            birth={}
            etc={}
            onPress={() => {
                validInfo();
            }}
        />
    )
}

export default UserInfo;