//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import SeleccionarImagen from '../SeleccionarImagen';
import { actionCargarImagenPublicacion, actionSubirPublicacion, actionLimpiarImagenPublicacion, actionLimpiarSubirPublicacion } from '../../Store/ACCIONES';
import SeleccionarGaleriaForm from './SeleccionarGaleriaForm';
import { blur} from 'redux-form';

// create a component
class SeleccionarGaleria extends Component {
    static   navigationOptions= {
        tabBarVisible: false,
    };

    componentWillUnmount() {
        this.props.limpiarImagen();
    }
    
    componentWillReceiveProps(nextProps){
        if(this.props.estadoSubirPublicacion !== nextProps.estadoSubirPublicacion){
            switch (nextProps.estadoSubirPublicacion) {
                case 'EXITO':
                    console.log('exito');
                    Alert.alert('EXITO', 'La publicacion fue realizada correctamente', [{text: 'Ok', onPress: () => {
                        this.props.limpiarEstadoPublicacion();
                        this.props.navigation.goBack();
                    }}, ]);
                    this.props.navigation.goBack();
                    break;

                    case 'ERROR':
                    console.log('error');
                    Alert.alert('ERROR', 'La publicacion no se realizó, intente nuevamente...', [{
                        text: 'Confirmar',
                        onPress: () => {
                            this.props.limpiarEstadoPublicacion();
                            this.props.navigation.goBack();
                        },
                    }]);
                    break;    
            
                default:
                    break;
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
            <View style={styles.imagen}>
            <SeleccionarImagen imagen={this.props.imagen.imagen} cargar={this.props.cargarImagen} radius />

            </View>
            <View style={styles.texto}>

                <SeleccionarGaleriaForm imagen={this.props.imagen.imagen} registro={(values) =>{ this.props.subirPublicacion(values)}}/>
            </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    imagen: {
        flex: 2,
    },
    texto: {
        flex:2,
    },
});

//make this component available to the app
const mapStateToProps = (state ) => {
    return {
        imagen: state.reducerImagenPublicacion,
        estadoSubirPublicacion: state.reducerExitoSubirPublicacion.estado,
    }
}

const mapDispatchToProps = (dispatch ) => {
    return {
        cargarImagen: ( imagen ) => {
            dispatch(actionCargarImagenPublicacion(imagen));
            dispatch(blur('SeleccionarGaleriaForm', 'imagen', Date.now()));
        },
        subirPublicacion: (values) => {
            dispatch(actionSubirPublicacion(values));
        },
        limpiarImagen: () => {
            dispatch(actionLimpiarImagenPublicacion);
        },
        limpiarEstadoPublicacion: () => {
            dispatch(actionLimpiarSubirPublicacion());
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SeleccionarGaleria)
