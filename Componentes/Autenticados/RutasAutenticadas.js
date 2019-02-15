import { TabNavigator } from 'react-navigation';
import { StackHome } from './StackHome';
import Add from './Add';
import { StackSearch } from './StackSearch';
import Profile from './Profile';
import { StackFollow } from './StackFollow';
import { StackAdd } from './StackAdd';


const RutasAutenticadas = TabNavigator({
    Home: {
        screen: StackHome,
    },
    Search: {
        screen: StackSearch,
    },
    Add: {
        screen: StackAdd,
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