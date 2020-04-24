import React, { Component } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

import { Container, Body, Content, Card, CardItem } from "native-base";

import { Col, Row, Grid } from "react-native-easy-grid";

import Text from "../common/CustomText";
import AppHeader from "./AppHeader";
import Slider from "./Slider";
import addressIcon from "../../assets/icons/address.png";
import item1 from "../../assets/images/item1.png";
import item4 from "../../assets/images/item4.png";
import fillstar from "../../assets/icons/fillstar.png";
import unfillstar from "../../assets/icons/unfillstar.png";
import food from "../../assets/icons/food.png";
import clothes from "../../assets/icons/clothes.png";
import travel from "../../assets/icons/travel.png";
import beauty from "../../assets/icons/beauty.png";
import gifts from "../../assets/icons/gifts.png";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <AppHeader {...this.props} />
        <Content>
          <Grid>
            <Row style={styles.sliderBox}>
              <Slider />
            </Row>
            <Row style={styles.itemCatBox}>
              <Col>
                <TouchableOpacity>
                  <View style={styles.categoryColBox}>
                    <Image
                      source={food}
                      resizeMode={"contain"}
                      style={styles.categoryIcons}
                    />

                    <Text type="medium">Food</Text>
                  </View>
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity>
                  <View style={styles.categoryColBox}>
                    <Image
                      source={clothes}
                      resizeMode={"contain"}
                      style={styles.categoryIcons}
                    />
                    <Text type="medium">Clothes</Text>
                  </View>
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity>
                  <View style={styles.categoryColBox}>
                    <Image
                      source={travel}
                      resizeMode={"contain"}
                      style={styles.categoryIcons}
                    />
                    <Text type="medium">Travel</Text>
                  </View>
                </TouchableOpacity>
              </Col>
              <Col style={styles.categoryColBox}>
                <TouchableOpacity>
                  <View style={styles.categoryColBox}>
                    <Image
                      source={beauty}
                      resizeMode={"contain"}
                      style={styles.categoryIcons}
                    />
                    <Text type="medium">Beauty</Text>
                  </View>
                </TouchableOpacity>
              </Col>
              <Col style={styles.categoryColBox}>
                <TouchableOpacity>
                  <View style={styles.categoryColBox}>
                    <Image
                      source={gifts}
                      resizeMode={"contain"}
                      style={styles.categoryIcons}
                    />
                    <Text type="medium">Gifts</Text>
                  </View>
                </TouchableOpacity>
              </Col>
            </Row>
            <Row style={styles.itemRowCont}>
              <Col>
                <Card style={{ flex: 0 }}>
                  <CardItem cardBody>
                    <Body>
                      <Row>
                        <Image source={item1} style={styles.itemImagesty} />
                      </Row>
                      <Row style={styles.itemTitleBox}>
                        <Text style={styles.itemTitle} type="semibold">
                          Rantanlal Clothes{" "}
                        </Text>
                      </Row>
                      <Row style={styles.itemDescBox}>
                        <Image
                          source={addressIcon}
                          resizeMode={"contain"}
                          style={styles.itemDescLoc}
                        />
                        <Text style={styles.itemDescLocData}>
                          2 Km Away (562 Reviews)
                        </Text>
                      </Row>
                      <Row style={styles.itemRatingBox}>
                        <Image
                          source={fillstar}
                          resizeMode={"contain"}
                          style={styles.ratingStar}
                        />
                        <Image
                          source={fillstar}
                          resizeMode={"contain"}
                          style={styles.ratingStar}
                        />
                        <Image
                          source={fillstar}
                          resizeMode={"contain"}
                          style={styles.ratingStar}
                        />
                        <Image
                          source={fillstar}
                          resizeMode={"contain"}
                          style={styles.ratingStar}
                        />
                        <Image
                          source={fillstar}
                          resizeMode={"contain"}
                          style={styles.ratingStar}
                        />
                      </Row>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
              <Col>
                <Card style={{ flex: 0 }}>
                  <CardItem cardBody>
                    <Body>
                      <Row>
                        <Image source={item4} style={styles.itemImagesty} />
                      </Row>
                      <Row style={styles.itemTitleBox}>
                        <Text style={styles.itemTitle} type="semibold">
                          Rantanlal Clothes{" "}
                        </Text>
                      </Row>
                      <Row style={styles.itemDescBox}>
                        <Image
                          source={addressIcon}
                          resizeMode={"contain"}
                          style={styles.itemDescLoc}
                        />
                        <Text style={styles.itemDescLocData}>
                          2 Km Away (562 Reviews)
                        </Text>
                      </Row>
                      <Row style={styles.itemRatingBox}>
                        <Image
                          source={fillstar}
                          resizeMode={"contain"}
                          style={styles.ratingStar}
                        />
                        <Image
                          source={fillstar}
                          resizeMode={"contain"}
                          style={styles.ratingStar}
                        />
                        <Image
                          source={fillstar}
                          resizeMode={"contain"}
                          style={styles.ratingStar}
                        />
                        <Image
                          source={fillstar}
                          resizeMode={"contain"}
                          style={styles.ratingStar}
                        />
                        <Image
                          source={unfillstar}
                          resizeMode={"contain"}
                          style={styles.ratingStar}
                        />
                      </Row>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
            </Row>
            <Row style={styles.itemRowCont}>
              <Col>
                <Card style={{ flex: 0 }}>
                  <CardItem cardBody>
                    <Body>
                      <Row>
                        <Image source={item4} style={styles.itemImagesty} />
                      </Row>
                      <Row style={styles.itemTitleBox}>
                        <Text style={styles.itemTitle} type="semibold">
                          Rantanlal Clothes{" "}
                        </Text>
                      </Row>
                      <Row style={styles.itemDescBox}>
                        <Image
                          source={addressIcon}
                          resizeMode={"contain"}
                          style={styles.itemDescLoc}
                        />
                        <Text style={styles.itemDescLocData}>
                          2 Km Away (562 Reviews)
                        </Text>
                      </Row>
                      <Row style={styles.itemRatingBox}>
                        <Image
                          source={fillstar}
                          resizeMode={"contain"}
                          style={styles.ratingStar}
                        />
                        <Image
                          source={fillstar}
                          resizeMode={"contain"}
                          style={styles.ratingStar}
                        />
                        <Image
                          source={fillstar}
                          resizeMode={"contain"}
                          style={styles.ratingStar}
                        />
                        <Image
                          source={fillstar}
                          resizeMode={"contain"}
                          style={styles.ratingStar}
                        />
                        <Image
                          source={unfillstar}
                          resizeMode={"contain"}
                          style={styles.ratingStar}
                        />
                      </Row>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
              <Col>
                <Card style={{ flex: 0 }}>
                  <CardItem cardBody>
                    <Body>
                      <Row>
                        <Image source={item1} style={styles.itemImagesty} />
                      </Row>
                      <Row style={styles.itemTitleBox}>
                        <Text style={styles.itemTitle} type="semibold">
                          Rantanlal Clothes{" "}
                        </Text>
                      </Row>
                      <Row style={styles.itemDescBox}>
                        <Image
                          source={addressIcon}
                          resizeMode={"contain"}
                          style={styles.itemDescLoc}
                        />
                        <Text style={styles.itemDescLocData}>
                          2 Km Away (562 Reviews)
                        </Text>
                      </Row>
                      <Row style={styles.itemRatingBox}>
                        <Image
                          source={fillstar}
                          resizeMode={"contain"}
                          style={styles.ratingStar}
                        />
                        <Image
                          source={fillstar}
                          resizeMode={"contain"}
                          style={styles.ratingStar}
                        />
                        <Image
                          source={fillstar}
                          resizeMode={"contain"}
                          style={styles.ratingStar}
                        />
                        <Image
                          source={fillstar}
                          resizeMode={"contain"}
                          style={styles.ratingStar}
                        />
                        <Image
                          source={fillstar}
                          resizeMode={"contain"}
                          style={styles.ratingStar}
                        />
                      </Row>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}
export default Homepage;

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
  categoryColBox: {
    alignItems: "center",
  },
  categoryIcons: {
    width: 70,
    height: 70,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  sliderBox: { marginTop: 20 },
  itemCatBox: { padding: 25 },
  itemRowCont: { padding: 25, marginTop: -20 },
  itemImagesty: { height: 200, width: "100%", flex: 1 },
  itemTitleBox: { paddingLeft: 10, paddingTop: 10 },
  itemTitle: { fontSize: 15 },
  itemDescBox: { paddingLeft: 10, paddingTop: 5 },
  itemDescLoc: { width: 15, height: 15 },
  itemDescLocData: { paddingLeft: 7, fontSize: 9 },
  itemRatingBox: {
    paddingLeft: 10,
    paddingTop: 8,
    paddingBottom: 20,
  },
  ratingStar: { width: 15, height: 15, margin: 2 },
});
