// src// routes// ContextRoute.js
// src// routes// ContextRoute.js
import React, { useState, useEffect } from "react";
import { View, TextInput, Text, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GradientButton from "../components/GradientButton";
import { useSelector } from "react-redux";
import { fetchData } from "../data/firebaseConfig";
import AiIcon from "../../assets/images/eos-icons_ai.png";
import editIcon from "../../assets/images/edit.png";
import contextIcon from "../../assets/images/context.png";
import { generateOpenAiResponse } from "../components/OpenAiPromptHandler";

const ContextRoute = () => {
  const currentEmailIndex = useSelector(
    (state) => state.email.currentEmailIndex
  );
  const emails = useSelector((state) => state.email.emails);
  const currentEmail = emails[currentEmailIndex];
  const personalityDescription = useSelector(
    (state) => state.settings.personalityDescription
  );
  const selectedTone =
    useSelector((state) => state.settings.selectedTone)?.title || "Neutral";
  const emailContent = currentEmail?.content || ""; // Adjust as needed to get the correct email content

  const [ticketInfo, setTicketInfo] = useState(null);
  const [editable, setEditable] = useState(false);
  const [editedContent, setEditedContent] = useState("");

  useEffect(() => {
    const loadTicketInfo = async () => {
      if (currentEmail && currentEmail.ticketId) {
        const tickets = await fetchData("tickets");
        const foundTicket = tickets.find(
          (ticket) => ticket.ID === currentEmail.ticketId
        );
        setTicketInfo(foundTicket);
      }
    };

    if (currentEmail) {
      loadTicketInfo();
    }
  }, [currentEmail]);

  const handleEditToggle = () => {
    setEditable(!editable);
    if (editable) {
      // Reset or save logic here, if necessary
    }
  };

  const handleTextInputChange = (text) => {
    setEditedContent(text);
  };

  const handleGenerateAiResponse = async () => {
    const aiResponse = await generateOpenAiResponse(
      emailContent,
      editedContent,
      personalityDescription,
      selectedTone
    );
    // Process the AI response as needed
    console.log("AI Response:", aiResponse);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.card}
        colors={["#0C0922", "#2F2770"]}
        start={{ x: 1, y: 5 }}
        end={{ x: 10, y: 5 }}
      >
        <ScrollView style={styles.scrollView}>
          {!editable && ticketInfo ? (
            <>
              <Text style={styles.ticketDetailText}>ID: {ticketInfo.ID}</Text>
              <Text style={styles.ticketDetailText}>
                Entered By: {ticketInfo.EnteredBy}
              </Text>
              <Text style={styles.ticketDetailText}>
                Description: {ticketInfo.Description}
              </Text>
              <Text style={styles.ticketDetailText}>
                Status: {ticketInfo.Status}
              </Text>
            </>
          ) : (
            <TextInput
              style={styles.input}
              multiline
              value={editedContent}
              onChangeText={handleTextInputChange}
              placeholder="Enter your context here..."
              placeholderTextColor="#888"
            />
          )}
        </ScrollView>
      </LinearGradient>

      <View style={styles.buttonContainer}>
        <GradientButton
          title={editable ? "Save" : "Edit"}
          onPress={handleEditToggle}
          iconSource={editIcon}
        />
        <GradientButton
          title="Ai Answer"
          onPress={handleGenerateAiResponse}
          iconSource={AiIcon}
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
  input: {
    // Style your text input here
    color: "white",
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    padding: 10,
  },
  ticketInfoContainer: {
    padding: 10,
    alignItems: "flex-start",
  },
  ticketDetailText: {
    color: "white",
    fontSize: 18,
    marginVertical: 6,
  },
});

export default ContextRoute;
