import React from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f25caf",
  },
  title: {},
  description: {},
});

const RenderItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {item.id}:{item.title}
      </Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

export default RenderItem;
