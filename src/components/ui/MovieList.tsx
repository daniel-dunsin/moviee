import { View, Text, ScrollView, ViewProps, StyleProp, ViewStyle } from "react-native";
import React from "react";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import MovieCard from "../ui/MovieCard";
import useNavigation from "../../hooks/useNavigation";
import { Movie } from "../../types";
import Loading from "./Loading";

interface Props extends ViewProps {
  title: string;
  movies: Movie[];
  loading?: boolean;
}

const MovieList = ({ title, movies, loading, ...props }: Props) => {
  return (
    <View {...props} className={`mt-8 ${props.className}`} style={{ paddingHorizontal: wp(7.5), ...(props.style as any) }}>
      <Text className="text-white tracking-wide" style={{ fontSize: hp(2.5) }}>
        {title}
      </Text>

      <ScrollView className="mt-4" horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 20 }}>
        {loading ? (
          <Loading />
        ) : (
          movies?.map((_, index) => {
            return <MovieCard movie={_} key={index} />;
          })
        )}
      </ScrollView>
    </View>
  );
};

export default MovieList;
