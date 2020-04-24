import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
} from "react-native";

import { Header, Left, Item, Input, Body, Right, Button } from "native-base";

import menuIcon from "../../assets/icons/menu.png";
import filterIcon from "../../assets/icons/filter.png";
import notificationIcon from "../../assets/icons/notification.png";
import grylocationIcon from "../../assets/icons/grylocation.png";

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Header transparent>
        <Left style={styles.headerLeftBox}>
          <TouchableHighlight>
            <Button
              transparent
              onPress={() => this.props.navigation.toggleDrawer()}
            >
              <Image
                source={menuIcon}
                resizeMode={"contain"}
                style={styles.headerIcon}
              />
            </Button>
          </TouchableHighlight>
        </Left>
        <Body style={styles.headerBodyBox}>
          <Item style={styles.headerBodyItem}>
            <Image
              source={grylocationIcon}
              resizeMode={"contain"}
              style={styles.bodyLocIcon}
            />
            <Input placeholder="Search by location" />
          </Item>
        </Body>
        <Right style={{ maxWidth: 70 }}>
          <TouchableOpacity>
            <Button transparent>
              <Image
                source={filterIcon}
                resizeMode={"contain"}
                style={styles.headerIcon}
              />
            </Button>
          </TouchableOpacity>
          <TouchableHighlight>
            <Button transparent>
              <Image
                source={notificationIcon}
                resizeMode={"contain"}
                style={styles.headerIcon}
              />
            </Button>
          </TouchableHighlight>
        </Right>
      </Header>
    );
  }
}
export default AppHeader;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerIcon: {
    position: "absolute",
    top: 14,
    width: 20,
    height: 20,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  headerLeftBox: { maxWidth: 50 },
  headerBodyBox: { paddingTop: 15, paddingBottom: 10 },
  headerBodyItem: {
    backgroundColor: "#F2F2F2",
    paddingLeft: 38,
    borderRadius: 100,
  },
  bodyLocIcon: {
    position: "absolute",
    top: 14,
    width: 20,
    height: 20,
    paddingLeft: 50,
  },
});
