import { View, Text, FlatList, Pressable, RefreshControl } from "react-native";

import { useState } from "react";
import { useUsers } from "../context/UserContext";
import ListItem from "../components/ListItem";
import styles from "../theme/styles";

export default function UserListScreen() {
  const [users, fetchOneUser, fetchUsers, deleteUser, clearUsers] = useUsers();
  const [refreshing, setRefreshing] = useState(false);

  async function onRefresh() {
    setRefreshing(true);

    await fetchUsers();

    setRefreshing(false);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome to the User List</Text>

        <Pressable onPress={clearUsers}>
          <Text style={styles.clearText}>Clear</Text>
        </Pressable>
      </View>

      <FlatList
        data={users}
        renderItem={({ item }) => (
          <ListItem item={item} deleteUser={deleteUser} />
        )}
        keyExtractor={(item) => item.login.uuid}
        ListEmptyComponent={<Text style={styles.emptyText}>No users</Text>}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      <Pressable style={styles.fab} onPress={fetchOneUser}>
        <Text style={styles.fabText}>+</Text>
      </Pressable>
    </View>
  );
}
