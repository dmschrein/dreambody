import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

export default function Step1() {
  // State to hold the user's fitness goal
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const router = useRouter();

  const goals = [
    "Achieve sustainable weight loss",
    "Build muscle and strength",
    "Improve flexibility and mobility",
    "Enhance overall health and well-being",
    "Improve sleep quality",
    "Reduce stress and anxiety",
    "Boost energy levels",
    "Enhance mental clarity and focus",
    "Develop a consistent exercise routine",
    "Improve cardiovascular health",
    "Enhance bone density and strength",
    "Improve digestion and gut health",
  ];
  const toggleSelection = (goal: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };

  return (
    <View className="flex-1 justify-center items-center p-4">
      {/* Question for the user */}
      <Text className="text-lg">What is your fitness goal?</Text>
      {/* Input for the user to type their goal */}
      {goals.map((goal) => (
        <TouchableOpacity
          key={goal}
          onPress={() => toggleSelection(goal)}
          className={`p-2 m-2 rounded-lg ${
            selectedGoals.includes(goal) ? "bg-blue-500" : "bg-gray-200"
          }`}
        >
          <Text className="text-lg">{goal}</Text>
        </TouchableOpacity>
      ))}
      {/* Button to navigate to the next step */}
      <Button title="Next" onPress={() => router.push("/onboarding/step2")} />
    </View>
  );
}
