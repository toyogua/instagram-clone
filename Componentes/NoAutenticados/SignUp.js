//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './Formas/SignUpForm';
import { actionRegistro, actionCargarImagenSignUp, actionLimpiarImagenSignUp } from '../../Store/ACCIONES';
import SeleccionarImagen  from '../SeleccionarImagen';
import { blur } from 'redux-form';

// create a component
class SignUp extends Component {

    componentWillUnmount(){
        this.props.limpiarImagen();
    }

    registroDeUsuario = ( values ) =>{
        this.props.registro(values);
    };

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
            <SeleccionarImagen imagen={ this.props.imagen.imagen } cargar={ this.props.cargarImagen}/>
                <SignUpForm registro={ this.registroDeUsuario } imagen={ this.props.imagen.imagen }/>
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

const mapStateToProps = state  => ({

        numero: state.reducerPrueba,
        imagen: state.reducerImagenSignUp,

});

const mapDispatchToProps = dispatch  => ({
        registro: ( values ) => {
            dispatch(actionRegistro(values));  
    },
    cargarImagen: (imagen) => {
        // dispatch({type: CONSTANTES.CARGAR_IMAGEN_SIGNUP, imagen });
        dispatch(actionCargarImagenSignUp(imagen));
        dispatch(blur('SignUpForm', 'imagen', Date.now()));
    },
    limpiarImagen: () => {
        // dispatch({type: CONSTANTES.LIMPIAR_IMAGEN_SIGNUP});
        dispatch(actionLimpiarImagenSignUp());
        dispatch(blur('SignUpForm', 'imagen', Date.now()));
    }
});

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps )(SignUp)