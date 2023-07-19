import { Ionicons } from "@expo/vector-icons";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  navigate: VoidFunction;
  handleNextPage: VoidFunction;
};
export default function FirstSlider(props: Props) {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../../../assets/hanger.png")}
    >
      <View>
        <View style={styles.icon}>
          <Ionicons name="cart-outline" size={35} color="white" />
          <Text style={styles.text}>basket</Text>
        </View>

        <Text style={{ fontSize: 25, color: "#fff", fontWeight: "500" }}>
          Start Shopping
        </Text>
        <Text style={[styles.text, { textAlign: "center" }]}>Stay Happy</Text>
        <Text style={[styles.text, { textAlign: "center" }]}>Anytime</Text>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 50,
          alignItems: "center",
        }}
      >
        <Text style={styles.bottomText}>Basket Online Marketplace</Text>
      </View>

      <TouchableOpacity
        style={{
          position: "absolute",
          left: 10,
          bottom: 10,
        }}
        onPress={props.navigate}
      >
        <Text style={styles.bottomText}>Skip</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 10,
          bottom: 10,
        }}
        onPress={props.handleNextPage}
      >
        <Text style={styles.bottomText}>Next</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
  },
  icon: {
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: "#EF820D",
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontSize: 25, color: "#fff", fontWeight: "500" },
  bottomText: { color: "#EF820D", fontWeight: "bold", fontSize: 16 },
});
