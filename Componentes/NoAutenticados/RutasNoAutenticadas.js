import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, Button, View } from 'react-native';

const SignIn = ( props ) => {
    console.log( props );
    // Destructaramos el objeto, le indicamos que busque la propeirda navigation que existe en props
    const { navigation } = props;

    return (<View style={ { flex:1, justifyContent: 'center'}}>
        <Text>Componente SignIn</Text>
        <Button
            title= 'Navegar a SignUp'
            onPress = { () => { navigation.navigate('SignUp') }}
        />
            
    </View>);
};

const SignUp = ( props ) => {
    const { navigation } = props;
    return (<View  style={ { flex: 1, justifyContent: 'center'}}>
                <Text>Componente SignUP</Text>
                <Button
                    title = 'Regresar'
                    onPress = { () => {
                        navigation.goBack();
                    }}
                />
            </View>);
}

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