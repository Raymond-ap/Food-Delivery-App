import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Onboarding, AddressScreen, RestaurantDetail, RestaurantInfo } from "./screens";
import { TailwindProvider } from "tailwindcss-react-native";
import TabNavigator from "./navigation/TabNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator
          initialRouteName="Onboarding"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Home" component={TabNavigator} />
          <Stack.Screen
            options={{
              presentation: "modal",
              animationTypeForReplace: "push",
            }}
            name="SetAddress"
            component={AddressScreen}
          />
            <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
            <Stack.Screen name="RestaurantInfo" component={RestaurantInfo} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
