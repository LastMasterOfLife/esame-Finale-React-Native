import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import HomeScreen from '../Screens/HomeScreen';
import FavouritesScreen from '../Screens/FavouritesScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Importa il set di icone desiderato

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
          } else if (route.name === 'Detail') {
            iconName = 'favorite';
          }
          return <MaterialIcons name={iconName} size={55} color={color} />;
        },
        tabBarActiveTintColor: 'rgb(2, 80, 50)',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.77)',
    
      })}
    >
      <Tab.Screen name="HOME" component={HomeScreen} />
      <Tab.Screen name="Detail" component={FavouritesScreen} />
    </Tab.Navigator>
  );
}
