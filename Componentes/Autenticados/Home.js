//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image, Dimensions } from 'react-native';
import {connect } from 'react-redux';
import { actionDescargarPublicaciones } from '../../Store/ACCIONES';
import Publicacion from './Publicacion';

// create a component
class Home extends Component {
    
    componentDidMount() {
        this.props.descargarPublicaciones();
    }

    render() {
        console.log('props', this.props);
        const { navigation, autores } = this.props;
        console.log('autores', autores);
        return (
            <View style={styles.container}>
            <FlatList
                data={this.props.publicaciones}
                renderItem={({item, index }) => <Publicacion item={ item } autor={autores[index]}/>}
                ItemSeparatorComponent = {() => <View style={styles.separador}/>}
               
                //  {
                //                     const { width } = Dimensions.get('window');
                //                     const factor = item.width / width;
                //                     const height = item.height / factor;
                //                     return <Image
                //                         source={{uri: item.secure_url}}
                //                         style={{width, height }}
                
                //                     />
        
                //                 }
                
            />
                {/* <Text>Home</Text>
                <Button
                    title='Autor'
                    onPress= { () => { navigation.navigate('Autor')}}
                />
                <Button
                    title='Comentarios'
                    onPress= { () => { navigation.navigate('Comentarios')}}
                /> */}
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
        backgroundColor: '#f9f9f9',
    },
    separador: {
        borderWidth: 1,
        borderColor: '#C0C0C0',
    },
});

const mapStateToProps = state  => ({
  
        publicaciones: state.reducerPublicacionesDescargadas,
        autores: state.reducerAutoresDescargados,
    });


const mapDispatchToProps = (dispatch ) => {
    return {
        descargarPublicaciones: () => {
            dispatch(actionDescargarPublicaciones())
        },
    }
}

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps )(Home);
