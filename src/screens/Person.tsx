import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../components/movie/Header";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import BackButton from "../components/ui/BackButton";
import { HeartIcon } from "react-native-heroicons/solid";
import MovieList from "../components/ui/MovieList";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Movie, RootStack } from "../types";
import { useGetPersonMovies, useGetSinglePerson } from "../services";
import { getImage } from "../utils/image.utils";

const Person = () => {
  const [isFav, setIsFav] = useState<boolean>(false);

  const { id, profile_path } = useRoute<RouteProp<RootStack, "Person">>().params;

  const { data } = useGetSinglePerson(id);
  const { data: movies, isLoading: moviesLoading } = useGetPersonMovies(id);

  return (
    <View className="flex-1 bg-neutral-800">
      <StatusBar style="light" />

      <ScrollView
        className="px-4 pt-10"
        contentContainerStyle={{ paddingBottom: 50, marginBottom: 10 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex items-center justify-between flex-row ">
          <BackButton />
          <TouchableOpacity activeOpacity={0.8} onPress={() => setIsFav((prev) => !prev)}>
            <HeartIcon color={!isFav ? "white" : "#eab308"} size={hp(4)} />
          </TouchableOpacity>
        </View>

        {/* User Image */}

        <View>
          <View
            style={{ width: wp(74), height: wp(74) }}
            className="overflow-hidden border-2 border-neutral-400 mx-auto mt-12 mb-4 rounded-full"
          >
            <Image
              source={{ uri: getImage(profile_path || (data?.profile_path as string)) }}
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>

          <Text className="text-white font-bold text-center" style={{ fontSize: hp(3.8) }}>
            {data?.name}
          </Text>

          <Text className="text-neutral-400 font-semibold text-center mt-1" style={{ fontSize: hp(2) }}>
            {data?.place_of_birth}
          </Text>

          <View className="w-full mt-5 rounded-[50px] bg-neutral-700 p-4 flex-row justify-between">
            <View className="flex-1 pr-1 border-r-2 border-r-neutral-400">
              <Text className="text-white font-bold text-center" style={{ fontSize: wp(4) }}>
                Gender
              </Text>
              <Text className="text-neutral-400 mt-1 font-semibold text-center capitalize" style={{ fontSize: wp(3.5) }}>
                {["Female", "Male"][(data?.gender as number) - 1] || "Others"}
              </Text>
            </View>

            <View className="flex-1 px-1 border-r-2 border-r-neutral-400">
              <Text className="text-white font-bold text-center" style={{ fontSize: wp(4) }}>
                Birthday
              </Text>
              <Text className="text-neutral-400 mt-1 font-semibold text-center" style={{ fontSize: wp(3.5) }}>
                {data?.birthday}
              </Text>
            </View>

            <View className="flex-1 px-1 border-r-2 border-r-neutral-400">
              <Text className="text-white font-bold text-center" style={{ fontSize: wp(4) }}>
                Niche
              </Text>
              <Text className="text-neutral-400 mt-1 font-semibold text-center" style={{ fontSize: wp(3.5) }}>
                {data?.known_for_department}
              </Text>
            </View>

            <View className="flex-1 pl-1">
              <Text className="text-white font-bold text-center" style={{ fontSize: wp(4) }}>
                Popularity
              </Text>
              <Text className="text-neutral-400 mt-1 font-semibold text-center" style={{ fontSize: wp(3.5) }}>
                {data?.popularity}
              </Text>
            </View>
          </View>

          {data?.biography && (
            <View className={`mt-8`}>
              <Text className="text-white tracking-wide" style={{ fontSize: hp(2.5) }}>
                Biography
              </Text>

              <Text className="text-neutral-200 mt-1" style={{ fontSize: hp(2) }}>
                {data?.biography}
              </Text>
            </View>
          )}
          <MovieList movies={movies as Movie[]} loading={moviesLoading} title="Movies" style={{ paddingHorizontal: 0 }} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Person;
