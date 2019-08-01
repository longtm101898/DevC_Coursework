import React from "react";
import { View, Modal, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "./Button";
import { WinnerPieChart } from "./Statistic/PieChart";

class Statisic extends React.Component {
  state = {
    modalOpen: false,
    selectedSlice: {
      label: "",
      value: 0
    },
    labelWidth: 0
  };

  handleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };

  onSelectSlice = (key, index, valuesPie, totalGames) => {
    this.setState({
      selectedSlice: {
        label: key,
        value: (valuesPie[index] / totalGames).toFixed(2) + "%"
      }
    });
  };

  setLabelWidth = width => {
    this.setState({ labelWidth: width });
  };

  render() {
    const {
      player1,
      player2,
      totalGames,
      totalTieGames
    } = this.props.gameStatistic;
    const { selectedSlice, labelWidth } = this.state;
    return (
      <View style={styles.statisicContainer}>
        <Button
          onPress={this.handleModal}
          text="Game history"
          styleName={styles.btnOpenModalStyle}
        />
        <Modal visible={this.state.modalOpen} animationType="fade">
          <View style={{ flex: 1 }}>
            <View style={styles.modalHeader}>
              <Ionicons
                name="ios-arrow-back"
                size={24}
                color="black"
                onPress={this.handleModal}
              />
            </View>
            <View style={{ flex: 0.95 }}>
              <WinnerPieChart
                player1={player1}
                player2={player2}
                totalGames={totalGames}
                totalTieGames={totalTieGames}
                onSelectSlice={this.onSelectSlice}
                labelWidth={labelWidth}
                selectedSlice={selectedSlice}
                setLabelWidth={this.setLabelWidth}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default Statisic;

const styles = StyleSheet.create({
  statisicContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5
  },
  btnOpenModalStyle: {
    backgroundColor: "grey",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 5,
    borderBottomColor: "#7a222f"
  },
  modalHeader: {
    flex: 0.05,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    margin: 5
  }
});
