import { View, Text } from "react-native";
import React from "react";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Carousel from "react-native-snap-carousel";
import MovieSlide from "./MovieSlide";

const TrendingMovies = () => {
  return (
    <View className="mt-8">
      <Text className="text-white pl-8 tracking-widest" style={{ fontSize: hp(2.5) }}>
        Trending
      </Text>

      <View className="mt-6">
        <Carousel
          itemWidth={wp("80%")}
          sliderWidth={wp("100%")}
          inactiveSlideOpacity={0.6}
          activeSlideAlignment="center"
          vertical={false}
          firstItem={3}
          data={[0, 1, 2, 3, 4, 5]}
          renderItem={({ item, index }: any) => {
            return <MovieSlide key={index} />;
          }}
        />
      </View>
    </View>
  );
};

export default TrendingMovies;
