import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Workouts() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl">Workouts</Text>
      <Link href="/workouts/active-workouts">
        <Text>Active Workouts</Text>
      </Link>
      <Link href="/workouts/next-workouts">
        <Text>Next Workouts</Text>
      </Link>
      <Link href="/workouts/recommendation">
        <Text>Recommendation</Text>
      </Link>
    </View>
  );
}
