import { Link } from "expo-router";
import { Text, View } from "react-native";

/* Home page that can be routed to other pages
 * add quiz before hitting profile page
 */
export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-accent">Welcome!</Text>
      <Link href="/onboarding">Onboarding</Link>
      <Link href="/workouts">Workouts</Link>
    </View>
  );
}
