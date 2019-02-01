//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './Formas/SignUpForm';

// create a component
class SignUp extends Component {
    render() {
        console.log( this.props.numero );
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>SignUp</Text>
                <SignUpForm/>
                <TextInput
                    placeholder='correo@correo.com'
                />
                <Button
                    title='SignIn'
                    onPress={() => { navigation.goBack(); }}
                />
                <Button
                    title='Aumentar'
                    onPress={ this.props.aumentar }
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

const mapStateToProps = (state ) => {
    return {
        numero: state.reducerPrueba,
    }
}

const mapDispatchToProps = (dispatch ) => {
    return {
        aumentar: () => {
            dispatch({type: 'AUMENTAR_REDUCER_PRUEBA'});
        }
    }
}
//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps )(SignUp)