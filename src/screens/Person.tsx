import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../components/movie/Header";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import BackButton from "../components/ui/BackButton";
import { HeartIcon } from "react-native-heroicons/solid";
import MovieList from "../components/ui/MovieList";

const Person = () => {
  const [isFav, setIsFav] = useState<boolean>(false);

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
            <Image source={require("../../assets/images/image.webp")} className="w-full h-full" resizeMode="cover" />
          </View>

          <Text className="text-white font-bold text-center" style={{ fontSize: hp(3.8) }}>
            Adejare Daniel
          </Text>

          <Text className="text-neutral-400 font-semibold text-center mt-1" style={{ fontSize: hp(2) }}>
            London, United Kingdom
          </Text>

          <View className="w-full mt-5 rounded-[50px] bg-neutral-700 p-4 flex-row justify-between">
            <View className="flex-1 pr-1 border-r-2 border-r-neutral-400">
              <Text className="text-white font-bold text-center" style={{ fontSize: wp(4) }}>
                Gender
              </Text>
              <Text className="text-neutral-400 mt-1 font-semibold text-center" style={{ fontSize: wp(3.5) }}>
                Male
              </Text>
            </View>

            <View className="flex-1 px-1 border-r-2 border-r-neutral-400">
              <Text className="text-white font-bold text-center" style={{ fontSize: wp(4) }}>
                Birthday
              </Text>
              <Text className="text-neutral-400 mt-1 font-semibold text-center" style={{ fontSize: wp(3.5) }}>
                2024-23-12
              </Text>
            </View>

            <View className="flex-1 px-1 border-r-2 border-r-neutral-400">
              <Text className="text-white font-bold text-center" style={{ fontSize: wp(4) }}>
                Niche
              </Text>
              <Text className="text-neutral-400 mt-1 font-semibold text-center" style={{ fontSize: wp(3.5) }}>
                Acting
              </Text>
            </View>

            <View className="flex-1 pl-1">
              <Text className="text-white font-bold text-center" style={{ fontSize: wp(4) }}>
                Popularity
              </Text>
              <Text className="text-neutral-400 mt-1 font-semibold text-center" style={{ fontSize: wp(3.5) }}>
                64.23
              </Text>
            </View>
          </View>

          <View className={`mt-8`}>
            <Text className="text-white tracking-wide" style={{ fontSize: hp(2.5) }}>
              Biography
            </Text>

            <Text className="text-neutral-200 mt-1" style={{ fontSize: hp(2) }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia beatae iusto explicabo velit ex amet possimus
              officiis fugit nisi consequatur doloremque quaerat, doloribus harum vitae, quas architecto! Ducimus earum hic
              commodi recusandae voluptatibus. Iure quaerat quod nostrum ad suscipit? Tenetur amet totam omnis provident minima
              sunt, quod quidem temporibus doloribus nesciunt rerum tempore accusamus quasi, nemo laboriosam, impedit quia
              sapiente.
            </Text>
          </View>

          <MovieList title="Movies" style={{ paddingHorizontal: 0 }} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Person;
