// CustomDrawerHeader.js
import React from "react";
import { Image } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import AvatarImage from "../../assets/images/avatar.png";

const CustomDrawerHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Image source={AvatarImage} style={styles.imageStyle} />
      <Text style={{ color: "white", marginTop: 5, fontSize: 20 }}>
        Jane Smith
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#0C0115",
    justifyContent: "center", // This centers vertically inside the View
    alignItems: "center", // This centers horizontally inside the View
    padding: 20,
  },
  imageStyle: {
    width: 80, // Adjust as needed
    height: 80, // Adjust as needed
    borderRadius: 40, // To make it round, adjust as needed
  },
});

export default CustomDrawerHeader;
