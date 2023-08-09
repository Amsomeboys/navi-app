import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import MyButton from '../components/MyButton';
import itemList from '../data/itemList.json';
import RenderItem from '../components/renderItem';

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <MyButton
          title="Next >>"
          onPress={() => navigation.navigate('Next')}
        ></MyButton>
        <FlatList
          data={itemList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <RenderItem item={item} />}
        />
        {/* <Button
          title="Next >>"
          onPress={() => navigation.navigate('Next')}
        ></Button> */}
      </View>
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

  text: { color: '#fff', fontSize: 18 },
});
export default HomeScreen;
