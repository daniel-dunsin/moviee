import { View, Text, SafeAreaView, ScrollView, Image, Dimensions } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../components/movie/Header";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import Casts from "../components/movie/Casts";
import MovieList from "../components/ui/MovieList";

const height = Dimensions.get("window").height;

const Movie = () => {
  return (
    <View className="flex-1 bg-neutral-800">
      <StatusBar style="light" />
      <SafeAreaView>
        <ScrollView>
          <Header />

          <View style={{ width: wp("100%"), height: hp(50) }}>
            <Image source={require("../../assets/images/image.webp")} className="w-full h-full" resizeMode={"cover"} />

            <LinearGradient
              colors={["transparent", "rgba(23, 23, 23, 0.8)", "rgba(23, 23, 23, 1)"]}
              className="w-full absolute bottom-0"
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={{ height: hp(50) }}
            ></LinearGradient>
          </View>

          {/* Movie Info */}
          <View
            style={{
              width: "100%",
              minHeight: hp(50),
              marginTop: -(height * 0.03),
              paddingHorizontal: wp(4),
              paddingBottom: 40,
            }}
          >
            <Text className="text-neutral-100 font-bold text-center" style={{ fontSize: hp(3.5) }}>
              Avatar The Last Airbender
            </Text>

            <Text className="text-neutral-300 text-center font-semibold mt-2" style={{ fontSize: hp(2.1) }}>
              Realeased • 2020 • 170 mins
            </Text>

            <Text className="text-neutral-300 text-center font-semibold mt-2" style={{ fontSize: hp(2.1) }}>
              Action • Thrill • Comedy
            </Text>

            <Text className="mt-4 text-neutral-300" style={{ fontSize: hp(2.1) }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facilis, aperiam consequuntur est unde mollitia nam
              fuga accusantium quae, officia ea eligendi soluta pariatur nostrum optio saepe aut, aspernatur alias inventore
              voluptatem. Quidem excepturi aspernatur vero velit. Perspiciatis deserunt minima ipsa molestiae, aspernatur mollitia
              quam veritatis nihil sed, sunt iure?
            </Text>

            {/* Casts */}
            <Casts />

            {/* Similar Movies */}
            <MovieList title="Similar Movies" style={{ paddingHorizontal: 0 }} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Movie;
