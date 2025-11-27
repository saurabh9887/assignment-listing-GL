import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, Text } from "react-native";
import ActivityFilters from "../../../Components/Activity/ActivityFilters";
import ActivityList from "../../../Components/Activity/ActivityList";
import useActivities from "../../../hooks/ActivitiesHook";

export default function CourseActivitiesScreen() {
  const { id, title } = useLocalSearchParams(); // course id
  const { activities, filters, setFilters, query, setQuery } =
    useActivities(id);

  const onPressItem = (item) => {
    console.log("Activity pressed:", item.title);
  };

  return (
    <SafeAreaView className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold mb-4">Activities for {title}</Text>

      <ActivityFilters
        filters={filters}
        setFilters={setFilters}
        query={query}
        setQuery={setQuery}
      />

      <ActivityList activities={activities} onPressItem={onPressItem} />
    </SafeAreaView>
  );
}
