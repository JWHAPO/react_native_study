import React from 'react';
import {
    Text,
    View
} from 'react-native';


type AlphabetProps = {
    name: string,
    color: string;
  };

const Alphabet = (props: AlphabetProps) => {
    return (
        <View>
            <Text style={{color: props.color}}>{props.name}</Text>
        </View>
    );
  };

export default Alphabet; 