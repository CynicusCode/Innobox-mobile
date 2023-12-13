import React, { useState } from "react";
import { View, TextInput, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GradientButton from "../components/GradientButton";
import { globalStyles } from "../../styles/globalStyles";
import AiIcon from "../../assets/images/eos-icons_ai.png";
import edit from "../../assets/images/edit.png";
import context from "../../assets/images/context.png";

const ContextRoute = () => {
  const [text, setText] = useState("");

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
            style={globalStyles.emailBody}
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
          onPress={() => {
            /* Handle get context action */
          }}
          iconSource={context}
        />
        <GradientButton
          title="Edit"
          onPress={() => {
            /* Handle edit context action */
          }}
          iconSource={edit}
        />
        <GradientButton
          title="Ai Answer"
          colors={["#15CDB7", "#387E75"]}
          onPress={() => {
            /* Handle generate AI response action */
          }}
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    padding: 10,
  },
  // ... Add other styles if needed ...
});

export default ContextRoute;
