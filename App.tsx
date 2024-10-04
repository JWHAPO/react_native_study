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

import CommonInputBox from './scr/components/molecules/CommonInputBox';
import BottomButton from './scr/components/atoms/BottomButton';

import Alphabet from './scr/components/atoms/\bAlphabetText';


const Word = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [result, setResult] = useState('');

  return (
    <View >
      <CommonInputBox hint='이름을 입력하세요.' labelName='이름' inputValue={text1} inputChange={(text) => {
        setText1(text);
      }}  />
      <CommonInputBox hint='나이을 입력하세요.' labelName='나이' inputValue={text2} inputChange={(text) => {
        setText2(text);
      }} />
      <CommonInputBox hint='취미를 입력하세요.' labelName='취미' inputValue={text3} inputChange={(text) => {
        setText3(text);
      }} />
      <BottomButton title='저장' onPress={()=>{
          setResult(text1+","+text2+","+text3);
          setText1('');
          setText2('');
          setText3('');
      }} />
      <Alphabet color='gray' name={result} />
      
    </View>
  );
};

export default Word;
