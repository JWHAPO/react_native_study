/**
 * Sample React Native App
 *
 * @format
 */

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor, Store } from './modules/redux/Store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NativeModules,
  Button,
  Text,
  View
} from 'react-native';

import BaseScreen from './scr/pages/BaseScreen';
import SignIn from './scr/components/pages/SignIn';
import SignUp from './scr/components/pages/SignUp';
import UserInfo from './scr/components/pages/UserInfo';

export type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
  SignUp: undefined;
  UserInfo: undefined;
  BaseScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Root = () => {

  return (
    <NavigationContainer>
      <Provider store={Store}>
        <PersistGate persistor={Persistor}>
          <RootStack.Navigator initialRouteName='BaseScreen'>
            <RootStack.Screen name='BaseScreen' component={BaseScreen} />
            <RootStack.Screen name='SignIn' component={SignIn} />
            <RootStack.Screen name='SignUp' component={SignUp} />
            <RootStack.Screen name='UserInfo' component={UserInfo} />
          </RootStack.Navigator>
        </PersistGate>
      </Provider>
    </NavigationContainer>

  );
};

export default Root;
