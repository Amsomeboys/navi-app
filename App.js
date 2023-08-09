import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/homeScreen';
import NextScreen from './src/screen/nextScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Next" component={NextScreen} /> */}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#edaa25' },
          tabBarActiveTintColor: '#C43302',
          headerStyle: { backgroundColor: '#0A7373' },
          headerTintColor: '#fff',
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5
                name="home"
                size={size}
                color={color}
              ></FontAwesome5>
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Next"
          component={NextScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5
                name="comment"
                size={size}
                color={color}
              ></FontAwesome5>
            ),
            tabBarBadge: 999,
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
