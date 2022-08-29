import { View, Text, SafeAreaView, TextInput } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

const SearchScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header />
      <StatusBar style="dark" translucent={false} backgroundColor={"#fff"} />
    </SafeAreaView>
  );
};

const Header = () => {
  return (
    <View className="mx-4 py-2 bg-white">
      <Text className="text-xl font-bold capitalize tracking-wider text-black">
        search
      </Text>
      <View className="flex-row items-center mt-4 px-2 bg-[#f3f4f6] rounded-md">
        <Ionicons name="search" size={20} color="#ccc" />
        <TextInput
          className="flex-1 px-4 py-2 text-base"
          placeholder="Restaurants, food, or cuisine "
        />
      </View>
    </View>
  );
};

export default SearchScreen;
