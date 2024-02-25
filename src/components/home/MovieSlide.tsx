import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import useNavigation from "../../hooks/useNavigation";

const MovieSlide = () => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("Movie", { id: "1" })}>
      <View className="w-full h-[400px]">
        <Image source={require("../../../assets/images/image.webp")} className="w-full h-full rounded-xl" resizeMode="cover" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MovieSlide;
