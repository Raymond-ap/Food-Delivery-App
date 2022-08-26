import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FeaturedRow, Header, HorizontalView, VerticalView } from "../../components";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FeaturedRow label={"top related"} render={<HorizontalView/>} />
        <FeaturedRow label={"new on foodIn"} render={<HorizontalView/>} />
        <FeaturedRow label={"all restaurant on foodIn"} disabled render={<VerticalView/>} />
      </ScrollView>
      <StatusBar style="dark" translucent={false} backgroundColor={"#fff"} />
    </SafeAreaView>
  );
};

  

export default HomeScreen;
