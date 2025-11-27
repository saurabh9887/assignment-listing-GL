import { Image, Text, TouchableOpacity, View } from "react-native";

export default function CourseCard({ title, progress, onView, image }) {
  return (
    <View
      style={{
        width: "100%",
        height: 280,
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
      {/* 70% Image */}
      <View style={{ flex: 7 }}>
        <Image
          source={image}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>

      {/* 30% Info */}
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

        {/* View Button */}
        <TouchableOpacity
          onPress={onView}
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
        </TouchableOpacity>
      </View>
    </View>
  );
}
