import { takeEvery, call } from 'redux-saga/effects';
import { auntenticacion, baseDatos } from '../Servicios/Firebase';
import CONSTANTES from '../../Store/CONSTANTES';

const registroEnFirebase = ( values ) => auntenticacion.createUserWithEmailAndPassword(values.correo, values.password)
                        // Handle Errors here.
                        .then(success => success.toJSON() );

const registroEnBaseDeDatos = ({uid, email, nombre }) => baseDatos.ref(`usuarios/${ uid }`).set({
                                                             nombre,
                                                             email,
                                                        });

function* sagaRegistro( values ) {
    try {
        
        const registro=  yield call( registroEnFirebase, values.datos );
         //Destructuramos el objeto registro
         const { email, uid } = registro;
         const { datos: { nombre } } = values;

         yield call( registroEnBaseDeDatos, { uid, email, nombre } );
    } catch (error) {
        console.log(error);
    }

}

const loginEnFirebase = ({correo, password}) => auntenticacion.signInWithEmailAndPassword(correo, password)
.then((success) => success.toJSON() );

function* sagaLogin(values) {
    try {
        
        console.log(values);
        const resultado= yield call( loginEnFirebase, values.datos );
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

// funcion generadora
export default function* funcionPrimaria(){
    yield takeEvery(CONSTANTES.REGISTRO, sagaRegistro );
    yield takeEvery(CONSTANTES.LOGIN, sagaLogin );
}