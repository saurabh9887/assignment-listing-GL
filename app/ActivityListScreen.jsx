import { Alert, SafeAreaView, Text } from "react-native";
import ActivityFilters from "../Components/Activity/ActivityFilters";
import ActivityList from "../Components/Activity/ActivityList";
import useActivities from "../hooks/ActivitiesHook";

export default function ActivityListScreen() {
  const { activities, filters, setFilters, query, setQuery } = useActivities();

  const onPressItem = (item) => {
    Alert.alert("Activity Pressed", item.title);
  };

  return (
    <SafeAreaView className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold mb-4">Activities</Text>

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
