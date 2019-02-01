import { TabNavigator } from 'react-navigation';
import { StackHome } from './StackHome';
import Add from './Add';
import { StackSearch } from './StackSearch';
import Follow from './Follow';
import Profile from './Profile';


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
        screen: Follow,
    },
    Profile: {
        screen: Profile,
    },
}, {
    tabBarPosition: '',
},);

export { RutasAutenticadas }; 