import React, { useState } from 'react';

import SignInTemp from '../templates/SignInTemp';


const [id, setId] = useState('');
const [pwd, setPwd] = useState('');

function login() {

}

const SignIn = () => {
    return (
        <SignInTemp
            idChange={(text) => {
                setId(text);
            }}
            pwdChange={(text) => {
                setPwd(text);
            }}
            onPress={() => {
                login();
            }}
        />
    )
}

export default SignIn;