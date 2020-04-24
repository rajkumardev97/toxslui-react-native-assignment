import React, { useRef, useState, useEffect } from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";

const allData = [
  {
    title: "Kids Dress",
    price: "$19",
    src: "https://i.imgur.com/UYiroysl.jpg",
  },
  {
    title: "Kids Dress",
    price: "$29",
    src: "https://i.imgur.com/UPrs1EWl.jpg",
  },
  {
    title: "Kids Dress",
    price: "$29",
    src: "https://i.imgur.com/MABUbpDl.jpg",
  },
  {
    title: "Kids Dress",
    price: "$19",
    src: "https://i.imgur.com/KZsmUi2l.jpg",
  },
  {
    title: "Kids Dress",
    price: "$29",
    src: "https://i.imgur.com/2nCt3Sbl.jpg",
  },
];
const { width: screenWidth } = Dimensions.get("window");

const MyCarousel = (props) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(allData);
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.src }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <View style={styles.wrapperDesc}>
          <Text style={styles.titleDesc}>{item.title}</Text>
          <Text style={styles.priceDesc}>{item.price}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={180}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 20,
    height: 180,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
  wrapperDesc: {
    width: screenWidth,
    flexDirection: "row",
    marginTop: -100,
    padding: 20,
  },
  priceDesc: {
    paddingLeft: screenWidth - 270,
    fontSize: 25,
    color: "#ffffff",
    fontWeight: "700",
  },
  titleDesc: { fontSize: 25, color: "#ffffff", fontWeight: "700" },
});
