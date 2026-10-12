import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { UserProvider } from "./context/UserContext";
import UserListScreen from "./screens/UserListScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <UserProvider>
          <SafeAreaView style={styles.container}>
            <UserListScreen />
            <StatusBar style="auto" />
          </SafeAreaView>
        </UserProvider>
      </SafeAreaProvider>
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
