import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { RootStack } from "./src/types";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import Movie from "./src/screens/Movie";
import Person from "./src/screens/Person";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Stack = createNativeStackNavigator<RootStack>();

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Movie" component={Movie} />
          <Stack.Screen name="Person" component={Person} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
