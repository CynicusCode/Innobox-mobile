//scr// routes // EmailRoute.js
import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GradientButton from "../components/GradientButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../data/firebaseConfig";
import loadingGif from "../../assets/images/loadingGif.gif";
import {
  setEmails,
  setCurrentEmailIndex,
  setLoading,
} from "../store/actions/emailActions";
import previousIcon from "../../assets/images/previous.png";
import nextIcon from "../../assets/images/Next.png";

const EmailRoute = () => {
  const dispatch = useDispatch();
  const emails = useSelector((state) => state.email.emails);
  const currentEmailIndex = useSelector(
    (state) => state.email.currentEmailIndex
  );
  const isLoading = useSelector((state) => state.email.isLoading);

  useEffect(() => {
    const getEmailData = async () => {
      const fetchedEmails = await fetchData("emails");
      if (fetchedEmails && fetchedEmails.length > 0) {
        dispatch(setEmails(fetchedEmails));
        dispatch(setLoading(false));
      }
    };
    getEmailData();
  }, [dispatch]);

  const handleNext = () => {
    if (currentEmailIndex < emails.length - 1) {
      dispatch(setCurrentEmailIndex(currentEmailIndex + 1));
    }
  };

  const handlePrevious = () => {
    if (currentEmailIndex > 0) {
      dispatch(setCurrentEmailIndex(currentEmailIndex - 1));
    }
  };

  const navigateToContext = () => {
    const currentEmail = emails[currentEmailIndex];
    if (currentEmail) {
      navigation.navigate("ContextRoute", { ticketId: currentEmail.ticketId });
    }
  };

  const currentEmail = emails.length > 0 ? emails[currentEmailIndex] : null;

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
            <View style={styles.centeredContent}>
              <Image source={loadingGif} style={styles.loadingImage} />
            </View>
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
  centeredContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingImage: {
    width: 100,
    height: 100,
  },
});

export default EmailRoute;
