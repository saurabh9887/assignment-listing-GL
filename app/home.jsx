import { Platform, ScrollView, Text, View } from "react-native";
import CourseCard from "../Components/CourseCard/CourseCard";

const courses = [
  {
    id: 1,
    title: "Artificial Intelligence",
    progress: "50%",
    image: require("../assets/b1.jpg"),
  },
  {
    id: 2,
    title: "Machine Learning",
    progress: "30%",
    image: require("../assets/b2.jpg"),
  },
  {
    id: 3,
    title: "Cloud Computing",
    progress: "75%",
    image: require("../assets/b3.jpg"),
  },
  {
    id: 4,
    title: "Data Science",
    progress: "10%",
    image: require("../assets/b4.jpg"),
  },
];

export default function HomeScreen() {
  const isWeb = Platform.OS === "web";

  return (
    <ScrollView className="flex-1 px-4 pt-4 bg-gray-100">
      <Text className="text-2xl font-bold mb-8 mt-2">
        Your Enrolled Programs
      </Text>

      <View
        style={{
          flexDirection: isWeb ? "row" : "column",
          flexWrap: isWeb ? "wrap" : "nowrap",
          justifyContent: isWeb ? "space-between" : "flex-start",
        }}
      >
        {courses.map((course) => (
          <View
            key={course.id}
            style={{
              width: isWeb ? "23%" : "100%",
              marginBottom: 16,
            }}
          >
            <CourseCard
              title={course.title}
              progress={course.progress}
              image={course.image}
              onPress={() => console.log("Clicked:", course.title)}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
