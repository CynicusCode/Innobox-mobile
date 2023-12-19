// ResponseRoute.js
import React, { useState } from "react";
import { View, TextInput, StyleSheet, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GradientButton from "../components/GradientButton";
import { globalStyles } from "../../styles/globalStyles";
import sendIcon from "../../assets/images/send-email.png"; // Replace with your actual send icon
import editIcon from "../../assets/images/edit.png";
import { useSelector } from "react-redux";
import loadingGif from "../../assets/images/loadingGif.gif";
import { useEffect } from "react";

const ResponseRoute = () => {
  const aiResponse = useSelector((state) => state.aiResponse.response);
  const [isLoading, setIsLoading] = useState(!aiResponse);
  const [responseText, setResponseText] = useState(aiResponse || "");
  const [isEditable, setIsEditable] = useState(false); // State to manage edit mode

  useEffect(() => {
    if (!aiResponse) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
      setResponseText(aiResponse); // Set the initial text to the AI response
    }
  }, [aiResponse]);

  const handleEditToggle = () => {
    setIsEditable(!isEditable); // Toggle edit mode
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.card}
        colors={["#0C0922", "#2F2770"]}
        start={{ x: 1, y: 5 }}
        end={{ x: 10, y: 5 }}
      >
        {isLoading ? (
          <View style={styles.centeredContent}>
            <Image source={loadingGif} style={styles.loadingImage} />
          </View>
        ) : (
          <ScrollView style={styles.scrollView}>
            <TextInput
              style={globalStyles.emailBody}
              multiline
              value={responseText}
              onChangeText={setResponseText}
              editable={isEditable} // Enable or disable editing based on isEditable state
              placeholder="AI Response will appear here..."
              placeholderTextColor="#888"
            />
          </ScrollView>
        )}
      </LinearGradient>

      <View style={styles.buttonContainer}>
        <GradientButton
          title={isEditable ? "Save" : "Edit"} // Button text based on edit mode
          onPress={handleEditToggle}
          iconSource={editIcon}
        />
        <GradientButton
          title="Send"
          onPress={() => {
            // Handle send response action
            // Add your logic to send the responseText
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
  centeredContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingImage: {
    width: 100,
    height: 100,
  },
});

export default ResponseRoute;
