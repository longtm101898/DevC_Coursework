import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import SvgUri from "react-native-svg-uri";
import rock from "../assets/weapons/rock.svg";
import paper from "../assets/weapons/paper.svg";
import scissors from "../assets/weapons/scissors.svg";
import question from "../assets/weapons/question.svg";

const weapon = ({ type }) => {
  choseWeapon = type => {
    switch (type) {
      case "rock":
        return rock;
      case "paper":
        return paper;
      case "scissors":
        return scissors;
      default:
        return question;
    }
  };

  return (
    <View>
      <View style={styles.image}>
        <SvgUri width="160" height="180" source={choseWeapon(type)} />
      </View>
      <Text style={styles.name}>{type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    justifyContent: "center",
    alignItems: "center"
  },
  name: {
    textAlign: "center"
  }
});

export default weapon;
