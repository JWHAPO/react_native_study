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
import LottieView from 'lottie-react-native';

const { TestModule } = NativeModules;


type CatProps = {
  name: string;
};

const Cat = (props: CatProps) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Give me some foold, please!' : 'Thank you!'}
      />
    </View>
  );
};

const invokeNativeModule = async () => {
  try {
    const result = await TestModule.myNativeMethod('Hello, Native!');
    console.log(result);
  } catch (e) {
    console.error(e);
  }
};

const Cafe = () => {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'center'
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

const LotsOfGreetings = () => {
  invokeNativeModule();

  return (
    <Text />
  );
};



export default Cafe;
