// Button.js
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";

export default function Button({ onPress, title }) {
  // Fixed typo in prop name (tittle -> title)
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonCon}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonCon: {
    // Fixed style name casing (ButtonCon -> buttonCon)
    backgroundColor: "rgba(183, 124, 232, 0.8)",
    width: 50,
    height: 50,
    justifyContent: "center",
    padding: 10,
    borderRadius: 25, // Changed to half of width/height for perfect circle
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
