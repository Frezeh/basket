import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import DummyScreen from "../components/DummyScreen";
import Account from "../screens/Account/Account";
import Login from "../screens/Login/Login";
import Slider from "../screens/Slider/Slider";

const optionStyle = {
  gestureEnabled: true,
  headerShown: false,
};

export type LoginStackParams = {
  Login: undefined;
  Slider: undefined;
};

export type HomeStackParams = {
  HomeScreen: undefined;
};

export type AccountStackParams = {
  AccountScreen: undefined;
};

export type SavedStackParams = {
  SavedScreen: undefined;
};

export type CartStackParams = {
  CartScreen: undefined;
};

export type SliderProps = StackScreenProps<LoginStackParams, "Slider">;
// export type LoginProps = StackScreenProps<LoginStackParams, "Buy">;

const HomeStack = createStackNavigator<HomeStackParams>();
const LoginStack = createStackNavigator<LoginStackParams>();
const AccountStack = createStackNavigator<AccountStackParams>();
const SavedStack = createStackNavigator<SavedStackParams>();
const CartStack = createStackNavigator<CartStackParams>();

const LoginScreenStack = () => {
  return (
    <LoginStack.Navigator screenOptions={optionStyle}>
      <LoginStack.Screen name="Slider" component={Slider} />
      <LoginStack.Screen name="Login" component={Login} />
    </LoginStack.Navigator>
  );
};

const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator screenOptions={optionStyle}>
      <HomeStack.Screen name="HomeScreen" component={DummyScreen} />
    </HomeStack.Navigator>
  );
};

const AccountScreenStack = () => {
  return (
    <AccountStack.Navigator screenOptions={optionStyle}>
      <AccountStack.Screen name="AccountScreen" component={Account} />
    </AccountStack.Navigator>
  );
};

const SavedScreenStack = () => {
  return (
    <SavedStack.Navigator screenOptions={optionStyle}>
      <SavedStack.Screen name="SavedScreen" component={DummyScreen} />
    </SavedStack.Navigator>
  );
};

const CartScreenStack = () => {
  return (
    <CartStack.Navigator screenOptions={optionStyle}>
      <CartStack.Screen name="CartScreen" component={DummyScreen} />
    </CartStack.Navigator>
  );
};

export {
  LoginScreenStack,
  HomeScreenStack,
  AccountScreenStack,
  SavedScreenStack,
  CartScreenStack,
};
