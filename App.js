import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnotherScreen from './src/screen/anotherScreen';


const HomeScreen = ({navigation}) =>{
  const [inputValues,setInputValues] = useState('');
  return(
  <View style={styles.container}>
    <Text style={styles.title}>Home Screen</Text>
    <TextInput placeholder='Type Sentence in this Box' style={styles.input}  onChangeText={(values)=>{setInputValues(values)}}/>
    <Button title='Another World' style={{backgroundColor:'#cd1272d'}} onPress={()=>{navigation.navigate('Another',{id:'001',message:inputValues})}}></Button>
  </View>
  )};
const Stack = createNativeStackNavigator();
const App=()=> {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Another" component={AnotherScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: 'center',
  },
  title:{fontSize:16,fontWeight:'bold'}, 
  input: {
    height: 40,
    margin: 12,
    width:400,
    borderWidth: 1,
    padding: 10,
  },
});

export default App