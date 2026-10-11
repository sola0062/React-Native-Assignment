import { StyleSheet, Platform } from "react-native";

const dir = Platform.OS === "ios" ? "row-reverse" : "row";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    padding: 16,
  },

  listItem: {
    flexDirection: dir,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },

  nameContainer: {
    flex: 1,
  },

  name: {
    fontSize: 18,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4CAF50",
  },

  fabText: {
    fontSize: 32,
    color: "#fff",
  },
});

export default styles;
