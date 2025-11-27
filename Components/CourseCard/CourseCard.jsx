import { Image, Text, TouchableOpacity, View } from "react-native";

export default function CourseCard({ title, progress, onPress, image }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: "100%",
        height: 280, // increased height
        borderRadius: 16,
        overflow: "hidden",
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      {/* Image Section (70%) */}
      <View style={{ flex: 7 }}>
        <Image
          source={image}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>

      {/* Info Section (30%) */}
      <View
        style={{
          flex: 3,
          padding: 12,
          backgroundColor: "#fff",
          justifyContent: "flex-start",
        }}
      >
        <Text style={{ color: "#61894d", fontWeight: "600", fontSize: 16 }}>
          {title}
        </Text>

        {progress && (
          <Text style={{ color: "#555", fontSize: 14, marginTop: 4 }}>
            Progress: {progress}
          </Text>
        )}

        {/* Bottom-right View button */}
        <View
          style={{
            backgroundColor: "#61894d",
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 999,
            alignSelf: "flex-end",
            marginTop: 8,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 12,
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            View
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
