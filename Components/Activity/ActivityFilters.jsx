import { Pressable, ScrollView, Text, TextInput, View } from "react-native";

export default function ActivityFilters({
  filters,
  setFilters,
  query,
  setQuery,
}) {
  const types = ["All", "OnlineClass", "Assignment", "Quiz", "Discussion"];
  const statuses = ["All", "Upcoming", "InProgress", "Completed"];

  return (
    <View className="mb-4">
      <TextInput
        placeholder="Search activities..."
        value={query}
        onChangeText={setQuery}
        className="bg-white p-3 rounded-lg mb-3 shadow"
        style={{
          borderWidth: 1,
          borderColor: "#ddd",
        }}
      />

      {/* Types */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {types.map((t) => (
          <Pressable
            key={t}
            onPress={() => setFilters((prev) => ({ ...prev, type: t }))}
            style={{
              paddingHorizontal: 14,
              paddingVertical: 6,
              borderRadius: 20,
              marginRight: 10,
              backgroundColor:
                filters.type === t ? "#61894d" : "rgba(0,0,0,0.06)",
            }}
          >
            <Text
              style={{
                color: filters.type === t ? "white" : "#333",
                fontWeight: "500",
              }}
            >
              {t}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* Status */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10 }}
      >
        {statuses.map((s) => (
          <Pressable
            key={s}
            onPress={() => setFilters((prev) => ({ ...prev, status: s }))}
            style={{
              paddingHorizontal: 14,
              paddingVertical: 6,
              borderRadius: 20,
              marginRight: 10,
              backgroundColor:
                filters.status === s ? "#61894d" : "rgba(0,0,0,0.06)",
            }}
          >
            <Text
              style={{
                color: filters.status === s ? "white" : "#333",
                fontWeight: "500",
              }}
            >
              {s}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
