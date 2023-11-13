// globalStyles.js
import { StyleSheet } from "react-native";
import useCustomFonts from "../hooks/useCustomFonts";

export const globalStyles = StyleSheet.create({
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 40,
  },
  marketingTag: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "white",
  },
  buttonLabel: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
  },
  copywriteInfo: {
    fontFamily: "Poppins-Medium",
    fontSize: 10,
    color: "#7CFFE7",
  },
  header: {
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    color: "#7CFFE7",
  },
  emailBody: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "white",
  },
  emailHeader: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
  },
  homeTags: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    marginLeft: 14,
    color: "#7CFFE7",
    padding: 4,
  },
  subtitle: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
  },
  // Add other global styles as needed
});
