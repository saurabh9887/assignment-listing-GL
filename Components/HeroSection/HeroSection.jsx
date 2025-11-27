// Components/HeroSection/HeroSection.jsx
import {
  Dimensions,
  ImageBackground,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function HeroSection({ slides }) {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      className="w-full"
      style={{ width }}
    >
      {slides.map((slide) => (
        <ImageBackground
          key={slide.id}
          source={slide.image}
          style={{
            width,
            height: Platform.OS === "web" ? 400 : 250,
            justifyContent: "center",
            alignItems: "center",
          }}
          className="rounded-2xl overflow-hidden"
        >
          <View
            className="p-4 rounded-md"
            style={{
              backgroundColor: "rgba(0,0,0,0.4)",
            }}
          >
            <Text className="text-white text-center font-bold text-2xl">
              {slide.title}
            </Text>
          </View>
        </ImageBackground>
      ))}
    </ScrollView>
  );
}
