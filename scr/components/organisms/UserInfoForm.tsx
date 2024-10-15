import React from 'react';
import { View, StyleSheet } from 'react-native';

import CommonLabelBox from '../molecules/CommonLabelBox';
import BottomButton from '../atoms/BottomButton';

const styles = StyleSheet.create({
    commonBox: {
        paddingHorizontal: 8,
        paddingTop: 8
    }
});

type UserInfoFormProps = {
    id: string,
    name: string,
    birth: string,
    etc: string,
    onPress: () => void,
};

const UserInfoForm = (props: UserInfoFormProps) => {
    return (
        <View style={styles.commonBox} >
            <CommonLabelBox
                label='ID'
                description={props.id}
            />
            <CommonLabelBox
                label='이름'
                description={props.name}
            />
            <CommonLabelBox
                label='생년월일'
                description={props.birth}
            />
            <CommonLabelBox
                label='자기소개'
                description={props.etc}
            />

            <BottomButton
                title='닫기'
                onPress={props.onPress}
            />
        </View>
    );
}

export default UserInfoForm; 