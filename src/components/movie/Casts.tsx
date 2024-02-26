import { View, Text, ScrollView, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import useNavigation from "../../hooks/useNavigation";
import { Cast } from "../../types";
import Loading from "../ui/Loading";
import { getImage } from "../../utils/image.utils";

interface Props {
  casts: Cast[];
  loading: boolean;
}

const Casts = ({ casts, loading }: Props) => {
  const navigation = useNavigation();

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
        {loading ? (
          <Loading />
        ) : (
          casts?.map((cast, index) => {
            return (
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("Person", { id: cast?.id, profile_path: cast?.profile_path })}
                key={index}
              >
                <View>
                  <View className="w-[80px] mx-auto h-[80px] rounded-full overflow-hidden border-2 border-neutral-500">
                    <Image source={{ uri: getImage(cast?.profile_path) }} className="w-full h-full" resizeMode="cover" />
                  </View>
                  <Text className="text-sm mt-1 font-semibold text-neutral-200 text-center">
                    {cast?.name?.length > 12 ? `${cast?.name?.slice(0, 12)}...` : cast?.name}
                  </Text>
                  <Text className="text-sm mt-1 text-neutral-300 text-center">
                    {cast?.character?.length > 12 ? `${cast?.character?.slice(0, 12)}...` : cast?.character}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            );
          })
        )}
      </ScrollView>
    </View>
  );
};

export default Casts;
