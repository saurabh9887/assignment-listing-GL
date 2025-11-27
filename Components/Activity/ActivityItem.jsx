import { Platform, Pressable, Text, View } from "react-native";

// Small helper for consistent detail rows
const Detail = ({ label, value }) => (
  <View style={{ marginBottom: 4 }}>
    <Text style={{ fontSize: 12, color: "#777" }}>{label}</Text>
    <Text style={{ fontSize: 14, fontWeight: "500", color: "#333" }}>
      {value}
    </Text>
  </View>
);

export default function ActivityItem({ item, onPress }) {
  // ---------------- COLORS ----------------
  const typeColors = {
    OnlineClass: "#4A90E2",
    Assignment: "#F5A623",
    Quiz: "#D0021B",
    Discussion: "#7B61FF",
  };

  const statusColors = {
    Upcoming: "#61894d",
    InProgress: "#F5A623",
    Completed: "#4CAF50",
  };

  // ---------------- NEXT ACTION ENGINE ----------------
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

  // ---------------- LEARNER-RELEVANT DETAILS ----------------
  const renderDetails = () => {
    switch (item.type) {
      case "OnlineClass":
        return (
          <>
            <Detail label="Instructor" value={item.instructor} />
            <Detail label="Duration" value={item.duration} />
            <Detail label="Mode" value={item.mode} />
          </>
        );

      case "Assignment":
        return (
          <>
            <Detail label="Due Date" value={item.dueDate} />
            <Detail label="Max Score" value={item.maxScore} />
            <Detail
              label="Attempts"
              value={`${item.attemptsUsed}/${item.attemptsAllowed}`}
            />
          </>
        );

      case "Quiz":
        return (
          <>
            <Detail label="Questions" value={item.questions} />
            <Detail label="Time Limit" value={item.timeLimit} />
            <Detail label="Attempts Left" value={item.attemptsLeft} />
          </>
        );

      case "Discussion":
        return (
          <>
            <Detail label="Replies" value={item.replies} />
            <Detail label="Your Status" value={item.participationStatus} />
          </>
        );

      default:
        return null;
    }
  };

  // ---------------- DATE FORMATTER ----------------
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <Pressable
      onPress={() => onPress(item)}
      style={{
        backgroundColor: "white",
        padding: 16,
        marginBottom: 16,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
      }}
    >
      {/* TITLE + TYPE */}
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
          <Text style={{ color: "white", fontWeight: "600", fontSize: 12 }}>
            {item.type}
          </Text>
        </View>
      </View>

      {/* SCHEDULE + STATUS */}
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

      {/* LEARNER-FOCUSED DETAILS */}
      <View style={{ marginBottom: 14 }}>{renderDetails()}</View>

      {/* CTA BUTTON */}
      <Pressable
        onPress={() => onPress(item)}
        style={{
          backgroundColor: "#61894d",
          paddingVertical: 10,
          borderRadius: 8,

          // responsive width
          width: Platform.select({
            web: "auto",
            default: "100%",
          }),

          alignSelf: Platform.select({
            web: "flex-start",
            default: "auto",
          }),

          paddingHorizontal: Platform.select({
            web: 16,
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
