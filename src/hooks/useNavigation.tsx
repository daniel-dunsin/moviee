import { View, Text } from "react-native";
import React from "react";
import { RootStack } from "../types";
import { NavigationProp, useNavigation as useNativeNavigation } from "@react-navigation/native";

export default function useNavigation<T extends RootStack = RootStack>() {
  return useNativeNavigation<NavigationProp<T>>();
}
