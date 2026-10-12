import { StyleSheet, Platform } from "react-native";

const dir = Platform.OS === "ios" ? "row-reverse" : "row";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 60,
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

  deleteButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "red",
  },

  deleteText: {
    color: "white",
    fontWeight: "bold",
  },

  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  clearText: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 70,
  },
});

export default styles;
