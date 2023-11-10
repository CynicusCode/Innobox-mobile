import React, { useCallback } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import useCustomFonts from "./hooks/useCustomFonts";
import * as SplashScreen from "expo-splash-screen";
import { globalStyles } from "./styles/globalStyles";
import GradientText from "./src/components/GradientText";
import { LinearGradient } from "expo-linear-gradient";

// Prevent the splash screen from hiding
SplashScreen.preventAutoHideAsync();

export default function App() {
  const fontsLoaded = useCustomFonts();
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  //Manage email and password
  const [email, setEmail] = "";
  const [password, setPassword] = "";

  //Remember me
  // const [rememberMe, setRememberMe] = useState(false);
  // const toggleRememberMe = () => setRememberMe(!rememberMe);

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {/* Image container */}
      <View style={styles.imageContainer}>
        <Image
          source={require("./assets/images/robot.png")}
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
          value={email} // Fixed: use the state variable 'email'
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
          secureTextEntry // This hides the password text
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
      {/* Remember Me Checkbox
      <View style={styles.checkboxContainer}>
        <TouchableOpacity style={styles.checkbox} onPress={toggleRememberMe}>
          {rememberMe && <Text style={styles.checkboxChecked}>✓</Text>}
        </TouchableOpacity>
        <Text style={globalStyles.homeTags} onPress={toggleRememberMe}>
          Remember Me
        </Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0115",
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
  buttonContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
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
    flex: 0.5,
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
});
