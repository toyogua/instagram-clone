import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { RutasNoAutenticadas } from './Componentes/NoAutenticados/RutasNoAutenticadas'
import Store from './Store/Store';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = { nombre: 'instagram-clone' };
  }
  
  render() {
    return (
      <View style={styles.container}>
      <Provider store= { Store}>
        <RutasNoAutenticadas/>
      </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
