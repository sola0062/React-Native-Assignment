import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { UserProvider } from "./context/UserContext";
import UserListScreen from "./screens/UserListScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <UserProvider>
        <View style={styles.container}>
          <UserListScreen />
          <StatusBar style="auto" />
        </View>
      </UserProvider>
    </GestureHandlerRootView>
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
