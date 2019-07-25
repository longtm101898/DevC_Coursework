import React from "react";
import { Text } from "react-native";
import { Header, Left, Right, Icon, Body } from "native-base";
const ProfileTabHeader = ({ styles }) => {
  return (
    <Header style={styles}>
      <Left>
        <Icon name="arrow-back" style={{ paddingLeft: 10 }} />
      </Left>
      <Body>
        <Text>LongTM</Text>
      </Body>
      <Right>
        <Icon name="apps" style={{ paddingRight: 10 }} />
      </Right>
    </Header>
  );
};

export default ProfileTabHeader;
