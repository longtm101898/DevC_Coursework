import React from "react";
import { View, Text, Dimensions } from "react-native";
import { PieChart } from "react-native-svg-charts";

export const WinnerPieChart = ({
  player1,
  player2,
  totalGames,
  totalTieGames,
  onSelectSlice,
  labelWidth,
  selectedSlice,
  setLabelWidth
}) => {
  var player1Score = player1.score,
    player2Score = player2.score,
    valuesPie = [];
  valuesPie.push(player1Score, player2Score);
  const { label, value } = selectedSlice;
  const keys = [player1.label, player2.label];
  const colors = ["#600080", "#06ffe0"];
  const dataWinner = keys.map((key, index) => {
    return {
      key,
      value: valuesPie[index],
      svg: { fill: colors[index] },
      arc: {
        outerRadius: 70 + valuesPie[index] + "%",
        padAngle: label === key ? 0.1 : 0
      },
      onPress: () => onSelectSlice(key, index, valuesPie, totalGames)
    };
  });
  const deviceWidth = Dimensions.get("window").width;

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          flex: 0.4
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text>The chart shows the winning rate of each player</Text>
        </View>
        <PieChart style={{ height: 200 }} data={dataWinner} />
        <Text
          onLayout={({
            nativeEvent: {
              layout: { width }
            }
          }) => {
            setLabelWidth(width);
          }}
          style={{
            position: "absolute",
            left: deviceWidth / 2 - labelWidth / 2,
            textAlign: "center"
          }}
        >
          {`${label} \n ${value}`}
        </Text>
      </View>
      <View style={{ flex: 0.6, margin: 10 }}>
        <Text style={{ fontSize: 22, fontWeight: "400" }}>Statisic: </Text>
        <Text>Total Games: {totalGames}</Text>
        <Text>
          Total Tie Games: {totalTieGames} ->{" "}
          {(totalTieGames / totalGames).toFixed(2)} %
        </Text>
        <Text>
          Total Score: {player1Score} ->{" "}
          {(player1Score / totalGames).toFixed(2)} %
        </Text>
        <Text>
          Total Game losees: {player2Score} ->{" "}
          {(player2Score / totalGames).toFixed(2)} %
        </Text>
      </View>
    </View>
  );
};
