// app/onboarding/index.tsx
import { Redirect } from "expo-router";

export default function OnboardingIndex() {
  // immediately send anyone hitting /onboarding → /onboarding/step1
  return <Redirect href="/onboarding/step1" />;
}
