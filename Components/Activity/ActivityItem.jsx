import { Text, TouchableOpacity, View } from "react-native";
import { formatDateISO } from "../../utils/FormateDate";

export default function ActivityItem({ item, onPress }) {
  const cta =
    item.type === "OnlineClass"
      ? item.status === "Upcoming"
        ? "Join"
        : "Continue"
      : item.status === "Completed"
        ? "Review"
        : "Start";

  return (
    <TouchableOpacity
      onPress={() => onPress?.(item)}
      className="bg-white p-4 rounded-2xl shadow mb-3"
    >
      <View className="flex-row justify-between items-start">
        <View className="flex-1 pr-3">
          <Text className="text-sm font-semibold">{item.type}</Text>
          <Text className="text-lg font-bold mt-1">{item.title}</Text>

          {/* Schedule / Due Date */}
          <Text className="text-xs mt-2 text-gray-500">
            {item.schedule
              ? `Schedule: ${formatDateISO(item.schedule)}`
              : item.dueDate
                ? `Due: ${formatDateISO(item.dueDate)}`
                : ""}
          </Text>

          {/* Progress */}
          {item.progress != null && (
            <View className="mt-2">
              <Text className="text-xs">Progress: {item.progress}%</Text>
            </View>
          )}
        </View>

        <View className="items-center">
          <Text className="text-sm mb-2">{item.status}</Text>
          <View className="bg-gray-100 rounded-full px-3 py-2">
            <Text className="font-semibold">{cta}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
