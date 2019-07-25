import React, { Component } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Left,
  Icon,
  Content,
  Body,
  Footer,
  Form,
  Input,
  Thumbnail
} from "native-base";
import { shortenText } from "../../helper/utils";

class CommentModal extends Component {
  state = { modal: false };
  handleModal = () => {
    this.setState({ modal: !this.state.modal });
  };
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.handleModal}>
          <Text style={{ color: "grey" }}>View more comment</Text>
        </TouchableOpacity>
        <Modal visible={this.state.modal} animationType="slide">
          <Container>
            <Header
              style={[
                styles.whiteBackground,
                {
                  borderBottomWidth: 1,
                  borderBottomColor: "#dddddd"
                }
              ]}
            >
              <Left>
                <Icon name="arrow-back" onPress={this.handleModal} />
              </Left>
              <Body>
                <Text>Comment</Text>
              </Body>
            </Header>
            <Content>
              <View style={{ flexDirection: "column", marginTop: 10 }}>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Thumbnail
                      small
                      source={require("../../../assets/avt.jpg")}
                    />
                  </View>
                  <View style={{ marginLeft: 10, marginRight: 30 }}>
                    <Text style={{ fontWeight: "900" }}>LongTM </Text>
                    <Text>
                      {shortenText(this.props.authorTitleComment, 70)}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: 40,
                    marginTop: 20
                  }}
                >
                  <View>
                    <Thumbnail
                      small
                      source={require("../../../assets/1.jpg")}
                    />
                  </View>
                  <View style={{ marginLeft: 10, marginRight: 30 }}>
                    <Text style={{ fontWeight: "900" }}>LongTM2 </Text>
                    <Text>{shortenText("Oh. Hi LongTM", 70)}</Text>
                  </View>
                </View>
              </View>
            </Content>
            <Footer style={styles.whiteBackground}>
              <Form>
                <Input placeholder="Add your comment .." />
              </Form>
            </Footer>
          </Container>
        </Modal>
      </View>
    );
  }
}

export default CommentModal;

const styles = StyleSheet.create({
  whiteBackground: {
    backgroundColor: "#fafafa"
  }
});
