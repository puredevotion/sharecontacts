import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

const { Navigator, Screen } = createBottomTabNavigator();

const MainNavigation = ({ navigation, state }) =>
(
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Home" />
    <BottomNavigationTab title="Profile" />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <MainNavigation {...props} />}>
    <Screen name='Home' component={HomeScreen} />
    <Screen name='Profile' component={ProfileScreen} />
  </Navigator>
)

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
)
