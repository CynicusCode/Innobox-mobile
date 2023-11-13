import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";
import { globalStyles } from "../../styles/globalStyles";

const SettingsScreen = () => {
  const [description, setDescription] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      {/* Header containing Hamburger Menu Icon and Title */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="menu" type="material" color="#7CFFE7" />
        </TouchableOpacity>
        <Text style={[globalStyles.header, styles.title]}>Settings</Text>
      </View>

      {/* Gradient Title */}
      <View style={styles.titleContainer}>
        <Text style={globalStyles.subTitle}>Describe Yourself</Text>
      </View>

      {/* Description Input */}
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          multiline
          value={description}
          onChangeText={setDescription}
          placeholder="Enter a brief description..."
        />
      </View>

      {/* Subtitle for Personality Modifiers */}
      <View style={styles.subtitleContainer}>
        <Text style={globalStyles.subTitle}>Personality Modifiers</Text>
      </View>

      {/* Card for Personality Modifiers */}
      <View style={styles.card}>
        {/* Add components for personality modifiers here */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0115",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuButton: {
    marginLeft: 10,
  },
  title: {
    textAlign: "center",
    flexGrow: 1,
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  card: {
    flex: 0.4,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    padding: 15,
    marginTop: 30,
    marginBottom: 5,
    backgroundColor: "#fff", // Add a background color to the card
  },
  input: {
    height: 100, // Adjust as needed
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  subtitleContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  // Add more styles as needed
});

export default SettingsScreen;
