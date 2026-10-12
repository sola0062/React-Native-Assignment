import { StyleSheet, Platform } from "react-native";

const colors = {
  primary: "#315B7D",
  background: "#F7F8FA",
  surface: "#FFFFFF",
  text: "#1F2933",
  secondaryText: "#667085",
  border: "#D9E0E7",
  danger: "#C94A4A",
  white: "#FFFFFF",
};

const dir = Platform.OS === "ios" ? "row-reverse" : "row";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 16,
    backgroundColor: colors.background,
  },

  listItem: {
    flexDirection: dir,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.surface,
  },

  nameContainer: {
    flex: 1,
    paddingHorizontal: 14,
  },

  name: {
    fontSize: 18,
    color: colors.text,
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
    backgroundColor: colors.primary,
  },

  fabText: {
    fontSize: 32,
    color: colors.white,
  },

  deleteButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    backgroundColor: colors.danger,
  },

  deleteText: {
    color: colors.white,
    fontWeight: "bold",
  },

  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,

    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
  },
  clearText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
  },

  emptyText: {
    fontSize: 18,
    color: colors.secondaryText,
    textAlign: "center",
    marginTop: 30,
  },
});

export default styles;
export { colors };
