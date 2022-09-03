import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketTotal,
} from "../../redux/slice/BasketSlice";
import { truncate } from "../../utils";
import StepIndicator from "react-native-step-indicator";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { selectRestaurant } from "../../redux/slice/RestaurantSlice";
import { useNavigation } from "@react-navigation/native";

const customStyles = {
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#189242",
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: "#189242",
  stepStrokeUnFinishedColor: "#ccc",
  separatorFinishedColor: "#189242",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#189242",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: "#ccc",
  stepIndicatorLabelFinishedColor: "#000",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#ccc",
  labelSize: 20,
  currentStepLabelColor: "#ccc",
  stepIndicatorSize: 30,
  labelAlign: "flex-start",
};

export default function DeliveryScreen() {
  const basketItems = useSelector(selectBasketItems);
  const [uniqueBaskerItems, setUniqueBasketItems] = useState([]);
  const basketTotal = useSelector(selectBasketTotal);
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation()

  const labels = [
    "Restaurant has accepted your order",
    "Preparing your order",
    "Looking for a courier",
    "Courier on the way to you",
    "Courier has arrived",
    "Order delivered",
  ];
  let currentPosition = 3;

  useMemo(() => {
    const uniqueItems = basketItems.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setUniqueBasketItems(uniqueItems);
  }, [basketItems]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="bg-white py-2 px-4" style={{ elevation: 5 }}>
        <View className="items-center flex-row justify-between">
          <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-sharp" size={25} color={"#000"} />
          </TouchableOpacity>
          <Text className="flex-1 text-center font-bold tracking-widest text-base">
            Bolt Ultils
          </Text>
        </View>
        <Text className="text-center tracking-widest text-sm py-2">
          Courier is on their way to you
        </Text>
      </View>
      <MapView
        className="flex-1"
        initialRegion={{
          latitude: parseInt(restaurant.latitude),
          longitude: parseInt(restaurant.longitude),
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        mapType={"standard"}
      >
        <Marker
          coordinate={{
            latitude: parseInt(restaurant.latitude),
            longitude: parseInt(restaurant.longitude),
          }}
          title={restaurant.name}
          description={restaurant.description}
          identifier="origin"
          pinColor="#000"
        />
      </MapView>
      {/* <ScrollView showsVerticalScrollIndicator={false} className="flex-1 px-4 py-8">
        <View className="flex-row items-center justify-between">
          <Text className="text-5xl font-bold tracking-widest">03:25</Text>
          <Text className="text-base text-gray-600 font-bold tracking-widest w-40 text-right">
            Estimated time of delivery
          </Text>
        </View>
        <View className="my-4">
          <Text className="text-lg font-bold tracking-widest">
            Order progress
          </Text>
          <View className="py-2">
            <StepIndicator
              customStyles={customStyles}
              currentPosition={currentPosition}
              labels={labels}
              direction="vertical"
              renderLabel={({
                position,
                stepStatus,
                label,
                currentPosition,
              }) => {
                return (
                  <Text
                    style={{
                      color: stepStatus === "finished" ? "#189242" : "#ccc",
                      fontSize: 13,
                      fontWeight: "bold",
                    }}
                    className="text-base my-5"
                  >
                    {label}
                  </Text>
                );
              }}
            />
          </View>
        </View>
        <View className="">
          <Text className="text-lg font-bold tracking-widest">
            Order #16a34a
          </Text>
          <View>
            {Object.entries(uniqueBaskerItems).map(([index, items]) => (
              <View
                key={index}
                className="flex-row justify-between py-3 border-b border-gray-200"
              >
                <Text className="text-base text-gray-700 tracking-wider">{`${
                  items.length
                } x ${truncate(items[0]?.name, 25)}`}</Text>
                <View className="items-center">
                  <Text className="text-base text-gray-700 tracking-wider mx-3">{`GH₵ ${truncate(
                    (items[0].price * items.length).toFixed(2),
                    40
                  )}`}</Text>
                </View>
              </View>
            ))}
          </View>
          <Text className="text-lg font-bold tracking-widest">
            Prepare to pay GH₵ {parseInt(basketTotal).toFixed(2)}
          </Text>
        </View>
      </ScrollView>  */}
    </SafeAreaView>
  );
}

{
  /* <SafeAreaView className="flex-1 bg-white">

</SafeAreaView> */
}
