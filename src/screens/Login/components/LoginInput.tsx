import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { storeData } from "../../../utils/storage";
import { useLoginContext } from "../../../provider/LoginProvider";

export type Profile = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
};

const { width } = Dimensions.get("window");

export default function LoginInput() {
  const { setIsAuthenticated } = useLoginContext();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [secured, setSecured] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  async function LogInUser() {
    try {
      setLoading(true);
      const request = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const user: Profile = await request.json();

      if (user?.token) {
        setLoading(false);
        storeData<Profile>("profile", user);
        setIsAuthenticated(true);
      } else {
        setLoading(false);
        Alert.alert("Failed to Login");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <>
      <View style={styles.input}>
        <Ionicons name="mail-outline" size={20} color="#F9A602" />
        <TextInput
          onChangeText={(text) => setUsername(text)}
          style={styles.textInput}
        />
      </View>

      <View style={[styles.input, { justifyContent: "space-between" }]}>
        <View style={styles.row}>
          <Ionicons name="key-outline" size={20} color="#F9A602" />
          <TextInput
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={secured}
            style={styles.textInput}
          />
        </View>
        <Ionicons
          name={secured ? "eye-off-outline" : "eye-outline"}
          size={20}
          color="#F9A602"
          onPress={() => setSecured(!secured)}
        />
      </View>

      <View style={{ alignSelf: "flex-start" }}>
        <BouncyCheckbox
          size={20}
          fillColor="rgba(32, 42, 68, 0.5)"
          unfillColor="#FFFFFF"
          text="Remember me"
          innerIconStyle={{ borderRadius: 0 }}
          iconStyle={{
            borderRadius: 0,
            borderWidth: 1.5,
            borderColor: "rgba(32, 42, 68, 0.5)",
          }}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={LogInUser}>
        {loading ? (
          <ActivityIndicator size={"small"} color="white" />
        ) : (
          <Text style={{ color: "white" }}>Login</Text>
        )}
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "#F9A602",
    borderBottomWidth: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  button: {
    width: width * 0.8,
    height: 40,
    borderRadius: 7,
    backgroundColor: "#202A44",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  textInput: {
    paddingLeft: 10,
    width: width * 0.7,
    color: "rgba(32, 42, 68, 2)",
  },
});
