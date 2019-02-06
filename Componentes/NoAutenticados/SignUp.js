//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './Formas/SignUpForm';
import { actionRegistro } from '../../Store/ACCIONES';

// create a component
class SignUp extends Component {
    registroDeUsuario = ( values ) =>{
        console.log(values);
        this.props.registro(values);
    };

    render() {
        console.log( this.props.numero );
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <SignUpForm registro={ this.registroDeUsuario }/>
                <Button
                    title='SignIn'
                    onPress={() => { navigation.goBack(); }}
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
        backgroundColor: '#90EE90',
        paddingHorizontal: 16,
    },
});

const mapStateToProps = (state ) => {
    return {
        numero: state.reducerPrueba,
    }
}

const mapDispatchToProps = dispatch  => ({
        registro: ( values ) => {
            dispatch(actionRegistro(values));  
    },
});

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps )(SignUp)