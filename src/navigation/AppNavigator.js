//AppNavigator.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Import more icons as needed

import AuthenticationScreen from "../screens/AuthenticationScreen";
import MultiTabScreen from "../screens/MultiTabScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CustomDrawerHeader from "../components/CustomDrawerHeader";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AuthenticationStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {/* Rename this screen to avoid conflict with the Drawer.Screen */}
    <Stack.Screen
      name="AuthenticationScreen" // Changed from 'Authentication'
      component={AuthenticationScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const MultiTabStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MultiTabStackScreen" component={MultiTabScreen} />
  </Stack.Navigator>
);

const SettingsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SettingsStackScreen" component={SettingsScreen} />
  </Stack.Navigator>
);

// Function to get the icon name based on the route name
const getIconName = (routeName) => {
  switch (routeName) {
    case "Authentication":
      return "lock"; // Example, adjust as needed
    case "MultiTab":
      return "dashboard";
    case "Settings":
      return "settings";
    default:
      return "circle"; // Default icon
  }
};

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        const { state, navigation } = props;
        return (
          <DrawerContentScrollView {...props}>
            <CustomDrawerHeader />
            {state.routes.map((route, index) => (
              <TouchableOpacity
                key={route.key}
                style={styles.drawerItem}
                onPress={() => navigation.navigate(route.name)}
              >
                <View style={styles.iconWithLabel}>
                  <MaterialIcons
                    name={getIconName(route.name)}
                    size={24}
                    color="#7CFFE7"
                  />
                  <Text style={styles.drawerItemLabel}>{route.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </DrawerContentScrollView>
        );
      }}
      screenOptions={({ route }) => ({
        headerShown: route.name !== "Authentication",
        drawerType: "front",
        swipeEnabled: true,
        edgeWidth: 50,
        drawerStyle: {
          backgroundColor: "#11114a",
          width: 240,
        },
        drawerLabelStyle: {
          color: "#7CFFE7",
          fontSize: 24,
          fontWeight: "bold",
          alignSelf: "center",
        },
        headerStyle: {
          backgroundColor: "#0C0115",
        },
        headerTintColor: "#7CFFE7",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 18,
        },
      })}
    >
      <Drawer.Screen
        name="Authentication"
        component={AuthenticationStack}
        options={{
          drawerLabel: () => null, // Hides the label in the drawer
          swipeEnabled: true,
        }}
      />
      <Drawer.Screen name="MultiTab" component={MultiTabStack} />
      <Drawer.Screen name="Settings" component={SettingsStack} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 30,
    paddingLeft: 20,
  },
  drawerItemLabel: {
    color: "#7CFFE7",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 15, // Spacing between icon and text
  },
  iconWithLabel: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AppNavigator;
