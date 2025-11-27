import { Platform, Pressable, Text, View } from "react-native";

export default function ActivityItem({ item, onPress }) {
  const formatDate = (raw) => {
    if (!raw) return "";

    const date = new Date(raw);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };
  // Colors for types
  const typeColors = {
    OnlineClass: "#4A90E2",
    Assignment: "#F5A623",
    Quiz: "#D0021B",
    Discussion: "#7B61FF",
  };

  // Status colors
  const statusColors = {
    Upcoming: "#61894d",
    InProgress: "#F5A623",
    Completed: "#4CAF50",
  };

  // NEXT ACTION ENGINE
  const nextActionMap = {
    OnlineClass: {
      Upcoming: "Join Class",
      InProgress: "Go to Live Session",
      Completed: "View Recording",
    },
    Assignment: {
      Upcoming: "View Assignment",
      InProgress: "Continue Submission",
      Completed: "View Feedback",
    },
    Quiz: {
      Upcoming: "Start Quiz",
      InProgress: "Resume Quiz",
      Completed: "View Results",
    },
    Discussion: {
      Upcoming: "View Topic",
      InProgress: "Continue Discussion",
      Completed: "View Thread",
    },
  };

  const nextAction = nextActionMap[item.type][item.status];

  return (
    <Pressable
      onPress={() => onPress(item)}
      style={{
        backgroundColor: "white",
        padding: 16,
        marginBottom: 14,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
      }}
    >
      {/* Top Row: Title + Type */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <Text
          style={{ fontSize: 16, fontWeight: "600", color: "#333", flex: 1 }}
        >
          {item.title}
        </Text>

        <View
          style={{
            backgroundColor: typeColors[item.type],
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 20,
          }}
        >
          <Text style={{ fontSize: 12, color: "white", fontWeight: "600" }}>
            {item.type}
          </Text>
        </View>
      </View>

      {/* Status & Schedule */}
      <View style={{ marginBottom: 14 }}>
        <Text style={{ fontSize: 13, color: "#666" }}>
          {formatDate(item.schedule)}
        </Text>

        <Text
          style={{
            marginTop: 4,
            fontSize: 13,
            fontWeight: "600",
            color: statusColors[item.status],
          }}
        >
          {item.status}
        </Text>
      </View>

      {/* MAIN CTA BUTTON */}
      <Pressable
        onPress={() => onPress(item)}
        style={{
          backgroundColor: "#61894d",
          paddingVertical: 10,
          borderRadius: 8,

          // ⬇️ Platform-specific width rules
          width: Platform.select({
            web: "auto", // button shrinks around text for desktop
            default: "100%", // full width on mobile
          }),

          alignSelf: Platform.select({
            web: "flex-start", // avoid stretching horizontally
            default: "auto",
          }),

          paddingHorizontal: Platform.select({
            web: 16, // add some left/right padding for a compact look
            default: 0,
          }),
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "600",
            fontSize: 14,
          }}
        >
          {nextAction}
        </Text>
      </Pressable>
    </Pressable>
  );
}
