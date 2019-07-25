import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import {
  Container,
  Header,
  Left,
  Icon,
  Content,
  Body,
  Title,
  Right,
  Thumbnail
} from "native-base";
import { styles } from "./styles/homeStyle";
import CardComponent from "../../components/CardComponent";
import { images } from "../../constant/imagesArray";

class HomeTab extends Component {
  renderStory = () =>
    images.map((img, i) => (
      <View key={i} style={styles.center}>
        <Thumbnail source={img} style={styles.story} />
        <Text>name</Text>
      </View>
    ));
  renderCard = () =>
    images.map((img, i) => <CardComponent image={img} key={i} likes="100" />);

  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Icon name="ios-camera" />
          </Left>
          <Body>
            <Title style={{ color: "black" }}>Instagram</Title>
          </Body>
          <Right>
            <Icon name="send" />
          </Right>
        </Header>
        <Content>
          <View style={styles.storyWrapper}>
            <View style={styles.storyTop}>
              <Text style={{ fontWeight: "bold" }}>Stories</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="md-play" style={{ fontSize: 14 }} />
                <Text style={{ fontWeight: "bold" }}>Watch All</Text>
              </View>
            </View>
            <View style={[styles.row, { flex: 3 }]}>
              <ScrollView
                horizontal
                contentContainerStyle={styles.storyScrollWrapper}
                showsHorizontalScrollIndicator={false}
              >
                {this.renderStory()}
              </ScrollView>
            </View>
          </View>
          <View>{this.renderCard()}</View>
        </Content>
      </Container>
    );
  }
}

export default HomeTab;
