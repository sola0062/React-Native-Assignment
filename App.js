import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { UserProvider } from "./context/UserContext";
import UserListScreen from "./screens/UserListScreen";

export default function App() {
  return (
    <UserProvider>
      <View style={styles.container}>
        <UserListScreen />
        <StatusBar style="auto" />
      </View>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
