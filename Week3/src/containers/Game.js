import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "../components/Header";
import Player from "../components/Player";
import Controls from "../components/Controls";
import { weapons } from "../constants/Weapons";
import { getRandomWeapon } from "../actions";
import Statisic from "../components/Statisic";

export default class Game extends Component {
  state = {
    player1: {
      label: "TML",
      weapon: null,
      score: 0
    },
    player2: {
      label: "COMP",
      weapon: null,
      score: 0
    },
    playerWin: "",
    totalGames: 0,
    totalTieGames: 0
  };

  pickWeapon = weapon => {
    var randomWeapon = getRandomWeapon();
    this.setState(
      {
        player1: {
          ...this.state.player1,
          weapon
        },
        player2: {
          ...this.state.player2,
          weapon: randomWeapon
        }
      },
      () => {
        const { player1, player2 } = this.state;
        this.chooseWinner(player1.weapon, player2.weapon);
      }
    );
  };

  chooseWinner = (weapon1, weapon2) => {
    const { totalGames, totalTieGames } = this.state;
    if (weapon1 === weapon2) {
      return this.setState({
        playerWin: "Tie!!",
        totalGames: totalGames + 1,
        totalTieGames: totalTieGames + 1
      });
    }
    return weapons[weapon1].wins.some(wins => wins === weapon2)
      ? this.incrementPlayerScore(this.state.player1.label)
      : this.incrementPlayerScore(this.state.player2.label);
  };

  incrementPlayerScore = player => {
    const { player1, player2, totalGames } = this.state;
    this.setState({
      player1: {
        ...player1,
        ...(player1.label === player ? { score: player1.score + 1 } : {})
      },
      player2: {
        ...player2,
        ...(player2.label === player ? { score: player2.score + 1 } : {})
      },
      playerWin: player,
      totalGames: totalGames + 1
    });
  };
  render() {
    const { player1, player2, playerWin, totalGames } = this.state;
    return (
      <View style={styles.container}>
        <View style={[styles.header, styles.borderBottom]}>
          <Header playerWinner={playerWin} />
        </View>
        <View style={[styles.gamePlayerWrapper, styles.borderBottom]}>
          <View style={[styles.playerWrapper]}>
            <Player
              label={player1.label}
              weapon={player1.weapon}
              score={player1.score}
              loading="true"
            />
            <Text>vs</Text>
            <Player
              label={player2.label}
              weapon={player2.weapon}
              score={player2.score}
              loading="false"
            />
          </View>
          <Text style={styles.totalGamesText}>Total Games: {totalGames}</Text>
        </View>

        <View style={styles.gameControl}>
          <Controls pickWeapon={this.pickWeapon} />
          <Statisic gameStatistic={this.state} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 0.3,
    flexDirection: "row",
    backgroundColor: "#d66868",
    justifyContent: "center",
    alignItems: "center"
  },
  gamePlayerWrapper: {
    flex: 0.5,
    backgroundColor: "#a3fff0",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  playerWrapper: {
    flexDirection: "row",
    justifyContent: "center"
  },
  gameControl: {
    flex: 0.2
  },
  borderBottom: {
    borderBottomColor: "black",
    borderBottomWidth: 5
  },
  totalGamesText: {
    fontWeight: "600",
    fontSize: 20
  }
});
