import { View, Text, Pressable } from "react-native";
import { Avatar } from "react-native-paper";
import styles from "../theme/styles";
import { useUsers } from "../context/UserContext";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";

export default function ListItem({ item }) {
  const [, , , deleteUser] = useUsers();
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
        <Avatar.Image size={60} source={{ uri: item.picture.thumbnail }} />

        <View style={styles.nameContainer}>
          <Text style={styles.name}>{item.name.first}</Text>
          <Text style={styles.name}>{item.name.last}</Text>
        </View>
      </View>
    </ReanimatedSwipeable>
  );
}
