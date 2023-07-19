import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import LoginInput from "./components/LoginInput";

const { height, width } = Dimensions.get("window");

export default function Login() {
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

      <View style={{ width: width * 0.6, gap: 10 }}>
        <Text style={styles.textTitle}>Log into your account</Text>
        <Text style={styles.textSubtitle}>
          Enter your email and password to access your account or create an
          account
        </Text>
      </View>

      <LoginInput />

      <View style={styles.bottomContainer}>
        <TouchableOpacity>
          <Text style={styles.forget}>Forget password</Text>
        </TouchableOpacity>

        <Text style={styles.subdued}>- Or continue with -</Text>

        <View style={styles.row}>
          <TouchableOpacity style={styles.card}>
            <Ionicons name="logo-facebook" size={20} color="blue" />
            <Text style={[styles.textTitle, { fontSize: 14 }]}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Ionicons name="logo-google" size={20} />
            <Text style={[styles.textTitle, { fontSize: 14 }]}>Google</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Text style={[styles.subdued, { fontSize: 16 }]}>
            Don't have an account?
          </Text>
          <TouchableOpacity>
            <Text style={styles.signUp}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
    gap: 20,
  },
  headerContainer: {
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  icon: {
    width: 35,
    height: 35,
    borderRadius: 100,
    backgroundColor: "#EF820D",
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    color: "#202A44",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  bottomContainer: {
    display: "flex",
    gap: 20,
    alignItems: "center",
  },
  textSubtitle: {
    color: "rgba(32, 42, 68, 0.7)",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  card: {
    borderColor: "#202A44",
    borderWidth: 1,
    borderRadius: 5,
    width: width * 0.35,
    height: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  forget: { color: "#F9A602", textDecorationLine: "underline", fontSize: 16 },
  signUp: { color: "#F9A602", fontWeight: "bold", fontSize: 16 },
  subdued: { color: "rgba(32, 42, 68, 0.7)", fontWeight: "500" },
});
