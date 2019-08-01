import React from "react";
import { StyleSheet, Text, View } from "react-native";

const header = ({ playerWinner }) => {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.title}>Rock - Paper - Scissors</Text>
      <Text style={styles.title}>React Native Week 3!</Text>
      <Text style={styles.playerWin}>Player Win: {playerWinner || "???"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  title: {
    padding: 10,
    fontSize: 20,
    textAlign: "center",
    color: "white"
  },
  playerWin: {
    padding: 20,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center"
  }
});

export default header;
