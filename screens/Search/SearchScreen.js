import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import { Header } from '../../components'



const SearchScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header />
      <StatusBar style="dark" translucent={false} backgroundColor={"#fff"} />
    </SafeAreaView>
  )
}

export default SearchScreen