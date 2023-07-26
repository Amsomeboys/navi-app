import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnotherScreen from './src/screen/anotherScreen';
import { AntDesign } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const [inputValues, setInputValues] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <TextInput
        placeholder="Type Sentence in this Box"
        style={{
          fontSize: 18,
          padding: 20,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#c43302',
          margin: 10,
          backgroundColor: '#edaa25',
          width: '80%',
        }}
        onChangeText={(values) => {
          setInputValues(values);
        }}
        multiline
        numberOfLines={5}
        // secureTextEntry
        textAlignVertical="top"
      />
      <Button
        title="Another World"
        style={{ backgroundColor: '#cd1272d' }}
        onPress={() => {
          navigation.navigate('Another', { id: '001', message: inputValues });
        }}
      ></Button>
      <Button
        title="Change a Title"
        color="#C43302"
        onPress={() => {
          navigation.setOptions({ headerTitle: inputValues });
        }}
      ></Button>
    </View>
  );
};
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitle: 'หน้าแรก 🏠',
            headerTitleStyle: { fontSize: 26, fontWeight: 'bold' },
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#007172' },
            headerTintColor: '#f4e2de',
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Another"
            component={AnotherScreen}
            options={{
              headerTitle: () => (
                <TouchableOpacity
                  onPress={() => {
                    alert('ด้อมส้ม');
                  }}
                >
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('./assets/orange.jpeg')}
                  />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => {
                    alert('ผู้จัดทำ : จิรภัทร โพธิ์สร้อย');
                  }}
                >
                  <AntDesign
                    name="caretdown"
                    size={24}
                    color="#f4e2de"
                  ></AntDesign>
                </TouchableOpacity>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
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
