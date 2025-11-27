import { FlatList, Text, View } from "react-native";
import ActivityItem from "./ActivityItem";

export default function ActivityList({ activities, onPressItem }) {
  if (!activities.length)
    return (
      <View className="py-10">
        <Text className="text-center text-gray-500">No activities found</Text>
      </View>
    );

  return (
    <FlatList
      data={activities}
      keyExtractor={(i) => i.id}
      renderItem={({ item }) => (
        <ActivityItem item={item} onPress={onPressItem} />
      )}
      contentContainerStyle={{ paddingBottom: 150 }}
    />
  );
}
