import React, { useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { globalStyles } from "../../styles/globalStyles";
import useCustomFonts from "../../hooks/useCustomFonts";
import * as SplashScreen from "expo-splash-screen";
import GradientText from "../components/GradientText";

// The new AuthenticationScreen component
const AuthenticationScreen = () => {
  // State and other logic from App.js
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const toggleRememberMe = () => setRememberMe(!rememberMe);
  const fontsLoaded = useCustomFonts();
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {/* Image container */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/robot.png")}
          style={styles.image}
        />
      </View>

      {/* Title Container */}
      <View style={styles.titleContainer}>
        <GradientText style={globalStyles.title}>Innobox Co-Pilot</GradientText>
        <Text style={globalStyles.marketingTag}>
          Professional Email Responses
        </Text>
        <Text style={globalStyles.marketingTag}>Anytime, Anywhere</Text>
      </View>

      {/* Button sign up */}
      <View style={styles.buttonContainer}>
        <LinearGradient
          colors={["#0DA6C2", "#0E39C6"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.buttonGradient}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      {/* Email input field */}
      <View style={styles.inputField}>
        <Text style={globalStyles.homeTags}>Email Address</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter your e-mail address"
          keyboardType="email-address"
        />
      </View>

      {/* Password input field */}
      <View style={styles.inputField}>
        <Text style={globalStyles.homeTags}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry
        />
      </View>

      {/* Button sign in */}
      <View style={styles.buttonContainer}>
        <LinearGradient
          colors={["#0DA6C2", "#0E39C6"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.buttonGradient}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      {/* Remember Me Checkbox */}
      <View style={styles.checkboxContainer}>
        <TouchableOpacity style={styles.checkbox} onPress={toggleRememberMe}>
          {rememberMe && <Text style={styles.checkboxChecked}>✓</Text>}
        </TouchableOpacity>
        <Text style={globalStyles.homeTags} onPress={toggleRememberMe}>
          Remember Me
        </Text>
      </View>

      <View style={styles.container} onLayout={onLayoutRootView}>
        {/* ... existing components */}

        {/* Footer Text */}
        <View style={styles.footer}>
          <Text style={globalStyles.copywriteInfo}>
            2023 Privacy Policy Terms & Conditions All Rights Reserved Daniel
            Garcia Nucamp react native project
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AuthenticationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0115",
  },
  imageContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 80,
  },
  image: {
    width: "100%",
    height: "undefined",
    aspectRatio: 1,
    resizeMode: "contain", // Changed to 'cover' to fill the space
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  buttonGradient: {
    width: "80%",
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20,
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins-Bold",
  },
  inputField: {
    flex: 1.5,
  },
  input: {
    margin: 12,
    height: 40,
    borderWidth: 2,
    padding: 10,
    color: "white", // Adjust text color as needed
    borderColor: "gray", // Adjust border color as needed
    borderRadius: 20, // Adjust border radius as needed
  },
  checkboxContainer: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    height: 20,
    width: 20,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 3,
  },
  checkboxChecked: {
    color: "blue",
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 2,
  },
});
