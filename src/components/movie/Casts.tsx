import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const Casts = () => {
  return (
    <View className="mt-8">
      <Text className="text-white tracking-wide" style={{ fontSize: hp(2.5) }}>
        Top Casts
      </Text>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10, gap: 12 }}
        className="mt-4"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((cast, index) => {
          return (
            <View key={index}>
              <View className="w-[80px] h-[80px] rounded-full overflow-hidden border-2 border-neutral-500">
                <Image source={require("../../../assets/images/image.webp")} className="w-full h-full" resizeMode="cover" />
              </View>

              <Text className="text-sm mt-1 font-semibold text-neutral-200 text-center">John Wick</Text>
              <Text className="text-sm mt-1 text-neutral-300 text-center">Keven Reeves</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Casts;
