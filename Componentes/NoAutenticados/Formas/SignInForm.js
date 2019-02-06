import React, { component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = ( props ) => {
    return  (
    <View style={styles.textInput}>
        <TextInput placeholder={props.ph}
        onChangeText={props.input.onChange }
        value={props.input.value}
        keyboardType= {props.input.name === 'correo'? 'email-address': 'default'}
        autoCapitalize= 'none'
        secureTextEntry={!!(props.input.name === 'password' || props.input.name === 'confirmacion')}
        onBlur={props.input.onBlur}
        /> 
        <View style={styles.linea}/>
       {props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>} 
    </View> );
   
};

const validate = ( values) => {
    const errors = {};
    if(!values.nombre){
        errors.nombre = 'requerido';
    }else if ( values.nombre.length < 5 ){
        errors.nombre = 'deben ser al menos 5 caracteres';
    }else if ( values.nombre.length > 10 ){
        errors.nombre = 'debe ser menor de 10 caracteres';
    }

    if (!values.correo){
        errors.correo= 'requerido'
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)){
        errors.correo='correo invalido';
    }

    if(!values.password){
        errors.password='requerido';
    }else if(values.password.length < 5){
        errors.password = 'deben ser al menos 5 caracteres';
    }else if(values.password.length > 15){
        errors.password = 'debe ser menor de 15 caracteres';
    }

    if(!values.confirmacion ){
        errors.confirmacion = 'requerido';
    }else if( values.password !== values.confirmacion){
        errors.confirmacion = 'el passworde debe coincidir';
    }

    return errors;
}

const SignInForm = ( props ) => {
    return (
        <View>
            <Field name="correo" component={ fieldNombre } ph="correo@correo.com" />
            <Field name="password" component={ fieldNombre } ph="******" />
            <Button 
                title="SignIn"
                onPress= { props.handleSubmit( props.login) }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textInput:{
        marginBottom: 16,
    },
    linea: {
        backgroundColor: '#DCDCDC',
        height: 2,
    },
    errors: {
        color: '#FF0000',
    },
});

export default reduxForm({
    form: 'SignInForm',
    validate,
})(SignInForm);