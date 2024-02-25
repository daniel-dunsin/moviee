import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import BackButton from "../ui/BackButton";
import { HeartIcon } from "react-native-heroicons/solid";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const Header = () => {
  const [isFav, setIsFav] = useState<boolean>(false);

  return (
    <View className="px-8 absolute left-0 w-full z-[5]" style={{ top: hp(5) }}>
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
