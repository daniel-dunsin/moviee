import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { XMarkIcon } from "react-native-heroicons/solid";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import MovieCard from "../components/ui/MovieCard";
import useNavigation from "../hooks/useNavigation";
import { StatusBar } from "expo-status-bar";
import { useSearchMovie } from "../services";

const Search = () => {
  const [search, setSearch] = React.useState<string>("");
  const { navigate } = useNavigation();

  const { data, mutate, isPending } = useSearchMovie(search);

  return (
    <View className="flex-1 bg-neutral-800 px-8">
      <StatusBar style="light" />
      <SafeAreaView>
        <View className="pt-12 pb-8">
          <View className="w-full border-[1.5px] border-neutral-500 rounded-[50px] flex-row p-2">
            <TextInput
              placeholder="Search Movie"
              placeholderTextColor={"#e7e7e7"}
              className="flex-1 pl-6 pr-4 font-semibold"
              style={{ color: "#e7e7e7", fontSize: hp(2.2) }}
              value={search}
              onChangeText={(text) => setSearch(text)}
              onSubmitEditing={() => {
                mutate();
              }}
            />

            <TouchableOpacity className="p-2 bg-neutral-500 rounded-full" onPress={() => navigate("Home")}>
              <XMarkIcon size={30} color={"#e7e7e7"} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Results */}
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }} className="space-y-5">
          {!isPending && data && (
            <>
              <Text className="tracking-widest text-white font-semibold" style={{ fontSize: hp(2) }}>
                Results ({data?.length})
              </Text>

              <View className="flex-row justify-between flex-wrap">
                {data?.map((_, index) => {
                  return <MovieCard movie={_} key={index} style={{ width: wp(40), marginBottom: 15 }} />;
                })}
              </View>
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Search;
