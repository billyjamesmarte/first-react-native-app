import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "orange" }} // for android only ripple
        style={({ pressed }) => pressed && styles.pressedItem} // for ios alternative to android_ripple
        // style={(pressData) => pressData.pressed} without destructuring the object
        // style={({pressed}) => pressed}  destructuring the object
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>
          {props.key} {props.goalName}
        </Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
