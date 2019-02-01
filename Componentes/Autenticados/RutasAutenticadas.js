import { TabNavigator } from 'react-navigation';
import { StackHome } from './StackHome';
import Add from './Add';
import { StackSearch } from './StackSearch';
import Profile from './Profile';
import { StackFollow } from './StackFollow';


const RutasAutenticadas = TabNavigator({
    Home: {
        screen: StackHome,
    },
    Search: {
        screen: StackSearch,
    },
    Add: {
        screen: Add,
    },
    Follow: {
        screen: StackFollow,
    },
    Profile: {
        screen: Profile,
    },
}, {
    tabBarPosition: '',
},);

export { RutasAutenticadas }; 