import React from "react";
import AuthenticationScreen from "./src/screens/AuthenticationScreen";
import MultiTab from "./src/screens/MultiTab";
import SettingsScreen from "./src/screens/SettingsScreen"; // Import your custom settings screen
import useCustomFonts from "./hooks/useCustomFonts";

export default function App() {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null; // Or some loading component
  }

  // Replace <Settings /> with <SettingsScreen /> or any other screen you want to display
  return <SettingsScreen />;
}
