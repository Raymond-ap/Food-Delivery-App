import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

const DUMMY_CATEGORY = [
  {
    name: "lauch",
  },
  {
    name: "casual",
  },
  {
    name: "daily menu",
  },
  {
    name: "fast food",
  },
  {
    name: "breakfast",
  },
  {
    icon: "pizza-outline",
    name: "pizza",
  },
  {
    name: "brunch",
  },
  {
    name: "dessert",
  },
  {
    name: "dinner",
  },
  {
    name: "burger",
  },
  {
    name: "chinese",
  },
  {
    name: "italian",
  },
  {
    name: "shawarma",
  },
];

const SearchScreen = () => {
  const [showSearchScreen, setShowSearchScreen] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");

  return (
    <SafeAreaView className="flex-1 bg-white">
      {showSearchScreen ? (
        <RenderSearchScreen
          setShowSearchScreen={setShowSearchScreen}
          searchText={searchText}
          setSearchText={setSearchText}
        />
      ) : (
        <InitialScreen
          setShowSearchScreen={setShowSearchScreen}
          searchText={searchText}
          setSearchText={setSearchText}
        />
      )}
      <StatusBar style="dark" translucent={false} backgroundColor={"#fff"} />
    </SafeAreaView>
  );
};

const RenderSearchScreen = ({
  setShowSearchScreen,
  setSearchText,
  searchText,
}) => {
  return (
    <View className="flex-1">
      <View
        style={{
          elevation: 5,
        }}
        className="px-4 pt-2 bg-white shadow-black flex-row items-center"
      >
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setShowSearchScreen(false)}
        >
          <Ionicons name="arrow-back" size={20} color="#4b5563" />
        </TouchableOpacity>
        <TextInput
          className="mx-1 flex-1 px-4 py-3 text-base"
          placeholder="Restaurants, food, or cuisine"
          autoFocus
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
      </View>
    </View>
  );
};

const InitialScreen = ({ setShowSearchScreen, setSearchText }) => {
  return (
    <View className="flex-1 bg-white">
      <Header setShowSearchScreen={setShowSearchScreen} />
      <FlatList
        data={DUMMY_CATEGORY}
        ListHeaderComponent={
          <View className="px-4 py-2">
            <Text className="text-lg font-bold capitalize tracking-widest text-black">
              popular categories
            </Text>
          </View>
        }
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <CategoryItem item={item} setSearchText={setSearchText} setShowSearchScreen={setShowSearchScreen} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const CategoryItem = ({ item, setShowSearchScreen, setSearchText }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setSearchText(item.name);
        setShowSearchScreen(true);
      }}
      activeOpacity={0.9}
      className="px-4  my-1 py-3 flex-row items-center"
    >
      {item.icon && (
        <View className="mr-2">
          <Ionicons
            name={item.icon || "fast-food-outline"}
            size={20}
            color="#f87171"
          />
        </View>
      )}
      <Text className="text-base capitalize text-black">{item?.name}</Text>
    </TouchableOpacity>
  );
};

const Header = ({ setShowSearchScreen }) => {
  return (
    <View className="px-4 pt-2 bg-white">
      <Text className="text-xl font-bold capitalize tracking-wider text-black">
        search
      </Text>
      <View className="flex-row items-center mt-4 px-2 bg-[#f3f4f6] rounded-md">
        <Ionicons name="search" size={20} color="#ccc" />
        <TextInput
          className="flex-1 px-4 py-3 text-base"
          placeholder="Restaurants, food, or cuisine"
          onPressIn={() => setShowSearchScreen(true)}
        />
      </View>
    </View>
  );
};

export default SearchScreen;
