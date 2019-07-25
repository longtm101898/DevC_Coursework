import React, { Component } from "react";

import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Container, Icon, Content, Button } from "native-base";
import CardComponent from "../../components/CardComponent";
import ProfileTabHeader from "./profileTabHeader";
import { styles } from "./styles/profileStyle";
import { images } from "../../constant/imagesArray";

var { width } = Dimensions.get("window");
class ProfileTab extends Component {
  state = {
    activeTab: 0
  };
  segmentClicked = tabIndex => {
    this.setState({
      activeTab: tabIndex
    });
  };
  renderSectionOne = () =>
    images.map((img, i) => (
      <TouchableOpacity key={i} onPress={() => alert(img)}>
        <View
          style={[
            { width: width / 3 },
            { height: width / 3 },
            { marginBottom: 2 },
            i % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }
          ]}
        >
          <Image
            style={{ flex: 1, width: undefined, height: undefined }}
            source={img}
          />
        </View>
      </TouchableOpacity>
    ));
  renderSectionTwo = () =>
    images.map((img, i) => <CardComponent image={img} key={i} likes="100" />);

  renderSection = () => {
    if (this.state.activeTab == 0) {
      return (
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {this.renderSectionOne()}
        </View>
      );
    } else if (this.state.activeTab == 1) {
      return <View>{this.renderSectionTwo()}</View>;
    }
  };

  renderProfile = () => (
    <View>
      <View style={[styles.row, styles.profileWrapper]}>
        <View style={[styles.imageWrapper, styles.center]}>
          <Image
            source={require("../../../assets/avt.jpg")}
            style={styles.image}
          />
        </View>
        <View style={[styles.followWrapper, styles.column, styles.center]}>
          <View style={{ flex: 1 }}>
            <Text style={styles.profileNameText}>Trần Minh Long</Text>
            <Text style={styles.profileJobText}>.Net, React Developer</Text>
          </View>
          <View style={[styles.btnWrapper, styles.row, styles.center]}>
            <View style={{ flex: 0.7 }}>
              <Button
                onPress={() => alert("Followed")}
                style={[styles.followBtn, styles.shadowBtn, styles.center]}
              >
                <Text style={{ color: "white" }}>Follow</Text>
              </Button>
            </View>
            <View
              style={{
                flex: 0.3
              }}
            >
              <Button
                info
                style={[styles.sendBtn, styles.shadowBtn, styles.center]}
                onPress={() => alert("message sended")}
              >
                <Feather name="send" size={18} color="white" />
              </Button>
            </View>
          </View>
        </View>
      </View>
      <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
        <Text>Trần Minh Long</Text>
      </View>
    </View>
  );

  renderImagesSection = () => (
    <View style={[styles.row, styles.imageSectionWrapper]}>
      <View>
        <Button
          transparent
          onPress={() => this.segmentClicked(0)}
          active={this.state.activeTab == 0}
        >
          <Icon
            name="grid"
            style={this.state.activeTab == 0 ? {} : { color: "gray" }}
          />
        </Button>
      </View>
      <Button
        transparent
        onPress={() => this.segmentClicked(1)}
        active={this.state.activeTab == 1}
      >
        <Icon
          name="list"
          style={this.state.activeTab == 1 ? {} : { color: "gray" }}
        />
      </Button>
    </View>
  );
  renderCount = () => (
    <View style={[styles.row, styles.countWrapper]}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.textBold}>18</Text>
        <Text style={styles.textGrey}>posts</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.textBold}>10</Text>
        <Text style={styles.textGrey}>followers</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.textBold}>98</Text>
        <Text style={styles.textGrey}>following</Text>
      </View>
    </View>
  );
  render() {
    return (
      <Container style={styles.container}>
        <ProfileTabHeader styles={styles.header} />
        <Content>
          <View style={{ paddingTop: 20 }}>
            {this.renderProfile()}
            {this.renderCount()}
            {this.renderImagesSection()}
            {this.renderSection()}
          </View>
        </Content>
      </Container>
    );
  }
}
export default ProfileTab;
