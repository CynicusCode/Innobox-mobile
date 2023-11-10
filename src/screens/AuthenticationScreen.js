
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0115",
    padding: 10,
  },
  imageContainer: {
    flex: 2,
  },
  image: {
    width: "100%", // Takes the full width of the container
    height: undefined, // Makes sure the height is proportional to the width
    aspectRatio: 1, // Keeps the aspect ratio of the image
    resizeMode: "contain",
  },
  titleContainer: {
    flex: 1, // Title takes up 1 part of the space
    justifyContent: "center", // Centers children vertically in the container
    alignItems: "center", // Centers children horizontally in the container
  },
  title: {
    textAlign: "center",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: "Poppins-Bold", // Make sure 'Poppins-Bold' is loaded correctly
    fontSize: 38,
    lineHeight: 53, // 140% of fontSize
    letterSpacing: 0.38,
    color: "#fff",
  },
  tagLine: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  // ... Add styles for your other components as needed
});
