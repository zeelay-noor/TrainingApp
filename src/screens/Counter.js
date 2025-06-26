// Counter.js
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React, { useState } from "react";
import Button from "../components/Button"; // Make sure path is correct

export default function Counter() {
  const [count, setCount] = useState(0);
  const incrementValue = 1;

  function onAddPress() {
    setCount(count + incrementValue);
  }

  function onSubtractPress() {
    if (count - incrementValue >= 0) {
      setCount(count - incrementValue);
    }
  }

  return (
    <ImageBackground
      source={{
        uri: "https://i.pinimg.com/736x/ea/b0/0b/eab00b4e63c53ba697ff038f1b60d96e.jpg",
      }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.box}>
          <Button title="-" onPress={onSubtractPress} />
          <Text style={styles.counterText}>{count}</Text>
          <Button title="+" onPress={onAddPress} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "80%",
    height: "30%",
    backgroundColor: "rgba(70, 21, 98, 0.7)",
    borderRadius: 10,
    padding: 20,
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  counterText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginHorizontal: 20,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
