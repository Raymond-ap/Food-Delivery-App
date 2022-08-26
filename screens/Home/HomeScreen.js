import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { FeaturedRow, HorizontalView } from "../../components";


const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FeaturedRow label={"top related"} render={<HorizontalView/>} />
        <FeaturedRow label={"new on foodIn"} render={<HorizontalView/>} />
        <FeaturedRow label={"all restaurant on foodIn"} disabled />
      </ScrollView>
      <StatusBar style="dark" translucent={false} backgroundColor={"#fff"} />
    </SafeAreaView>
  );
};

const Header = () => {
  return (
    <View className="bg-white w-full py-2 px-4 flex-row justify-between items-center">
      <TouchableOpacity activeOpacity={0.9} className="flex-1 flex-row items-center">
        <Ionicons name="location-outline" size={18} color="#f87171" />
        <Text className="capitalize text-sm px-1">select location here</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8}>
        <Ionicons name="cart-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
