import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;

const GradientButton = ({ onPress, title, iconSource, colors }) => {
  // Default colors if none are provided
  const defaultColors = ["#1F83AD", "#38089F"];

  // Adjust styles based on screen width
  const dynamicButtonStyle = {
    ...styles.gradientButton,
    width: windowWidth > 360 ? 120 : 100, // smaller width for smaller screens
  };

  return (
    <LinearGradient
      style={dynamicButtonStyle}
      colors={colors || defaultColors}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 1, y: 0.5 }}
    >
      <TouchableOpacity style={styles.button} onPress={onPress}>
        {iconSource && <Image source={iconSource} style={styles.iconStyle} />}
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  buttonText: {
    color: "white",
    marginLeft: 5,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    width: 26,
    height: 26,
    marginRight: 1,
  },
});

export default GradientButton;
