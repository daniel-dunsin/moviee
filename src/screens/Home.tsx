import { View, Text, SafeAreaView, ScrollView, Platform, RefreshControl } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../components/home/Header";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import TrendingMovies from "../components/home/TrendingMovies";
import MovieList from "../components/ui/MovieList";
import { useGetTopRatedMovies, useGetTrendingMovies, useGetUpcomingMovies } from "../services";
import { Movie } from "../types";

const Home = () => {
  const [refreshing, setRefreshing] = React.useState<boolean>(false);

  const { data: trending, isLoading: trendingLoading, refetch: trendingRefetch } = useGetTrendingMovies();
  const { data: upcoming, isLoading: upcomingLoading, refetch: upcomingRefetch } = useGetUpcomingMovies();
  const { data: topRated, isLoading: topRatedLoading, refetch: topRatedRefetch } = useGetTopRatedMovies();

  const refresh = React.useCallback(async () => {
    setRefreshing(true);
    await trendingRefetch();
    await upcomingRefetch();
    await topRatedRefetch();
    setRefreshing(false);
    setRefreshing(false);
  }, []);

  return (
    <View className="flex-1 bg-neutral-800 !text-white">
      <StatusBar style="light" />
      <SafeAreaView className="pt-10">
        <Header />
        <ScrollView
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refresh} />}
          className={`${Platform.OS === "ios" ? "mb-2" : "-mb-2"}`}
          contentContainerStyle={{ paddingBottom: hp(10) }}
        >
          <TrendingMovies data={trending as Movie[]} loading={trendingLoading} />

          {/* Upcoming Movies */}
          <MovieList title="Upcoming" movies={upcoming as Movie[]} loading={upcomingLoading} />

          {/* Top Rated Movies */}
          <MovieList title="Top Rated" movies={topRated as Movie[]} loading={topRatedLoading} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;
