import { StyleSheet, Text, View } from "react-native";

export default function DummyScreen() {
  return (
    <View style={styles.container}>
      <Text>Dummy Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
