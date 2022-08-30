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
  const { name, thumbnail, rating, deliveryTime, id } = route.params;
  const MIN_HEIGHT = 90;
  const maxHeight = 250;

  return (
    <ImageHeaderScrollView
      maxHeight={200}
      minHeight={MIN_HEIGHT}
      maxOverlayOpacity={0.6}
      minOverlayOpacity={0.6}
      renderHeader={() => <Header thumbnail={thumbnail} />}
      renderForeground={() => <RenderForeground />}
    >
      <View style={{ height: 1000 }}>
        <TriggeringView onHide={() => console.log("text hidden")}>
          <Text>Scroll Me!</Text>
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

// name
// deliveryTime
// rating
