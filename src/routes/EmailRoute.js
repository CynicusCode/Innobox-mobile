import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GradientButton from "../components/GradientButton";
import previousIcon from "../../assets/images/previous.png";
import nextIcon from "../../assets/images/Next.png";
import emailIcon from "../../assets/images/email.png";
import { fetchData } from "../data/firebaseConfig";

const EmailRoute = () => {
  const [emails, setEmails] = useState([]);
  const [currentEmailIndex, setCurrentEmailIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getEmailData = async () => {
      const fetchedEmails = await fetchData("emails");
      if (fetchedEmails && fetchedEmails.length > 0) {
        setEmails(fetchedEmails);
        setIsLoading(false);
      }
    };

    getEmailData();
  }, []);

  const handleNext = () => {
    if (currentEmailIndex < emails.length - 1) {
      setCurrentEmailIndex(currentEmailIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentEmailIndex > 0) {
      setCurrentEmailIndex(currentEmailIndex - 1);
    }
  };

  const currentEmail = emails[currentEmailIndex];

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.card}
        colors={["#0C0922", "#2F2770"]}
        start={{ x: 1, y: 5 }}
        end={{ x: 10, y: 5 }}
      >
        <ScrollView style={styles.scrollView}>
          {isLoading ? (
            <Text style={styles.text}>Loading...</Text>
          ) : currentEmail ? (
            <View>
              <Text style={styles.emailSubject}>{currentEmail.subject}</Text>
              <Text style={styles.emailSender}>
                From: {currentEmail.Sender}
              </Text>
              <Text style={styles.emailDate}>{currentEmail.dateTime}</Text>
              <Text style={styles.emailBody}>{currentEmail.body}</Text>
            </View>
          ) : (
            <Text style={styles.text}>No emails found</Text>
          )}
        </ScrollView>
      </LinearGradient>

      <View style={styles.buttonContainer}>
        <GradientButton
          title="Previous"
          onPress={handlePrevious}
          iconSource={previousIcon}
        />
        <GradientButton
          title="Next"
          onPress={handleNext}
          iconSource={nextIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#0C0115",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  emailSubject: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  emailSender: {
    fontSize: 20,
    color: "white",
  },
  emailDate: {
    fontSize: 20,
    color: "white",
  },
  emailBody: {
    fontSize: 18,
    color: "white",
  },
  card: {
    flex: 1,
    width: "90%",
    borderRadius: 10,
    padding: 5,
    marginTop: 30,
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 6,
    marginBottom: 15,
  },
});

export default EmailRoute;
