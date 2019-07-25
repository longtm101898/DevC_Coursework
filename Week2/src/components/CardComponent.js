import React from "react";
import { Text, Image } from "react-native";
import { Feather, MaterialIcons, Ionicons, Entypo } from "@expo/vector-icons";
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Button,
  Right
} from "native-base";
import { shortenText } from "../helper/utils";
import { introduceText } from "../constant/textIntroduce";
import CommentModal from "../container/CommentTab/commentTab";

const CardComponent = ({ image, likes }) => (
  <Card>
    <CardItem>
      <Left>
        <Thumbnail small source={require("../../assets/avt.jpg")} />
        <Body>
          <Text>LongTM </Text>
        </Body>
      </Left>
      <Right>
        <Entypo name="dots-three-vertical" size={20} />
      </Right>
    </CardItem>
    <CardItem cardBody>
      <Image source={image} style={{ height: 200, width: null, flex: 1 }} />
    </CardItem>
    <CardItem style={{ height: 45 }}>
      <Left>
        <Button transparent onPress={() => alert("like")}>
          <Feather name="heart" size={20} color="black" />
        </Button>
        <Button transparent onPress={() => alert("comment")}>
          <MaterialIcons name="chat-bubble-outline" size={20} color="black" />
        </Button>
        <Button transparent onPress={() => alert("share")}>
          <Feather name="share" size={20} color="black" />
        </Button>
      </Left>
    </CardItem>

    <CardItem style={{ height: 20 }}>
      <Text>
        <Ionicons name="ios-heart" size={20} color="black" /> {likes} likes
      </Text>
    </CardItem>
    <CardItem>
      <Body>
        <Text>
          <Text style={{ fontWeight: "900" }}>LongTM </Text>
          {shortenText(introduceText.text, 50)}
        </Text>
        <CommentModal authorTitleComment={introduceText.text} />
      </Body>
    </CardItem>
  </Card>
);

export default CardComponent;
