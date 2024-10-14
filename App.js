import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  const goalFlatList = (itemData) => {
    return (
      <GoalItem key={itemData.item} goalName={itemData.item.goalName} />
      // <View style={styles.goalItem}>
      //   <Text style={styles.goalText}>{row.text}</Text>
      // </View>
    );
  };

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  function addGoalHandler(enteredGoalText) {
    // setCourseGoals([...courseGoals, enteredGoalText]);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { goalName: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  return (
    <>
      {/* Fragment Component Wrapper. Siblings components in root is not allowed */}
      <StatusBar style='dark' /> 
      {/* status bar for actual smart phone top status bar */}
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        {/* button don't have style prop, use Pressable instead to style the button add Text component inside it */}

        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
        />
        {/* {modalIsVisible && <GoalInput onAddGoal={addGoalHandler}  />} !NOTE: Show modal if visible */}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              // goalFlatList const function
              return (
                <GoalItem
                  id={itemData.item.id}
                  goalName={itemData.item.goalName}
                  onDeleteItem={deleteGoalHandler}
                />
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    // backgroundColor: "#1e085a", add to app.json
  },
  goalsContainer: {
    flex: 4,
  },
});
