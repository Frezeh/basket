import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { LoginProvider, useLoginContext } from "./src/provider/LoginProvider";
import { LoginScreenStack } from "./src/navigation/StackNavigation";
import { BottomTabNavigator } from "./src/navigation/BottomNavigation";

export default function AppWrapper() {
  return (
    <LoginProvider>
      <App />
    </LoginProvider>
  );
}

function App() {
  const { isAuthenticated } = useLoginContext();

  console.log(isAuthenticated);
  return (
    <>
      <NavigationContainer>
        {!isAuthenticated ? <LoginScreenStack /> : <BottomTabNavigator />}
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
