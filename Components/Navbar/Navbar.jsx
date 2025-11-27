import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <View className="w-full bg-[#61894d] px-4 py-3 flex-row items-center justify-between">
      {/* Left: App Title */}
      <Text className="text-white text-xl font-semibold">Velocity</Text>

      {/* Right: Profile Icon */}
      <TouchableOpacity onPress={() => setOpen(!open)}>
        <Ionicons name="person-circle-outline" size={28} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
}
