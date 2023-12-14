//ContextRoute.js
import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GradientButton from "../components/GradientButton";
import { globalStyles } from "../../styles/globalStyles";
import { extractTicketId } from "../utils/ticketExtractor";
import { fetchData } from "../data/firebaseConfig";
import AiIcon from "../../assets/images/eos-icons_ai.png";
import editIcon from "../../assets/images/edit.png";
import contextIcon from "../../assets/images/context.png";

const ContextRoute = () => {
  const [text, setText] = useState("");
  const [ticketInfo, setTicketInfo] = useState(null);

  const handleGetContext = async () => {
    console.log("Getting context for:", text); //todo: remove this line
    const ticketId = extractTicketId(text);
    console.log("Extracted ticket ID:", ticketId); //todo: remove this line

    if (ticketId) {
      const tickets = await fetchData("tickets");
      const foundTicket = tickets.find((ticket) => ticket.ID === ticketId);
      console.log("Found ticket:", foundTicket); //todo: remove this line
      setTicketInfo(foundTicket);
    } else {
      console.log("No ticket ID found");
      setTicketInfo(null);
    }
  };

  // Add functions for handling Edit and AI Response here
  const handleEdit = () => {
    // Handle edit action
  };

  const handleGenerateAIResponse = () => {
    // Handle AI response generation
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
          <TextInput
            style={styles.input}
            multiline
            value={text}
            onChangeText={setText}
            placeholder="Enter your text here..."
            placeholderTextColor="#888"
          />
        </ScrollView>
      </LinearGradient>

      <View style={styles.buttonContainer}>
        <GradientButton
          title="Context"
          onPress={handleGetContext}
          iconSource={contextIcon}
        />
        <GradientButton
          title="Edit"
          onPress={handleEdit}
          iconSource={editIcon}
        />
        <GradientButton
          title="Ai Answer"
          onPress={handleGenerateAIResponse}
          iconSource={AiIcon}
        />
      </View>

      {ticketInfo && (
        <View style={styles.ticketInfoContainer}>
          <Text style={styles.ticketInfoText}>ID: {ticketInfo.ID}</Text>
          <Text style={styles.ticketInfoText}>
            Entered By: {ticketInfo.EnteredBy}
          </Text>
          <Text style={styles.ticketInfoText}>
            Description: {ticketInfo.Description}
          </Text>
          <Text style={styles.ticketInfoText}>Status: {ticketInfo.Status}</Text>
        </View>
      )}
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
  ticketInfoText: {
    color: "white",
    fontSize: 16,
    marginVertical: 2,
  },
});

export default ContextRoute;
