//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class Comentarios extends Component {
    // static pertenece a la clase no a la instancia
    // esto se hizo para eliminar la barra de navegacion al estar dentro de Comentarios
    static navigationOptions = {
        tabBarVisible: false,
    };

    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <Text>Comentarios</Text>
                <Button 
                    title = 'Autor'
                    onPress = { () => { navigation.navigate('Autor') }}
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
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Comentarios;
