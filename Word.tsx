/**
 * Sample React Native App
 *
 * @format
 */

import React, { useState } from 'react';
import {
  NativeModules,
  Button,
  Text,
  View
} from 'react-native';
import Alphabet from './scr/components/atoms/\bAlphabetText';

const Word = () => {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    }}>
      <Alphabet name='H' color='deepskyblue' />
      <Alphabet name='e' color='blue' />
      <Alphabet name='l' color='grey' />
      <Alphabet name='l' color='skyblue' />
      <Alphabet name='o' color='orange' />

      <Alphabet name='w' color='mediumturquoise' />
      <Alphabet name='o' color='orangered' />
      <Alphabet name='r' color='powderblue' />
      <Alphabet name='l' color='#F2CB61' />
      <Alphabet name='d' color='steelblue' />
      <Alphabet name='!' color='#8041D9' />
    </View>
  );
};

export default Word;
