import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);

  const goalFlatList = (itemData) => {
    return (
      <GoalItem key={itemData.item} goalName={itemData.item.goalName} />
      // <View style={styles.goalItem}>
      //   <Text style={styles.goalText}>{row.text}</Text>
      // </View>
    );
  }

  function addGoalHandler(enteredGoalText) {
    // setCourseGoals([...courseGoals, enteredGoalText]);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { goalName: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            // goalFlatList const function
            return (
              <GoalItem goalName={itemData.item.goalName} />
            );
          }}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={true}
        />
        {/* <ScrollView alwaysBounceVertical={false}>
          <Text>List of Goals</Text>
          {courseGoals.map((goal, index) => (
            <View style={styles.goalItem} key={index}>
              <Text style={styles.goalText}>
                {index} {goal}
              </Text>
            </View>
          ))}
        </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  goalsContainer: {
    flex: 4,
  },
});
