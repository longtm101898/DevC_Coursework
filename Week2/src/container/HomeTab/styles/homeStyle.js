import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  storyWrapper: {
    height: 100
  },
  storyScrollWrapper: {
    alignItems: "center",
    paddingStart: 5,
    paddingEnd: 5
  },
  story: {
    marginHorizontal: 5,
    borderColor: "pink",
    borderWidth: 2
  },
  header: {
    backgroundColor: "#fafafa",
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd"
  },
  storyTop: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 7
  },
  row: {
    flexDirection: "row"
  },
  center: {
    alignItems: "center",
    justifyContent: "center"
  }
});
