import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";

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

export default Header