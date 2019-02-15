//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { auntenticacion } from './Store/Servicios/Firebase';
import { RutasAutenticadas } from './Componentes/Autenticados/RutasAutenticadas';
import { RutasNoAutenticadas } from './Componentes/NoAutenticados/RutasNoAutenticadas';
import { actionEstablecerSesion, actionCerrarSesion } from './Store/ACCIONES';

// create a component
class Seleccion extends Component {
    componentDidMount(){
        this.props.auntenticacion();
    }

    render() {
        return (
            <View style={styles.container}>
            { this.props.usuario? <RutasAutenticadas/>: <RutasNoAutenticadas/>
            }
                
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
const mapStateToProps = (state ) => {
    return {
        usuario: state.reducerSesion,
    }
}


const mapDispatchToProps = dispatch  => ({
        auntenticacion: () => {
            auntenticacion.onAuthStateChanged(function(usuario) {
                if (usuario) {
                  // User is signed in.
                    console.log(usuario.toJSON());
                    dispatch(actionEstablecerSesion(usuario));
                } else {
                  // User is signed out.
                  console.log('No existe sesion');
                  dispatch(actionCerrarSesion());
                }
              });
        },
});

export default connect(mapStateToProps, mapDispatchToProps )(Seleccion)
