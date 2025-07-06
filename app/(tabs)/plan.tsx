import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const exercisePlan = [
  { id: "1", name: "Push Ups", sets: 3, reps: 15 },
  { id: "2", name: "Squats", sets: 4, reps: 12 },
  { id: "3", name: "Plank", sets: 3, reps: "1 min" },
];

const dietPlan = [
  { id: "1", meal: "Breakfast", details: "Oatmeal with banana and almonds" },
  { id: "2", meal: "Lunch", details: "Grilled chicken salad" },
  { id: "3", meal: "Dinner", details: "Salmon, brown rice, steamed broccoli" },
];

export default function Plan() {
  const [activeTab, setActiveTab] = useState("exercise");

  const renderExercise = ({
    item,
  }: {
    item: { id: string; name: string; sets: number; reps: number | string };
  }) => (
    <View style={styles.itemRow}>
      <MaterialCommunityIcons
        name="dumbbell"
        size={24}
        color="#A084E8"
        style={{ marginRight: 12 }}
      />
      <View>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemSubtitle}>
          {item.sets} sets x {item.reps} reps
        </Text>
      </View>
    </View>
  );

  const renderDiet = ({
    item,
  }: {
    item: { id: string; meal: string; details: string };
  }) => (
    <View style={styles.itemRow}>
      <MaterialIcons
        name="restaurant-menu"
        size={24}
        color="#A084E8"
        style={{ marginRight: 12 }}
      />
      <View>
        <Text style={styles.itemTitle}>{item.meal}</Text>
        <Text style={styles.itemSubtitle}>{item.details}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Tabs */}
        <View style={styles.tabRow}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "exercise" && styles.activeTab]}
            onPress={() => setActiveTab("exercise")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "exercise" && styles.activeTabText,
              ]}
            >
              Exercise Plan
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === "diet" && styles.activeTab]}
            onPress={() => setActiveTab("diet")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "diet" && styles.activeTabText,
              ]}
            >
              Diet Plan
            </Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {activeTab === "exercise" ? (
            exercisePlan.length > 0 ? (
              <FlatList
                data={exercisePlan}
                renderItem={renderExercise}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
              />
            ) : (
              <Text style={styles.emptyText}>No exercise plan set.</Text>
            )
          ) : dietPlan.length > 0 ? (
            <FlatList
              data={dietPlan}
              renderItem={renderDiet}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.listContent}
            />
          ) : (
            <Text style={styles.emptyText}>No diet plan set.</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingHorizontal: 0,
  },
  tabRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    paddingHorizontal: 20,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 20,
    backgroundColor: "#F4F3FF",
    marginHorizontal: 6,
  },
  activeTab: {
    backgroundColor: "#A084E8",
  },
  tabText: {
    color: "#A084E8",
    fontWeight: "bold",
    fontSize: 16,
  },
  activeTabText: {
    color: "#fff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listContent: {
    paddingBottom: 16,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8FF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
  },
  itemSubtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  emptyText: {
    color: "#aaa",
    fontSize: 16,
    textAlign: "center",
    marginTop: 40,
  },
});
