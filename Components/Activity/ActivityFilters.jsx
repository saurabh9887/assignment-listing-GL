import { Pressable, Text, TextInput, View } from "react-native";

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
        placeholder="Search activities"
        value={query}
        onChangeText={setQuery}
        className="bg-white p-2 rounded mb-2"
      />

      {/* Type Filters */}
      <View className="flex-row mb-2">
        {types.map((t) => (
          <Pressable
            key={t}
            onPress={() => setFilters((prev) => ({ ...prev, type: t }))}
            className={`px-3 py-1 mr-2 rounded ${
              filters.type === t ? "bg-black" : "bg-gray-200"
            }`}
          >
            <Text className={filters.type === t ? "text-white" : "text-black"}>
              {t}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Status Filters */}
      <View className="flex-row">
        {statuses.map((s) => (
          <Pressable
            key={s}
            onPress={() => setFilters((prev) => ({ ...prev, status: s }))}
            className={`px-3 py-1 mr-2 rounded ${
              filters.status === s ? "bg-black" : "bg-gray-200"
            }`}
          >
            <Text
              className={filters.status === s ? "text-white" : "text-black"}
            >
              {s}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
