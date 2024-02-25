import { View, Text, SafeAreaView, ScrollView, Platform } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../components/home/Header";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import TrendingMovies from "../components/home/TrendingMovies";
import MovieList from "../components/ui/MovieList";

const Home = () => {
  return (
    <View className="flex-1 bg-neutral-800 !text-white">
      <StatusBar style="light" />
      <SafeAreaView className="pt-10">
        <Header />
        <ScrollView className={`${Platform.OS === "ios" ? "mb-2" : "-mb-2"}`} contentContainerStyle={{ paddingBottom: hp(10) }}>
          <TrendingMovies />

          {/* Upcoming Movies */}
          <MovieList title="Upcoming" />

          {/* Top Rated Movies */}
          <MovieList title="Top Rated" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;
