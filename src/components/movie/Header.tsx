import { View, Text, TouchableOpacity, ViewProps } from "react-native";
import React, { useState } from "react";
import BackButton from "../ui/BackButton";
import { HeartIcon } from "react-native-heroicons/solid";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

interface Props extends ViewProps {}

const Header = ({ ...props }: Props) => {
  const [isFav, setIsFav] = useState<boolean>(false);

  return (
    <View
      {...props}
      className={`px-8 absolute left-0 w-full z-[5] ${props.className}`}
      style={{ top: hp(5), ...(props.style as any) }}
    >
      <View className="flex items-center justify-between flex-row ">
        <BackButton />
        <TouchableOpacity activeOpacity={0.8} onPress={() => setIsFav((prev) => !prev)}>
          <HeartIcon color={!isFav ? "white" : "#eab308"} size={hp(4)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
