import { View, Text, SafeAreaView, ScrollView, Image, Dimensions } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../components/movie/Header";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import Casts from "../components/movie/Casts";
import MovieList from "../components/ui/MovieList";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Cast, Movie as IMovie, RootStack } from "../types";
import { useGetMovieCasts, useGetSimilarMovies, useGetSingleMovie } from "../services";
import { getImage } from "../utils/image.utils";
import Loading from "../components/ui/Loading";

const height = Dimensions.get("window").height;

const Movie = () => {
  const {
    params: { poster_path, id },
  } = useRoute<RouteProp<RootStack, "Movie">>();

  const scrollView = React.useRef<null>(null);
  const { data, isLoading } = useGetSingleMovie(id);
  const { data: similar, isLoading: similarLoading } = useGetSimilarMovies(id);
  const { data: casts, isLoading: castsLoading } = useGetMovieCasts(id);

  React.useEffect(() => {
    // @ts-ignore
    scrollView?.current?.scrollTo({ y: 0, animated: true });
  }, [id]);

  return (
    <View className="flex-1 bg-neutral-800">
      <StatusBar style="light" />
      <SafeAreaView>
        <ScrollView ref={scrollView}>
          <Header />

          <View style={{ width: wp("100%"), height: hp(50) }}>
            <Image
              source={{
                uri: getImage(poster_path || (data?.poster_path as string)),
              }}
              className="w-full h-full"
              resizeMode={"cover"}
            />

            <LinearGradient
              colors={["transparent", "rgba(23, 23, 23, 0.8)", "rgba(23, 23, 23, 1)"]}
              className="w-full absolute bottom-0"
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={{ height: hp(50) }}
            ></LinearGradient>
          </View>

          {/* Movie Info */}
          <View
            style={{
              width: "100%",
              minHeight: hp(50),
              marginTop: -(height * 0.03),
              paddingHorizontal: wp(4),
              paddingBottom: 40,
            }}
          >
            {isLoading ? (
              <Loading text="Fetching Video Info" />
            ) : (
              <>
                <Text className="text-neutral-100 font-bold text-center" style={{ fontSize: hp(3.5) }}>
                  {data?.original_title}
                </Text>

                <Text className="text-neutral-300 text-center font-semibold mt-2" style={{ fontSize: hp(2.1) }}>
                  {data?.status} • {new Date(data?.release_date as string).getFullYear()} • {data?.runtime} mins
                </Text>

                <Text className="text-neutral-300 text-center font-semibold mt-2" style={{ fontSize: hp(2.1) }}>
                  {data?.genres?.map((genre, index) => {
                    return (
                      <React.Fragment key={index}>
                        {" "}
                        {index != 0 && "•"} {genre?.name}
                      </React.Fragment>
                    );
                  })}
                </Text>

                <Text className="mt-4 text-neutral-300" style={{ fontSize: hp(2.1) }}>
                  {data?.overview}
                </Text>

                {/* Casts */}
                <Casts casts={casts as Cast[]} loading={castsLoading} />

                {/* Similar Movies */}
                <MovieList
                  movies={similar as IMovie[]}
                  loading={similarLoading}
                  title="Similar Movies"
                  style={{ paddingHorizontal: 0 }}
                />
              </>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Movie;
