import { View, Text, FlatList, Pressable } from "react-native";
import { useUsers } from "../context/UserContext";
import ListItem from "../components/ListItem";
import styles from "../theme/styles";

export default function UserListScreen() {
  const [users, fetchOneUser] = useUsers();

  return (
    <View style={styles.screen}>
      <Text>Welcome to the User List</Text>

      <FlatList
        data={users}
        renderItem={ListItem}
        keyExtractor={(item) => item.login.uuid}
      />
      <Pressable style={styles.fab} onPress={fetchOneUser}>
        <Text style={styles.fabText}>+</Text>
      </Pressable>
    </View>
  );
}
