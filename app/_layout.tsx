// app/layout.jsx
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen
          name="courseDetail"
          options={{ title: "Course Details" }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
