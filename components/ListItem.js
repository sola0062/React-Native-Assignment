import { View, Text, Image, Pressable } from "react-native";
import styles from "../theme/styles";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";

export default function ListItem({ item, deleteUser }) {
  function renderRightActions() {
    return (
      <Pressable
        style={styles.deleteButton}
        onPress={() => deleteUser(item.login.uuid)}
      >
        <Text style={styles.deleteText}>DELETE</Text>
      </Pressable>
    );
  }
  return (
    <ReanimatedSwipeable renderRightActions={renderRightActions}>
      <View style={styles.listItem}>
        <Image source={{ uri: item.picture.thumbnail }} style={styles.avatar} />

        <View style={styles.nameContainer}>
          <Text style={styles.name}>{item.name.first}</Text>
          <Text style={styles.name}>{item.name.last}</Text>
        </View>
      </View>
    </ReanimatedSwipeable>
  );
}
