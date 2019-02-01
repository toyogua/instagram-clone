import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios';
// se importa y se le coloca Autor ya que lo usaremos en varios lugares y Profile tiene un export default
import Autor from './Profile';

const StackHome = StackNavigator({
    Home: {
        screen: Home,
    },
    Autor: {
        screen: Autor,
    },
    Publicacion: {
        screen: Publicacion,
    },
    Comentarios: {
        screen: Comentarios,
    },
});

export { StackHome };