import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { Icon } from "react-native-elements";
import { globalStyles } from "../../styles/globalStyles";
import toneOptions from "../data/toneOptions";
import GradientText from "../components/GradientText";
import { LinearGradient } from "expo-linear-gradient";
import GradientButton from "../components/GradientButton"; // Import GradientButton

const SettingsScreen = () => {
  const defaultTone = toneOptions.find((tone) => tone.title === "Professional");
  const [selectedTone, setSelectedTone] = useState(defaultTone);
  const [text, setText] = useState("");

  const handleSelectTone = (tone) => {
    setSelectedTone(tone);
  };

  const renderToneItem = ({ item }) => (
    <GradientButton
      onPress={() => handleSelectTone(item)}
      title={item.title}
      colors={["#1F83AD", "#38089F"]}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="menu" type="material" color="#7CFFE7" />
        </TouchableOpacity>
        <Text style={[globalStyles.header, styles.title]}>Settings</Text>
      </View>

      {/* Title Container */}
      <View style={styles.titleContainer}>
        <GradientText style={globalStyles.subtitle}>
          Personality Settings
        </GradientText>
      </View>

      <LinearGradient
        style={styles.card}
        colors={["#0E0749", "#0C0922"]}
        start={{ x: 1, y: 5 }}
        end={{ x: 10, y: 5 }}
      >
        <ScrollView style={styles.scrollView}>
          <TextInput
            style={globalStyles.emailBody}
            multiline
            value={text}
            onChangeText={setText}
            placeholder="Please describe yourself, how would you like your e-mails in a general way to sound like"
            placeholderTextColor="white"
          />
        </ScrollView>
      </LinearGradient>

      {/* Title Container */}
      <View style={styles.titleContainer}>
        <GradientText style={globalStyles.subtitle}>
          Tone Settings{" "}
        </GradientText>
      </View>

      {/* Tone Buttons Grid */}
      <FlatList
        data={toneOptions}
        renderItem={renderToneItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        style={styles.toneButtonContainer}
      />
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
    borderBottomWidth: 2,
    borderBottomColor: "#7CFFE7",
  },
  menuButton: {
    marginLeft: 10,
  },
  title: {
    textAlign: "center",
    flexGrow: 1,
  },
  titleContainer: {
    alignItems: "flex-start",
    marginTop: 20,
  },
  card: {
    flex: 0.2,
    width: "90%",
    alignSelf: "center", // Center the card
    borderRadius: 10,
    padding: 15,
    marginBottom: 5,
    marginTop: 10,
  },
  toneButtonContainer: {
    marginTop: 20,
    paddingHorizontal: 5, // Adjust padding as needed
  },
  toneButton: {
    flex: 1,
    margin: 5,
    backgroundColor: "#7CFFE7",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SettingsScreen;
