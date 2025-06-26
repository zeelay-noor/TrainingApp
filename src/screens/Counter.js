import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

export default function () {
  const ranger = 1;
  const [Count, SetCount] = React.useState(0);
  function onAddPress() {
    SetCount(Count + ranger);
  }
  function onSubtractPress() {
    if (Count - ranger <= 0) return; // Prevent negative count
    SetCount(Count - ranger);
  }
  return (
    <View style={styles.container}>
      <view style={styles.box} />
      <Button title="+" onPress={onAddPress} />
      <Button title="-" onPress={onSubtractPress} />
      <Text style={styles.Countertext}>{Count}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    flexDirection: "horizontal",
    width: "80%",
    height: "30%",
    backgroundColor: "rgb(70, 21, 98)",
    borderRadius: 10,
    padding: 10,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  Countertext: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});
