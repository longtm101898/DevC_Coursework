import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Weapon from "./Weapon";

const Player = ({ label, loading, weapon, score }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.score}>{score}k</Text>
    <View>
      <Weapon type={weapon} loading={loading} />
    </View>
  </View>
);

export default Player;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  label: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 20,
    fontWeight: "800",
    letterSpacing: 5
  },
  score: {
    backgroundColor: "#ff2e4c",
    textAlign: "center",
    borderRadius: 5,
    color: "#ffffff",
    minWidth: 60,
    padding: 10,
    margin: 10,
    fontSize: 20,
    fontWeight: "500"
  }
});
