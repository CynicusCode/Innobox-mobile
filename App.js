// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
import useCustomFonts from "./hooks/useCustomFonts";

export default function App() {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null; // Or some loading component
  }

  return (
    <>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
