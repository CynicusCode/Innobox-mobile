import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { globalStyles } from "../../styles/globalStyles";
import useCustomFonts from "../../hooks/useCustomFonts";
import { Icon } from "react-native-elements";
import EmailRoute from "../routes/EmailRoute";
import ContextRoute from "../routes/ContextRoute";
import ResponseRoute from "../routes/ResponseRoute";

const renderScene = SceneMap({
  email: EmailRoute,
  context: ContextRoute,
  response: ResponseRoute,
});

// Custom renderTabBar function
const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "#02B9B9" }}
    style={{ backgroundColor: "#19173D" }}
    labelStyle={{ fontWeight: "bold", color: "#7CFFE7" }}
  />
);

const MultiTab = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "email", title: "E-mail" },
    { key: "context", title: "Context" },
    { key: "response", title: "Response" },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header containing Hamburger Menu Icon and Title */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="menu" type="material" color="#7CFFE7" />
        </TouchableOpacity>
        <Text style={[globalStyles.header, styles.title]}>
          Ai-Response-Deck
        </Text>
      </View>

      {/* Tab View */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: "100%" }}
        style={styles.tabView}
        renderTabBar={renderTabBar}
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
  },
  menuButton: {
    marginLeft: 10,
  },
  title: {
    textAlign: "center",
    flexGrow: 1,
  },
  tabView: {
    flex: 1,
  },
  scene: {
    flex: 1,
  },
  // You can add more styles here as needed
});

export default MultiTab;
