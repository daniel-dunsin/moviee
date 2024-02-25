import { View, Text, Image } from "react-native";
import React from "react";

const MovieSlide = () => {
  return (
    <View className="h-[400px] w-full">
      <Image source={require("../../../assets/images/image.webp")} className="w-full h-full rounded-xl" resizeMode="cover" />
    </View>
  );
};

export default MovieSlide;
