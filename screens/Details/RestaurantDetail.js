import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ImageBackground,
  StatusBar,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
// import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import HeaderImageScrollView, {
  TriggeringView,
  ImageHeaderScrollView,
} from "react-native-image-header-scroll-view";

const RestaurantDetail = ({ route }) => {
  const item = route.params.item;
  const MIN_HEIGHT = 90;
  const maxHeight = 250;

  return (
    <ImageHeaderScrollView
      maxHeight={200}
      minHeight={MIN_HEIGHT}
      maxOverlayOpacity={0.6}
      minOverlayOpacity={0.6}
      renderHeader={() => <Header item={item} />}
      renderFixedForeground={() => <RenderForeground />}
    >
      <View style={{ height: 1000 }}>
        <TriggeringView>
          <View>
            <Headline item={item} />
          </View>
        </TriggeringView>
      </View>
      <StatusBar
        barStyle={"light-content"}
        translucent={true}
        backgroundColor="transparent"
      />
    </ImageHeaderScrollView>
  );
};

const Headline = ({ item }) => {
  return (
    <View className="py-2">
      <View className="px-4 flex-row justify-between">
        <View className="flex-1">
          <Text className="text-2xl capitalize font-bold tracking-wider">
            {item?.name}
          </Text>
          <Text className="text-base text-gray-600 capitalize tracking-wider">{`delivery ${item?.deliveryTime}mins`}</Text>
        </View>
        <View className="flex-row items-center">
          <Ionicons name="star-sharp" size={15} color={"black"} />
          <Text className="font-bold text-sm">{item?.rating}</Text>
        </View>
      </View>
      <View className="py-1">
        <TouchableOpacity
          activeOpacity={1}
          className="px-4 py-2 items-center flex-row justify-between"
        >
          <View className="flex-row items-center">
            <Ionicons name="warning-outline" size={15} color={"#4b5563"} />
            <Text className="text-base text-gray-600 mx-3">
              Allerges and contact details
            </Text>
          </View>
          <Ionicons
            name="chevron-forward-outline"
            size={15}
            color={"#4b5563"}
          />
        </TouchableOpacity>
        <View className="h-0.5 w-full bg-gray-200" />
      </View>
    </View>
  );
};

const RenderForeground = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingTop: StatusBar.currentHeight + 10,
      }}
      className="flex-row items-center justify-center mx-4 "
    >
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={25} color="#fff" />
      </TouchableOpacity>
      <View className="flex-1"></View>
    </View>
  );
};

const Header = ({ item }) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={{ uri: item.thumbnail }}
      className="w-full h-full"
    >
      <SafeAreaView className="px-5"></SafeAreaView>
    </ImageBackground>
  );
};

export default RestaurantDetail;

// name
// deliveryTime
// rating
