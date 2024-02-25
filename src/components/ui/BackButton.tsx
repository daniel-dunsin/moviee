import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import useNavigation from "../../hooks/useNavigation";

const BackButton = () => {
  const { goBack } = useNavigation();

  return (
    <TouchableOpacity onPress={goBack} className="px-2 bg-primary py-2 rounded-md">
      <ChevronLeftIcon color={"white"} strokeWidth={5} size={hp(3.2)} />
    </TouchableOpacity>
  );
};

export default BackButton;
