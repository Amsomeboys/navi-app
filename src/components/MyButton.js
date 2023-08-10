import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 12,
    justifyContent: "center",
    alignContent: "center",
    marginVertical: 10,
  },
  text: { color: "#fff", fontSize: 18 },
});

const MyButton = ({ title, color = "#048abf", onPress }) => {
  return (
    <>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: color }]}
        onPress={onPress}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default MyButton;
