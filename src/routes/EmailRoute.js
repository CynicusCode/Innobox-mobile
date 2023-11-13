import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GradientButton from "../components/GradientButton";
import useCustomFonts from "../../hooks/useCustomFonts";
import { globalStyles } from "../../styles/globalStyles";
import previous from "../../assets/images/previous.png";
import Next from "../../assets/images/Next.png";
import email from "../../assets/images/email.png";

const EmailRoute = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.card}
        colors={["#0C0922", "#2F2770"]}
        start={{ x: 1, y: 5 }}
        end={{ x: 10, y: 5 }}
      >
        <ScrollView style={styles.scrollView}>
          <Text style={globalStyles.emailBody}>
            Hi there,\n\nWe've completed the work for ticket L0780 test...
          </Text>
        </ScrollView>
      </LinearGradient>

      <View style={styles.buttonContainer}>
        <GradientButton
          title="Get Email"
          onPress={() => {
            /* Handle get email action */
          }}
          iconSource={email}
        />
        <GradientButton
          title="Next"
          onPress={() => {
            /* Handle next action */
          }}
          iconSource={Next}
        />
        <GradientButton
          title="Previous"
          onPress={() => {
            /* Handle previous action */
          }}
          iconSource={previous}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#0C0115",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  card: {
    flex: 1,
    width: "90%",
    borderRadius: 10,
    padding: 15,
    marginTop: 30,
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 6,
    marginBottom: 15,
  },
});

export default EmailRoute;
