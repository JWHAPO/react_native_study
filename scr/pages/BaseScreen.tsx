import React from 'react';

import SignIn from '../components/pages/SignIn';
import {
    Text, View
} from 'react-native';

const BaseScreen = () => {

    return (
        <View>
            <SignIn></SignIn>
        </View>
    );
}

export default BaseScreen;