import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const DUMMY_DATA = [1, 2, 3, 4, 5, 6];
const HorizontalView = ({ data }) => {
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DUMMY_DATA}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <CardItem />}
      />
    </View>
  );
};

const CardItem = () => {
  return (
    <TouchableOpacity activeOpacity={1} className="w-80 mx-2">
      <ImageBackground
      imageStyle={{ borderRadius: 10 }}
      source={{uri: "https://media-cdn.tripadvisor.com/media/photo-s/1b/99/44/8e/kfc-faxafeni.jpg"}}
      className="h-32 w-full relative rounded-lg object-cover">
        <View className="absolute top-2 left-2">
          <View className="bg-white ite py-1 px-2 items-center justify-center rounded-full shadow-sm">
            <Text className="text-sm tracking-widest font-semibold text-red-500">
              -30%
            </Text>
          </View>
        </View>
        <View className="absolute bottom-2 right-2">
          <View className="bg-white py-2 px-4 items-center justify-center rounded-full shadow-sm">
            <Text className="text-sm tracking-widest font-semibold">
              20 - 24 mins
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View className="my-1">
        <View className="flex-row justify-between items-center">
          <Text className="font-bold text-base capitalize flex-1">
            Papa's Pizza
          </Text>
          <View className="flex-row items-center">
            <Ionicons name="star-sharp" size={15} color={"black"} />
            <Text className="font-bold text-sm">4.5</Text>
          </View>
        </View>
        <Text className="text-base">GHC 10.00</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalView;
