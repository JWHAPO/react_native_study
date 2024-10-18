import React, { Children } from 'react';
import { View, StyleSheet } from 'react-native';

import UserInfoForm from '../organisms/UserInfoForm';
import TitleLabel from '../atoms/TitleLabel';
import CommonImage from '../atoms/CommonImage';


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingTop: 8
    }
});

type UserInfoProps = {
    id: string,
    name: string,
    birth: string,
    etc: string,
    onPress: () => void,
};

const UserInfoTemp = (props: UserInfoProps) => {
    return (
        <View style={styles.container} >
            <TitleLabel label='유저정보' />
            <CommonImage url='https://e7.pngegg.com/pngimages/636/141/png-clipart-computer-icons-user-s-included-miscellaneous-user-profile.png' />
            <UserInfoForm
                id={props.id}
                name={props.name}
                birth={props.birth}
                etc={props.etc}
                onPress={props.onPress}
            />
        </View>
    )
}

export default UserInfoTemp;