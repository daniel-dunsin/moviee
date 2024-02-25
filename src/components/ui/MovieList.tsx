import { View, Text, ScrollView } from "react-native";
import React from "react";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import MovieCard from "../ui/MovieCard";

interface Props {
  title: string;
}

const MovieList = ({ title }: Props) => {
  return (
    <View className="mt-8" style={{ paddingLeft: wp(7.5), paddingRight: wp(7.5) }}>
      <Text className="text-white tracking-widest" style={{ fontSize: hp(2.5) }}>
        {title}
      </Text>

      <ScrollView className="mt-6" horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 20 }}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => {
          return <MovieCard key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default MovieList;
