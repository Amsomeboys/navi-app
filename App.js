import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Next >>"
        onPress={() => navigation.navigate('Next')}
      ></Button>
    </View>
  );
};
const NextScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Next Screen</Text>
    </View>
  );
};
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Next" component={NextScreen} />
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
          name="Home"
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B7BF99',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: 16, fontWeight: 'bold' },
  input: {
    height: 40,
    margin: 12,
    width: 400,
    borderWidth: 1,
    padding: 10,
  },
});
export default App;
