import React from "react";
import { ActivityIndicator, View, ViewProps, Text } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

interface Props extends ViewProps {
  text?: string;
}

const Loading = ({ text, ...props }: Props) => {
  return (
    <View {...props} className={`flex-row gap-2 items-center ${props.className}`}>
      <ActivityIndicator size={"large"} color={"#fff"} />
      {text && (
        <Text className="text-white font-bold" style={{ fontSize: wp(4) }}>
          {text}
        </Text>
      )}
    </View>
  );
};

export default Loading;
