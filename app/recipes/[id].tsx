import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RecipeDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Recipe Details: {id}</Text>
    </View>
  );
};

export default RecipeDetails;

const styles = StyleSheet.create({});
