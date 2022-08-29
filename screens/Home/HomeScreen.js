import React from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  FeaturedRow,
  Header,
  HorizontalView,
  VerticalView,
} from "../../components";
import { db } from "../../firebase";

const HomeScreen = () => {
  React.useEffect(() => {}, []);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FeaturedRow label={"top related"} render={<HorizontalView />} />
        <FeaturedRow label={"new on bolt food"} render={<HorizontalView />} />
        <FeaturedRow
          label={"all restaurant on foodIn"}
          render={<VerticalView />}
          disabled
        />
      </ScrollView>
      <StatusBar style="dark" translucent={false} backgroundColor={"#fff"} />
    </SafeAreaView>
  );
};

export default HomeScreen;
