import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Ionicons, Entypo } from "@expo/vector-icons";
import { useState } from 'react';
import { calculateDiscountPrice, truncate } from '../utils';

const MenuItem = ({ menuItem, percentage, discount }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <TouchableOpacity
        onPress={() => setIsOpen(true)}
        activeOpacity={0.9}
        className="py-3 my-1 border-t border-gray-300"
      >
        <View className="flex-row">
          <View className="flex-1">
            <Text className="text-base font-bold capitalize tracking-wider">
              {menuItem.name}
            </Text>
            <Text className="text-sm text-gray-600 tracking-wider">
              {truncate(menuItem.description, 60)}
            </Text>
            <View className="py-2 flex-row">
              {/* strike through text */}
              <Text
                className={`text-base text-gray-600 tracking-wider ${
                  discount && "line-through"
                }`}
              >
                {`GH₵ ${parseInt(menuItem.price).toFixed(2)}`}
              </Text>
              {discount && (
                <View className="ml-2 bg-red-700 px-2 rounded-full">
                  <Text className="text-base text-white tracking-wider">
                    {`GH₵ ${calculateDiscountPrice(
                      parseInt(menuItem.price),
                      parseInt(percentage)
                    )}`}
                  </Text>
                </View>
              )}
            </View>
          </View>
          <Image
            source={{ uri: menuItem.thumbnail }}
            className="w-24 h-20 object-cover"
          />
        </View>
        {isOpen && (
          <View className=" mt-2 flex-row items-center">
            <TouchableOpacity
              activeOpacity={0.9}
              className="bg-green-200 rounded-full h-8 w-10 items-center justify-center"
            >
              <Entypo name="minus" size={20} color="#000" />
            </TouchableOpacity>
            <Text className="text-base mx-3">3</Text>
            <TouchableOpacity
              activeOpacity={0.9}
              className="bg-green-200 rounded-full h-8 w-10 items-center justify-center"
            >
              <Entypo name="plus" size={20} color="black" />
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
    );
  };
export default MenuItem