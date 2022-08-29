import React from "react";
import {
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Text,
  Alert,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  FeaturedRow,
  Header,
  HorizontalView,
  VerticalView,
} from "../../components";
import { db } from "../../firebase";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [featured, setFeatured] = React.useState([]);
  const [restaurants, setRestaurants] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const navigation = useNavigation();

  const fetchData = async () => {
    setLoading(true);
    try {
      await db
        .collection("restaurant")
        .get()
        .then((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          let featured = data.filter((item) => item.featured);
          featured = data.filter((item) => item.currentStatus === "open")
          setFeatured(featured);
          setRestaurants(data);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      Alert.alert("Error", error.message, [
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => navigation.navigate("Onboarding"),
        },
        {
          text: "Retry",
          onPress: () => fetchData(),
        },
      ]);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <Header />
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#000" />
        </View>
      <StatusBar style="dark" translucent={false} backgroundColor={"#fff"} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FeaturedRow label={"top related"} render={<HorizontalView data={featured} />} />
        <FeaturedRow label={"new on bolt food"} render={<HorizontalView data={restaurants} />} />
        <FeaturedRow
          label={"all restaurant on foodIn"}
          render={<VerticalView data={restaurants}/>}
          disabled
        />
      </ScrollView>
      <StatusBar style="dark" translucent={false} backgroundColor={"#fff"} />
    </SafeAreaView>
  );
};

export default HomeScreen;
