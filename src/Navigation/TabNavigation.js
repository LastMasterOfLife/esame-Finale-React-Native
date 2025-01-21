
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import FavouritesScreen from '../Screens/FavouritesScreen';

const Tab = createBottomTabNavigator();

export default function MyTabs(){
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen}/>
      <Tab.Screen name='Favourites' component={FavouritesScreen}/>
    </Tab.Navigator>
  );
}