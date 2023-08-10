import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 16, fontWeight: "bold" },
});

const AnotherScreen = ({ route, navigation }) => {
  const { id, message } = route.params;
  return (
    <View style={[styles.container, { backgroundColor: "#edaa25" }]}>
      <Text style={styles.title}>Another Screen</Text>
      <Button
        title="Back to Home"
        color={"#c1272d"}
        onPress={() => {
          navigation.goBack("Home");
        }}
      ></Button>
      <Text>{id + " " + message}</Text>
    </View>
  );
};

export default AnotherScreen;
