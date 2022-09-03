import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Onboarding,
  AddressScreen,
  RestaurantDetail,
  RestaurantInfo,
  BasketScreen,
  DeliveryScreen,
} from "./screens";
import { TailwindProvider } from "tailwindcss-react-native";
import TabNavigator from "./navigation/TabNavigator";

import { store } from "./redux/store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator
            initialRouteName="Onboarding"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Group>
              <Stack.Screen name="Onboarding" component={Onboarding} />
              <Stack.Screen name="Home" component={TabNavigator} />
            </Stack.Group>
            <Stack.Group
              screenOptions={{
                presentation: "modal",
                animationTypeForReplace: "push",
              }}
            >
              <Stack.Screen
                options={{
                  animation: "slide_from_bottom",
                }}
                name="SetAddress"
                component={AddressScreen}
              />
              <Stack.Screen
                options={{
                  animation: "slide_from_bottom",
                }}
                name="RestaurantInfo"
                component={RestaurantInfo}
              />
              <Stack.Screen
                options={{
                  animation: "simple_push",
                }}
                name="RestaurantDetail"
                component={RestaurantDetail}
              />
              <Stack.Screen
                options={{
                  animation: "slide_from_bottom",
                }}
                name="BasketScreen"
                component={BasketScreen}
              />
              <Stack.Screen
                options={{
                  animation: "fade_from_bottom",
                }}
                name="DeliveryScreen"
                component={DeliveryScreen}
              />
            </Stack.Group>
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
