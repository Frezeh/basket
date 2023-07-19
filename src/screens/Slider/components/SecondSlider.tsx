import { Ionicons } from "@expo/vector-icons";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  navigate: VoidFunction;
};

const { width } = Dimensions.get("window");

export default function SecondSlider(props: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.icon}>
          <Ionicons name="cart-outline" size={25} color="white" />
        </View>
        <Text style={{ fontSize: 30, color: "#EF820D", fontWeight: "700" }}>
          basket
        </Text>
      </View>

      <View style={{ padding: 50, gap: 10 }}>
        <Text style={{ fontSize: 14, color: "#fff", textAlign: "center" }}>
          Welcome to
        </Text>
        <Text
          style={{
            fontSize: 25,
            color: "#fff",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          basket online store
        </Text>
        <Text style={{ fontSize: 14, color: "#fff", textAlign: "center" }}>
          basket is the no 1 online store for both new and used product
        </Text>
      </View>

      <View style={styles.illustration}>
        <Image source={require("../../../../assets/illustration.png")} />
      </View>

      <TouchableOpacity style={styles.button} onPress={props.navigate}>
        <View style={{ flexDirection: "row", gap: 40, alignItems: "center" }}>
          <Text style={{ color: "white" }}>GET STARTED</Text>
          <Ionicons name="arrow-forward" size={25} color="#202A44" />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#202A44",
  },
  headerContainer: {
    paddingTop: 40,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    alignSelf: "center",
  },
  icon: {
    width: 35,
    height: 35,
    borderRadius: 100,
    backgroundColor: "#EF820D",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    bottom: 40,
    width: width * 0.8,
    height: 40,
    borderRadius: 7,
    backgroundColor: "#EF820D",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  text: { fontSize: 25, color: "#fff", fontWeight: "500" },
  bottomText: { color: "#EF820D", fontWeight: "bold", fontSize: 16 },
  illustration: { position: "absolute", bottom: 120 },
});
