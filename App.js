import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} />
        <Button title="Add" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 60
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    width: 200
  }
});
