import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, Button, View } from 'react-native';
import SignIn from './SignIn';
import SignUp from './SignUp';

const RutasNoAutenticadas = StackNavigator({
    SignIn: {
        screen: SignIn,
    },
    SignUp: {
        screen: SignUp,
    },
}, {
   headerMode: 'none',
}, );

export { RutasNoAutenticadas };