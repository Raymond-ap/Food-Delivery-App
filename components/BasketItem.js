import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { truncate } from "../utils";

const BasketItem = () => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      className="flex-row justify-between items-center py-3 border-b border-gray-200"
    >
      <Text className="text-base text-gray-700 tracking-wider">{`1 x ${truncate(
        "Chicken and chips",
        40
      )}`}</Text>
      <Text className="text-base text-gray-700 tracking-wider">{`GH₵ ${truncate(
        "10.00",
        40
      )}`}</Text>
    </TouchableOpacity>
  );
};

export default BasketItem;
