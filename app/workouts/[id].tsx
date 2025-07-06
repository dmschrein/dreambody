import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Details = () => {
  /* To extract the id from the url */
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Workout Detials: {id}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
