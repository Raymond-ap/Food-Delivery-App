import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  ImageBackground,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HeaderImageScrollView, {
  TriggeringView,
  ImageHeaderScrollView,
} from "react-native-image-header-scroll-view";
import { truncate, calculateDiscountPrice } from "../../utils";


const RestaurantDetail = ({ route }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const item = route.params.item;
  const MIN_HEIGHT = 90;
  const maxHeight = 250;

  console.log(item);

  // Fake loading
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <View className="flex-1">
      <ImageHeaderScrollView
        maxHeight={200}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.7}
        minOverlayOpacity={0.6}
        renderHeader={() => <Header thumbnail={item?.thumbnail} />}
        renderFixedForeground={() => <RenderForeground />}
      >
        <View className="">
          <TriggeringView>
            <View className="">
              <Headline item={item} />
              {isLoading ? (
                <View className="items-center justify-center">
                  <ActivityIndicator size={"large"} color={"#000"} />
                </View>
              ) : (
                <View className="px-4 py-4">
                  <Text className="text-bol text-xl font-bold tracking-wider">
                    Most popular
                  </Text>
                  {item?.menu.map((menuItem, index) => (
                    <MenuItem key={index} menuItem={menuItem} percentage={item?.discountPercent} />
                  ))}
                </View>
              )}
            </View>
          </TriggeringView>
        </View>
        <StatusBar
          barStyle={"light-content"}
          translucent={true}
          backgroundColor="transparent"
        />
      </ImageHeaderScrollView>
      {item.currentStatus !== "open" && <ErrorCard />}
    </View>
  );
};

const MenuItem = ({ menuItem, percentage }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      className="py-3 my-1 border-t border-gray-300 flex-row"
    >
      <View className="flex-1">
        <Text className="text-base font-bold capitalize tracking-wider">
          {menuItem.name}
        </Text>
        <Text className="text-sm text-gray-600 tracking-wider">
          {truncate(menuItem.description, 60)}
        </Text>
        <View className="py-2 flex-row">
          {/* strike through text */}
          <Text className="text-base text-gray-600 tracking-wider line-through">
            {`GH₵ ${parseInt(menuItem.price).toFixed(2)}`}
          </Text>
          <View className="ml-2 bg-red-700 px-2 rounded-full">
          <Text className="text-base text-white tracking-wider">
            {`GH₵ ${calculateDiscountPrice(parseInt(menuItem.price), parseInt(percentage))}`}
          </Text>
          </View>
        </View>
      </View>
      <Image
        source={{ uri: menuItem.thumbnail }}
        className="w-24 h-20 object-cover"
      />
    </TouchableOpacity>
  );
};

const ErrorCard = () => {
  return (
    <View className="mx-2">
      <View className="absolute bottom-5 h-12 items-center justify-center rounded-lg shadow-md bg-opacity-60 bg-gray-800 w-full">
        <Text className="text-sm text-white tracking-wider font-bold">
          Currently not accepting orders now
        </Text>
      </View>
    </View>
  );
};

const Headline = ({ item }) => {
  return (
    <View className="py-2 px-4 ">
      <View className="flex-row justify-between">
        <View className="flex-1">
          <Text className="text-2xl capitalize font-bold tracking-wider">
            {item?.name}
          </Text>
          <Text className="text-base text-gray-600 capitalize tracking-wider">{`delivery GH₵ ${item?.deliveryFee}.00`}</Text>
        </View>
        <View className="flex-row items-center">
          <Ionicons name="star-sharp" size={15} color={"black"} />
          <Text className="font-bold text-xl">{item?.rating}</Text>
        </View>
      </View>
      {item?.discount && (
        <View className=" flex-row items-center py-3 border-b border-gray-300">
          <Ionicons name="pricetag" size={20} color={"#dc2626"} />
          <Text className="text-base text-gray-600 mx-3">
            {`${item?.discountPercent}% off on the entire menu `}
          </Text>
        </View>
      )}
      <View className="py-3 border-b border-gray-300">
        <TouchableOpacity
          activeOpacity={1}
          className="items-center flex-row justify-between"
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

const Header = ({ thumbnail }) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={{ uri: thumbnail }}
      className="w-full h-full"
    >
      <SafeAreaView className="px-5"></SafeAreaView>
    </ImageBackground>
  );
};

export default RestaurantDetail;
