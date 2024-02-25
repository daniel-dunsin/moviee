import { View, Text, Image, ViewProps, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import useNavigation from "../../hooks/useNavigation";

interface Props extends ViewProps {}

const MovieCard = ({ ...props }: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("Movie", { id: "1" })}>
      <View {...props} className={`w-[200px] ${props.className}`}>
        <Image source={require("../../../assets/images/image.webp")} className="h-[200px] w-full rounded-xl" resizeMode="cover" />
        <Text className="text-neutral-300 mt-2 font-semibold" style={{ fontSize: hp(1.8) }}>
          Avatar The Last Airbender
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;
