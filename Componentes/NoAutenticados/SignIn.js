//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SignInForm from './Formas/SignInForm';
import { connect } from 'react-redux';
import { actionLogin} from '../../Store/ACCIONES';

// create a component
class SignIn extends Component {
    signInDeUsuario = ( values ) => {
        this.props.login(values);
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <SignInForm login={ this.signInDeUsuario }/>
                <Button
                    title='SignUp'
                    onPress= { () => { navigation.navigate('SignUp') }}
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

//make this component available to the app

const mapStateToProps = (state ) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch ) => {
    return {
        login: ( datos ) => {
            dispatch(actionLogin(datos));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(SignIn);