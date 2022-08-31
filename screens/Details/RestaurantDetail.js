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
import React, {
  useRef,
  useMemo,
  useState,
  useEffect,
  useCallback,
  createRef,
} from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import HeaderImageScrollView, {
  TriggeringView,
  ImageHeaderScrollView,
} from "react-native-image-header-scroll-view";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../../redux/slice/BasketSlice";

import { truncate, calculateDiscountPrice } from "../../utils";
import { ErrorCard, Headline, MenuItem, BasketCard } from "../../components";

const RestaurantDetail = ({ route }) => {
  const [isLoading, setIsLoading] = useState(true);
  const item = route.params.item;
  const basketItems = useSelector(selectBasketItems);

  // Fake loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <View className="flex-1">
        <ImageHeaderScrollView
          maxHeight={200}
          minHeight={90}
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
                      <MenuItem
                        key={index}
                        menuItem={menuItem}
                        percentage={item?.discountPercent}
                        discount={item?.discount}
                        currentStatus={
                          item?.currentStatus !== "open" ? true : false
                        }
                        id={menuItem?.id}
                      />
                    ))}
                  </View>
                )}
              </View>
            </TriggeringView>
          </View>
        </ImageHeaderScrollView>
        {basketItems.length > 0 && item.currentStatus === "open" && <BasketCard />}
        {item.currentStatus !== "open" && <ErrorCard />}
      </View>
      <StatusBar
        barStyle={"light-content"}
        translucent={true}
        backgroundColor="transparent"
      />
    </>
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
