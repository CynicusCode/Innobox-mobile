import React, { useCallback } from "react";
import { View, StyleSheet, Image } from "react-native";
import useCustomFonts from "./hooks/useCustomFonts"; // Make sure this path is correct
import * as SplashScreen from "expo-splash-screen";
import { globalStyles } from "./styles/globalStyles"; // Make sure this path is correct
import GradientText from "./src/components/GradientText"; // Make sure this path is correct

// Prevent the splash screen from hiding until fonts are loaded
SplashScreen.preventAutoHideAsync();

export default function App() {
  const fontsLoaded = useCustomFonts();

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Or a custom loading component if you prefer
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.imageContainer}>
        <Image
          source={require("./assets/images/robot.png")} // Make sure this path is correct
          style={styles.image}
        />
      </View>

      <View style={styles.titleContainer}>
        <GradientText style={[globalStyles.title]}>
          Innobox Co-Pilot
        </GradientText>
        {/* Other text elements if you want them to have the same style can be added here */}
      </View>

      {/* You can add more components here with their respective styles */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0115",
    padding: 10,
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  // Add styles for your other components as needed
});
