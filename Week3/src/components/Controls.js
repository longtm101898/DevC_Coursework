import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "./Button";

import { weaponKeys } from "../constants/Weapons";

const Controls = ({ pickWeapon }) => {
  return (
    <View style={styles.container}>
      {weaponKeys.map((weapon, i) => (
        <View key={i} style={styles.element}>
          <Button
            styleName="flat"
            onPress={() => pickWeapon(weapon)}
            text={weapon}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2e99b0",
    flexDirection: "row",
    justifyContent: "center",
    padding: 5
  },
  element: {
    alignItems: "center",
    margin: 5
  }
});

export default Controls;
