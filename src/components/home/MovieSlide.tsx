import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import useNavigation from "../../hooks/useNavigation";
import { Movie } from "../../types";
import { getImage } from "../../utils/image.utils";

interface Props extends Movie {}

const MovieSlide = (props: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("Movie", { id: props?.id, poster_path: props?.poster_path })}>
      <View className="w-full h-[400px]">
        <Image
          source={{
            uri: getImage(props?.poster_path),
          }}
          className="w-full h-full rounded-xl"
          resizeMode="cover"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MovieSlide;
