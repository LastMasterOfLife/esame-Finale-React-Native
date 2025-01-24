import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/Navigation/TabNavigation';
import AppNavigator from './src/Navigation/TabNavigation'

export default function App() {
  return (
    
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
    
  );
}
