import React, { useState } from 'react';

import SignUpTemp from '../templates/SignUpTemp';


const [name, setName] = useState('');
const [id, setId] = useState('');
const [pwd, setPwd] = useState('');
const [birth, setBirth] = useState('');
const [etc, setEtc] = useState('');

function validInfo() {

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