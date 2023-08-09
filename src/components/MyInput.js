import { View, TextInput, StyleSheet } from 'react-native';

const MyInput = ({ placeholder, ...props }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder={placeholder} style={styles.input} {...props} />
    </View>
  );
};
const styles = StyleSheet.create({
  input: { fontSize: 16 },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
});
export default MyInput;
