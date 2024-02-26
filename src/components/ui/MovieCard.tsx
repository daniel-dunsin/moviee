import { View, Text, Image, ViewProps, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import useNavigation from "../../hooks/useNavigation";
import { Movie } from "../../types";
import { getImage } from "../../utils/image.utils";

interface Props extends ViewProps {
  movie: Movie;
}

const MovieCard = ({ ...props }: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Movie", { id: props?.movie?.id, poster_path: props?.movie?.poster_path })}
    >
      <View {...props} className={`w-[200px] ${props.className}`}>
        <Image source={{ uri: getImage(props?.movie?.poster_path) }} className="h-[200px] w-full rounded-xl" resizeMode="cover" />
        <Text className="text-neutral-300 mt-2 font-semibold" style={{ fontSize: hp(1.8) }}>
          {props?.movie?.original_title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;
