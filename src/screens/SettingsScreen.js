//scr// screens // SettingsScreen.js
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
import { useDispatch, useSelector } from "react-redux";
import {
  setPersonalityDescription,
  setSelectedTone,
} from "../store/actions/settingsActions";
import toneOptions from "../data/toneOptions";
import GradientText from "../components/GradientText";
import { LinearGradient } from "expo-linear-gradient";
import GradientButton from "../components/GradientButton";
import { globalStyles } from "../../styles/globalStyles";

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const personalityDescription = useSelector(
    (state) => state.settings.personalityDescription
  );
  const selectedTone = useSelector((state) => state.settings.selectedTone);

  const [text, setText] = useState(personalityDescription);
  const [localSelectedTone, setLocalSelectedTone] = useState(
    selectedTone || toneOptions[0]
  );

  const handleSelectTone = (tone) => {
    setLocalSelectedTone(tone);
  };

  const handleSave = () => {
    dispatch(setPersonalityDescription(text));
    dispatch(setSelectedTone(localSelectedTone));
  };

  const renderToneItem = ({ item }) => {
    const isSelected = localSelectedTone.id === item.id;
    const gradientColors = isSelected
      ? ["#4CAF50", "#81C784"]
      : ["#1F83AD", "#38089F"];

    return (
      <LinearGradient colors={gradientColors} style={styles.gradientButton}>
        <TouchableOpacity
          style={styles.toneButton}
          onPress={() => handleSelectTone(item)}
        >
          <Text style={styles.toneButtonText}>{item.title}</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <GradientText style={globalStyles.subtitle}>
          Personality Settings
        </GradientText>
      </View>

      <LinearGradient
        style={styles.card}
        colors={["#0C0922", "#2F2770"]}
        start={{ x: 1, y: 5 }}
        end={{ x: 10, y: 5 }}
      >
        <ScrollView
          style={styles.scrollView}
          keyboardShouldPersistTaps="handled"
        >
          <TextInput
            style={globalStyles.emailBody}
            multiline
            value={text}
            onChangeText={setText}
            placeholder="Please describe yourself..."
            placeholderTextColor="white"
          />
        </ScrollView>
      </LinearGradient>

      <View style={styles.titleContainer}>
        <GradientText style={globalStyles.subtitle}>Tone Settings</GradientText>
      </View>

      <View style={styles.toneButtonContainer}>
        <FlatList
          data={toneOptions}
          renderItem={renderToneItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
        />
      </View>

      <View style={styles.titleContainer}>
        <GradientText style={globalStyles.subtitle}>Description</GradientText>
      </View>

      <LinearGradient
        style={styles.card2}
        colors={["#0C0922", "#2F2770"]}
        start={{ x: 1, y: 5 }}
        end={{ x: 10, y: 5 }}
      >
        <ScrollView style={styles.scrollView}>
          <Text style={globalStyles.emailBody}>
            {localSelectedTone.description}
          </Text>
        </ScrollView>
      </LinearGradient>

      <View style={styles.saveBtnContainer}>
        <GradientButton
          title="Save"
          colors={["#15CDB7", "#387E75"]}
          onPress={handleSave}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0115",
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
    marginTop: 10,
  },
  card: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    padding: 15,
    marginBottom: 5,
    marginTop: 10,
    flex: 0.5,
  },
  card2: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    padding: 15,
    marginBottom: 5,
    marginTop: 10,
    flex: 1,
  },
  toneButtonContainer: {
    marginTop: 10,
    paddingHorizontal: 6,
  },
  gradientButton: {
    flex: 1,
    margin: 5,
    borderRadius: 15,
  },
  toneButton: {
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  toneButtonText: {
    color: "white",
    textAlign: "center",
  },
  saveBtnContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});

export default SettingsScreen;
