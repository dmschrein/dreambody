import { View, Text, Button, TextInput } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Step2() {
  // State to hold the user's workout preferences
  const [preferences, setPreferences] = useState("");
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center p-4">
      {/* Question for the user */}
      <Text className="text-lg">What are your workout preferences?</Text>
      {/* Input for the user to type their preferences */}
      <TextInput
        value={preferences}
        onChangeText={setPreferences}
        className="border p-2 m-2 w-full"
      />
      {/* Button to navigate to the next step */}
      <Button title="Next" onPress={() => router.push("/onboarding/step3")} />
    </View>
  );
}
