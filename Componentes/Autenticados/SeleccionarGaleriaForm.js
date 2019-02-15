import React, { component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = ( props ) => {
    return  (
    <View>
        <TextInput placeholder={props.ph}
        onChangeText={props.input.onChange }
        value={props.input.value}
        keyboardType= "default"
        autoCapitalize= 'none'
        onBlur={props.input.onBlur}
        /> 
        <View/>
       {props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>} 
    </View> );
   
};

const fieldImagen = props => (
    <View>
        <View>
            {
                props.meta.touched && 
                props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>
            }
        </View>
    </View>
)

const validate = ( values, props ) => {
    const errors = {};
    if(!props.imagen){
        errors.imagen = 'imagen es requerido';
    }
    if( values.texto && values.texto.length > 140 ){
        errors.texto = 'Debe ser menor de 140 caracteres';
    }

    return errors;
}

const SeleccionarGaleriaForm = props  => (
        <View style={styles.container}>
            <Field name='imagen' component={fieldImagen}/>
            <Field name="texto" component={ fieldNombre } ph="Texto de la imagen" />
            <Button 
                title="Registrar"
                onPress= { 
                    props.handleSubmit(
                    
                    props.registro
                     )
                }
            />
        </View>
)

const styles = StyleSheet.create({
    container:{
        flex: 3,
    },
    textInput:{
        marginHorizontal: 16,
    },
    errors: {
        color: '#FF0000',
    }
});

export default reduxForm({
    form: 'SeleccionarGaleriaForm',
    validate,
})(SeleccionarGaleriaForm);