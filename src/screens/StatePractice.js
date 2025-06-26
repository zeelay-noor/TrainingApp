import { View, TextInput, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar"; // Corrected import

export default function StatePractice() {
  // Fixed function name
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter some text"
        placeholderTextColor="#999" // Corrected prop name
      />
      <StatusBar style="auto" /> {/* Corrected component */}
    </View>
  );
}

const styles = StyleSheet.create({
  // Corrected StyleSheet
  container: {
    flex: 1, // Fixed property
    justifyContent: "center", // Fixed spelling
    alignItems: "center",
    backgroundColor: "red",
  },
  input: {
    height: 40,
    width: "80%", // Fixed percentage sign
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10, // Fixed spelling
    marginBottom: 20,
    backgroundColor: "white",
  },
});
