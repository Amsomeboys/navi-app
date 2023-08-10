import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B7BF99",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 16, fontWeight: "bold" },

  text: { color: "#fff", fontSize: 18 },
});

const NextScreen = () => {
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  return (
    <>
      <View style={styles.container}>
        <Text>Next Screen</Text>
        <MyInput
          placeholder="Type something..."
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <MyButton
          title="Submit"
          onPress={() => {
            Alert.alert("Submit", `You entered "${message}"`);
          }}
        />
        <MyButton
          title="Reset"
          color="#f25caf"
          onPress={() => setMessage("")}
        />
        <MyInput
          placeholder="Type something..."
          value={subject}
          onChangeText={(text) => setSubject(text)}
        />

        <MyButton
          title="Drop"
          color="#c1272d"
          onPress={() => {
            Alert.alert("I will drop", `${subject} ha ha ha`);
          }}
        />
      </View>
    </>
  );
};

export default NextScreen;
