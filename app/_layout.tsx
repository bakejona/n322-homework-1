import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function RootLayout() {
  //importing fonts
  useFonts({
    "fredoka":require('./../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
  })
  return (
    <Stack screenOptions={{
      headerShown:false,
    }}>
      <Stack.Screen name="index"/>
    </Stack>
  );
}
