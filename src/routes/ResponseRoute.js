// ResponseRoute.js
import React, { useState } from "react";
import { View, TextInput, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GradientButton from "../components/GradientButton";
import { globalStyles } from "../../styles/globalStyles";
import sendIcon from "../../assets/images/send-email.png"; // Replace with your actual send icon
import editIcon from "../../assets/images/edit.png";

const ResponseRoute = () => {
  const [responseText, setResponseText] = useState(""); // State to handle the response text

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.card}
        colors={["#0C0922", "#2F2770"]} // You can adjust these colors as per your design
        start={{ x: 1, y: 5 }}
        end={{ x: 10, y: 5 }}
      >
        <ScrollView style={styles.scrollView}>
          <TextInput
            style={globalStyles.emailBody}
            multiline
            value={responseText}
            onChangeText={setResponseText}
            placeholder="AI Response will appear here..."
            placeholderTextColor="#888"
          />
        </ScrollView>
      </LinearGradient>

      <View style={styles.buttonContainer}>
        <GradientButton
          title="Edit"
          onPress={() => {
            /* Handle edit response action */
          }}
          iconSource={editIcon}
        />
        <GradientButton
          title="Send"
          colors={["#15CDB7", "#387E75"]} // Same color palette as 'Generate AI' button
          onPress={() => {
            /* Handle send response action */
          }}
          iconSource={sendIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0C0115",
  },
  card: {
    flex: 1,
    width: "90%",
    borderRadius: 10,
    padding: 15,
    marginTop: 30,
    marginBottom: 5,
  },
  scrollView: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    padding: 10,
  },
  // ... Add other styles if needed ...
});

export default ResponseRoute;
