//GradientButton.js
import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { globalStyles } from "../../styles/globalStyles";
import AiIcon from "../../assets/images/eos-icons_ai.png";

const GradientButton = ({ onPress, title, iconSource, colors }) => {
  // Default colors if none are provided
  const defaultColors = ["#1F83AD", "#38089F"];
  return (
    <LinearGradient
      style={styles.gradientButton}
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
    width: 120,
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
