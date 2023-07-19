import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useLoginContext } from "../../provider/LoginProvider";
import { deleteData } from "../../utils/storage";

const { height, width } = Dimensions.get("window");

export default function Account() {
  const { user, setIsAuthenticated } = useLoginContext();

  const handleLogout = () => {
    setIsAuthenticated(false);
    deleteData("Profile");
  };

  return (
    <>
      <SafeAreaView style={styles.header}>
        <View style={styles.body}>
          <View style={styles.icon}>
            <Ionicons name="cart-outline" size={25} color="white" />
          </View>

          <View style={styles.search}>
            <Ionicons name="search" size={15} color="#202A44" />
            <TextInput
              placeholder="Search in basket"
              style={{ paddingLeft: 20, width: width * 0.4 }}
              numberOfLines={1}
            />
          </View>

          <Ionicons name="filter" size={25} color="#EF820D" />
        </View>
      </SafeAreaView>

      <View style={styles.container}>
        <View style={styles.profile}>
          <View
            style={[styles.body, { justifyContent: "flex-start", gap: 20 }]}
          >
            <View style={styles.imageContainer}>
              <Image source={{ uri: user?.image }} style={styles.image} />
            </View>

            <View>
              <Text style={styles.text}>
                {user?.firstName} {user?.lastName}
              </Text>
              <Text style={{ color: "#202A44" }}>{user?.email}</Text>
            </View>
          </View>
        </View>

        <View style={styles.tasks}>
          <View
            style={[styles.body, { gap: 40, justifyContent: "flex-start" }]}
          >
            <Ionicons name="notifications" size={25} color="#EF820D" />
            <TouchableOpacity>
              <Text style={styles.text}>Notification</Text>
            </TouchableOpacity>
          </View>

          <View
            style={[styles.body, { gap: 40, justifyContent: "flex-start" }]}
          >
            <Ionicons name="person-sharp" size={25} color="#EF820D" />
            <TouchableOpacity>
              <Text style={styles.text}>Edit profile</Text>
            </TouchableOpacity>
          </View>

          <View
            style={[styles.body, { gap: 40, justifyContent: "flex-start" }]}
          >
            <Ionicons name="star" size={25} color="#EF820D" />
            <TouchableOpacity>
              <Text style={styles.text}>Wishlist</Text>
            </TouchableOpacity>
          </View>

          <View
            style={[styles.body, { gap: 40, justifyContent: "flex-start" }]}
          >
            <Ionicons name="calculator" size={25} color="#EF820D" />
            <TouchableOpacity>
              <Text style={styles.text}>Order history</Text>
            </TouchableOpacity>
          </View>

          <View
            style={[styles.body, { gap: 40, justifyContent: "flex-start" }]}
          >
            <MaterialIcons name="local-shipping" size={25} color="#EF820D" />
            <TouchableOpacity>
              <Text style={styles.text}>Track order</Text>
            </TouchableOpacity>
          </View>

          <View
            style={[styles.body, { gap: 40, justifyContent: "flex-start" }]}
          >
            <Ionicons name="card" size={25} color="#EF820D" />
            <TouchableOpacity>
              <Text style={styles.text}>Payment option</Text>
            </TouchableOpacity>
          </View>

          <View
            style={[styles.body, { gap: 40, justifyContent: "flex-start" }]}
          >
            <Ionicons name="settings" size={25} color="#EF820D" />
            <TouchableOpacity>
              <Text style={styles.text}>Settings</Text>
            </TouchableOpacity>
          </View>

          <View
            style={[styles.body, { gap: 40, justifyContent: "flex-start" }]}
          >
            <Ionicons name="log-out" size={25} color="#EF820D" />
            <TouchableOpacity onPress={handleLogout}>
              <Text style={styles.text}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#202A44",
    padding: 20,
  },
  body: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    width: 35,
    height: 35,
    borderRadius: 100,
    backgroundColor: "#EF820D",
    justifyContent: "center",
    alignItems: "center",
  },
  search: {
    width: width * 0.6,
    height: 30,
    borderRadius: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  profile: {
    backgroundColor: "#EF820D",
    height: height * 0.25,
    width: width,
    padding: 20,
  },
  tasks: {
    marginTop: -75,
    backgroundColor: "#fff",
    width: width * 0.9,
    flex: 1,
    borderRadius: 10,
    paddingTop: 20,
    paddingRight: 70,
    paddingLeft: 70,
  },
  text: {
    color: "#202A44",
    fontSize: 16,
    fontWeight: "700",
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#FFF",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 40,
    resizeMode: "contain",
  },
});
