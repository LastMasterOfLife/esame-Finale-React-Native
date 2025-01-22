import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack'
import { BlurView } from 'expo-blur';
import HomeScreen from '../Screens/HomeScreen';
import FavouritesScreen from '../Screens/FavouritesScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DetailScreen from '../Screens/DetailScreen';
import CategoryScreen from '../Screens/CategoryScreen'

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabelStyle: {
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems:'center',
          marginTop:5
        },
        headerShown: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(76, 168, 133, 0.88)',
          borderTopWidth: 0,
          height: 60,
        },
        tabBarBackground: () => (
          <BlurView tint="light" intensity={150} style={StyleSheet.absoluteFill} />
        ),
        tabBarIconStyle:{
            alignSelf:'center',
            marginTop: 10
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'HOME') {
            iconName = 'home';
          } else if (route.name === 'Favourite') {
            iconName = 'favorite';
          }
          return <MaterialIcons name={iconName} size={35} color={color} />;
        },
        tabBarActiveTintColor: 'rgb(2, 80, 50)',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.77)',
    
      })}
    >
      <Tab.Screen name="HOME" component={AppNavigator} />
      <Tab.Screen name="Favourite" component={FavouritesScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Category' component={CategoryScreen}/>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}
