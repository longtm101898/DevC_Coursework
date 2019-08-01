import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const button = ({ styleName: btnStyle, onPress, text }) => {
  const styleName = btnStyle === "flat" ? styles.flat : btnStyle;
  return (
    <TouchableOpacity onPress={onPress} style={styleName}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  flat: {
    borderRadius: 40,
    width: 110,
    backgroundColor: "#ff2e4c",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#7a222f",
    paddingLeft: 5,
    paddingRight: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16
  },
  text: {
    color: "#fff",
    marginTop: 20,
    marginBottom: 20,
    letterSpacing: 1
  }
});

export default button;
