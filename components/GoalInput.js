import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    // to add a parameter to the function in App.js
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  function cancelModalHandler() {
    props.onCancel();
    setEnteredGoalText("");
  }

  console.log("GoalInput.js rendered");

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          // source={require("../assets/images/goal.png")}
          sources="/some/images/goal.png123123"
          style={styles.image}
        />
        <TextInput
          placeholder="Your course goal!"
          style={styles.textInput}
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={cancelModalHandler} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#530acc" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: "row", // default is column
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    borderRadius: 5,
    padding: 10,

  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
