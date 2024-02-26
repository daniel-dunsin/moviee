import { View, Text } from "react-native";
import React from "react";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Carousel from "react-native-snap-carousel";
import MovieSlide from "./MovieSlide";
import { useGetTrendingMovies } from "../../services";
import Loading from "../ui/Loading";
import { Movie } from "../../types";

interface Props {
  data: Movie[];
  loading?: boolean;
}

const TrendingMovies = ({ data, loading }: Props) => {
  return (
    <View className="mt-8">
      <Text className="text-white pl-8 tracking-widest" style={{ fontSize: hp(2.5) }}>
        Trending
      </Text>

      {loading ? (
        <Loading className="ml-6 mt-6" />
      ) : (
        <View className="mt-6">
          <Carousel
            itemWidth={wp("80%")}
            sliderWidth={wp("100%")}
            inactiveSlideOpacity={0.6}
            activeSlideAlignment="center"
            vertical={false}
            firstItem={3}
            data={data as Movie[]}
            renderItem={({ item, index }: any) => {
              return <MovieSlide {...(item as Movie)} key={index} />;
            }}
          />
        </View>
      )}
    </View>
  );
};

export default TrendingMovies;
