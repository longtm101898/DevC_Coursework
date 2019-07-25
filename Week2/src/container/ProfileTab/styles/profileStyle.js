import { StyleSheet } from "react-native";
const FOLLOW_COLOR = "rgb(71,113,246)";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  row: {
    flexDirection: "row"
  },
  column: {
    flexDirection: "column"
  },
  header: {
    backgroundColor: "#fafafa",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd"
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  profileWrapper: {
    flex: 1,
    justifyContent: "space-between"
  },
  profileNameText: {
    fontSize: 16,
    fontWeight: "900"
  },
  profileJobText: {
    fontSize: 12,
    fontWeight: "normal"
  },
  imageWrapper: { flex: 1 },
  image: { width: 90, height: 90, borderRadius: 45 },
  followWrapper: {
    flex: 2
  },
  btnWrapper: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10
  },
  followBtn: { width: 160, backgroundColor: FOLLOW_COLOR, borderRadius: 20 },
  sendBtn: { borderRadius: 20, width: 60 },
  shadowBtn: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13
  },
  imageSectionWrapper: {
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#eae5e5"
  },
  countWrapper: {
    padding: 10,
    justifyContent: "space-around"
  },
  textBold: {
    fontSize: 20,
    fontWeight: "900"
  },
  textGrey: { fontSize: 10, color: "grey" }
});
