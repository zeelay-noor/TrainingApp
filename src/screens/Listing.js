import React, { useRef, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
  ImageBackground,
  Platform,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function Listing() {
  const imagesData = [
    {
      uri: require("../../assets/1.jpeg"),
      description: "A chic floral dress perfect for a sunny day out.",
    },
    {
      uri: require("../../assets/2.jpeg"),
      description:
        "Comfortable denim jeans, versatile for any casual occasion.",
    },
    {
      uri: require("../../assets/3.jpeg"),
      description:
        "Elegant evening gown, ideal for special events and celebrations.",
    },
    {
      uri: require("../../assets/4.jpeg"),
      description: "Stylish sneakers that combine comfort with a trendy look.",
    },
    {
      uri: require("../../assets/5.jpeg"),
      description:
        "A cozy knit sweater, perfect for chilly evenings and relaxed wear.",
    },
    {
      uri: require("../../assets/6.jpeg"),
      description:
        "Classic white t-shirt, a wardrobe essential for effortless styling.",
    },
    {
      uri: require("../../assets/7.jpeg"),
      description:
        "Sophisticated blazer, suitable for both office and smart-casual looks.",
    },
    {
      uri: require("../../assets/8.jpeg"),
      description:
        "Casual shorts, great for summer adventures and outdoor activities.",
    },
    {
      uri: require("../../assets/9.jpeg"),
      description:
        "A trendy handbag, adding a touch of elegance to any outfit.",
    },
  ];

  const scrollX = useRef(new Animated.Value(0)).current;
  const [activeImage, setActiveImage] = useState(null);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const renderImageItem = (item, index) => {
    // Define the item width (match imageContainer width)
    const itemWidth = width * 0.85;

    // The inputRange for animations should be based on the item's position
    const inputRange = [
      (index - 1) * itemWidth,
      index * itemWidth,
      (index + 1) * itemWidth,
    ];

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.9, 1.1, 0.9],
      extrapolate: "clamp",
    });

    const translateX = scrollX.interpolate({
      inputRange,
      outputRange: [-50, 0, -50],
      extrapolate: "clamp",
    });

    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.7, 1, 0.7],
      extrapolate: "clamp",
    });

    return (
      <View key={index} style={styles.imageContainer}>
        <TouchableWithoutFeedback onPress={() => setActiveImage(item)}>
          <Animated.Image
            source={item.uri}
            style={[
              styles.image,
              { transform: [{ scale }, { translateX }], opacity },
            ]}
            resizeMode="cover"
          />
        </TouchableWithoutFeedback>
        <Text style={styles.imageDescription}>{item.description}</Text>
      </View>
    );
  };

  return (
    <ImageBackground
      source={{
        uri: "https://i.pinimg.com/236x/3f/84/28/3f8428edb4a26b7a671c4bf0838fc21f.jpg",
      }}
      style={styles.background}
      blurRadius={3}
      resizeMode="cover"
    >
      <View style={styles.overlayBackground} />

      <View style={styles.container}>
        <Text style={styles.heading}>Choose Your Daily Wear</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16} // Standard for smooth animations
          pagingEnabled // Essential for snapping behavior
          contentContainerStyle={styles.scrollViewContent}
          // The key to smoother snapping: precise snapToInterval and alignment
          snapToInterval={width * 0.85} // Should perfectly match imageContainer width
          decelerationRate="fast" // Can also try "normal" or a custom value (e.g., 0.9)
          snapToAlignment="center"
        >
          {imagesData.map(renderImageItem)}
        </ScrollView>

        {activeImage && (
          <TouchableWithoutFeedback onPress={() => setActiveImage(null)}>
            <View style={styles.overlay}>
              <Animated.Image
                source={activeImage.uri}
                style={styles.zoomedImage}
                resizeMode="contain"
              />
              <Text style={styles.zoomedDescription}>
                {activeImage.description}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlayBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  container: {
    flex: 1,
    paddingTop: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 34,
    // fontFamily: 'YourElegantFont', // <-- UNCOMMENT & REPLACE if you've added a custom font
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#F0F8FF",
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    letterSpacing: 2,
  },
  scrollViewContent: {
    // Ensuring `paddingHorizontal` is not here helps `snapToAlignment` work precisely
    alignItems: "center",
    paddingBottom: 40,
  },
  imageContainer: {
    width: width * 0.85, // Main image takes 85% of screen width
    height: height * 0.5 + 60, // Reduced height for smaller overall image
    justifyContent: "flex-start",
    alignItems: "center",
    // No `marginHorizontal` here for cleaner snapping with `snapToInterval`
  },
  image: {
    width: "80%", // Image takes 80% of its container's width
    height: "80%", // Image takes 80% of its container's height
    borderRadius: 15,
    shadowColor: "rgba(132, 28, 94, 0.3)", // Pinkish shadow for consistency
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 8,
    marginBottom: 20, // Space between image and description
  },
  imageDescription: {
    position: "relative",
    bottom: 0,
    width: "90%",
    textAlign: "center",
    color: "#444",
    fontSize: 15,
    fontWeight: "600",
    backgroundColor: "#FFB6C1", // Baby pink color
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  zoomedImage: {
    width: width * 0.9, // Maintain zoomed image size
    height: height * 0.7,
    borderRadius: 15,
  },
  zoomedDescription: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
