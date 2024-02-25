import { View, Text, ScrollView, ViewProps, StyleProp, ViewStyle } from "react-native";
import React from "react";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import MovieCard from "../ui/MovieCard";
import useNavigation from "../../hooks/useNavigation";

interface Props extends ViewProps {
  title: string;
}

const MovieList = ({ title, ...props }: Props) => {
  return (
    <View {...props} className={`mt-8 ${props.className}`} style={{ paddingHorizontal: wp(7.5), ...(props.style as any) }}>
      <Text className="text-white tracking-wide" style={{ fontSize: hp(2.5) }}>
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
