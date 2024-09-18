import { Image, View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { FadeOut, FadeOutDown } from "react-native-reanimated";
import { Link, router } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function home() {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "fredoka" }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, maxime!
        Fugiat quaerat excepturi quis consectetur possimus hic at accusamus,
        aliquam, eveniet doloribus nihil minima soluta libero quam repellat
        repudiandae nesciunt.
      </Text>

      <View style={styles.aboutButton}>
        <Button
          title="Go To Products..."
          titleStyle={{ textDecorationLine: "none" }}
          onPress={() => router.push("/products")}
        />
      </View>

      <View style={styles.bottomSection}>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis id
          minus suscipit, nemo nobis ullam ducimus natus, ut odit, velit sit
          consequuntur. Suscipit cupiditate consequuntur id beatae, porro rem
          tempore.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#f1f1ef",
  },
  bottomSection: {
    backgroundColor: "#999",
    marginTop: 20,
  },
  aboutButton: {
    backgroundColor: "#355c7d",
    padding: (5, 10),
    color: "#fff",
    textAlign: "center",
    width: "50%",
  },
  aboutButton: {
    backgroundColor: "#355c7d",
    padding: (5, 10),
    color: "#fff",
    textAlign: "center",
    width: "50%",
    textDecoration: "none",
  },
});
