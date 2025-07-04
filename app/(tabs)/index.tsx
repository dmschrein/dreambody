import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SignOutButton from "../components/SignOutButton";

export default function Page() {
  const { user } = useUser();

  return (
    <View>
      {/* Only visible to signed-in users */}
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <SignOutButton />
      </SignedIn>

      {/** Only visible to guests */}
      <SignedOut>
        <Link href="/(auth)/sign-in">
          <Text>Sign in</Text>
        </Link>
        <Link href="/(auth)/sign-up">
          <Text>Sign up</Text>
        </Link>
      </SignedOut>

      <Text>Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
