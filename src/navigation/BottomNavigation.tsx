import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
  AccountScreenStack,
  CartScreenStack,
  HomeScreenStack,
  SavedScreenStack,
} from "./StackNavigation";

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return focused ? (
              <Ionicons name="home-outline" size={32} color="#F9A602" />
            ) : (
              <Ionicons name="home-outline" size={32} color="#202A44" />
            );
          }
          if (route.name === "Saved") {
            return focused ? (
              <Ionicons name="star-outline" size={32} color="#F9A602" />
            ) : (
              <Ionicons name="star-outline" size={32} color="#202A44" />
            );
          }
          if (route.name === "Account") {
            return focused ? (
              <Ionicons name="person-outline" size={32} color="#F9A602" />
            ) : (
              <Ionicons name="person-outline" size={32} color="#202A44" />
            );
          }
          if (route.name === "Cart") {
            return focused ? (
              <Ionicons name="cart-outline" size={32} color="#F9A602" />
            ) : (
              <Ionicons name="cart-outline" size={32} color="#202A44" />
            );
          }
        },
        tabBarActiveTintColor: "#F9A602",
        tabBarInactiveTintColor: "#202A44",
        tabBarLabelStyle: { fontSize: 14, fontWeight: "600" },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreenStack} />
      <Tab.Screen name="Saved" component={SavedScreenStack} />
      <Tab.Screen name="Account" component={AccountScreenStack} />
      <Tab.Screen name="Cart" component={CartScreenStack} />
    </Tab.Navigator>
  );
}
