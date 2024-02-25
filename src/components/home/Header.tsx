import { View, Text } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/solid";
import useNavigation from "../../hooks/useNavigation";

const Header = () => {
  const { navigate } = useNavigation();

  return (
    <View className="mx-8 flex-row items-center justify-between pb-6">
      <Bars3CenterLeftIcon size={wp(7)} color="white" />
      <Text className="text-white font-bold" style={{ fontSize: wp(8) }}>
        <Text className="text-primary">M</Text>oviee
      </Text>
      <MagnifyingGlassIcon size={wp(7)} color={"white"} onPress={() => navigate("Search")} />
    </View>
  );
};

export default Header;
