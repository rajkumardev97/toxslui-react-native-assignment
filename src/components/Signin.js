import React, { Component } from "react";

import {
  View,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  KeyboardAwareScrollView,
  ScrollView,
  AsyncStorage,
  StatusBar,
  ImageBackground,
  Dimensions,
} from "react-native";

import Text from "../common/CustomText";

import bgImage from "../../assets/images/signinbg.png";
import logo from "../../assets/images/logo.png";

import emailIcon from "../../assets/icons/emailIcon.png";
import lineIcon from "../../assets/icons/line.png";
import passIcon from "../../assets/icons/passwordIcon.png";
import checkboxIcon from "../../assets/icons/checkbox.png";
import fbBtn from "../../assets/icons/fbBtn.png";
import googleplusBtn from "../../assets/icons/googleplusBtn.png";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");
class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  _handleOpenHomepage = () => {
    this._handleResetStates();
    this.props.navigation.navigate("Homepage");
  };

  _handleOpenSignup = () => {
    this.props.navigation.navigate("Signup");
  };

  _handleResetStates = () => {
    this.setState({ email: "", password: "" });
  };

  static navigationOptions = ({ navigation }) => {
    let drawerLabel = "Signin";

    return { drawerLabel };
  };
  render() {
    const { email, password } = this.state;

    return (
      <ImageBackground source={bgImage} style={styles.Container}>
        <ScrollView>
          <View style={styles.Container}>
            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo} resizeMode={"contain"} />
            </View>
            <View style={styles.inputContainer}>
              <Image
                source={emailIcon}
                style={styles.inputIcon}
                resizeMode={"contain"}
              />
              <Image source={lineIcon} style={styles.lineIconsty} />
              <TextInput
                style={styles.input}
                placeholder={"Email Id"}
                onChangeText={(email) => this.setState({ email })}
                value={email}
                placeholderTextColor={"rgb(128, 128, 128)"}
                underlineColorAndroid="transparent"
              />
            </View>

            <View style={styles.inputContainer}>
              <Image
                source={passIcon}
                style={styles.inputIcon}
                resizeMode={"contain"}
              />
              <Image source={lineIcon} style={styles.lineIconsty} />
              <TextInput
                style={styles.input}
                placeholder={"Password"}
                value={password}
                onChangeText={(password) => this.setState({ password })}
                secureTextEntry={true}
                placeholderTextColor={"rgb(128, 128, 128)"}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={styles.remembermeBox}>
              <Image source={checkboxIcon} />
              <Text
                style={{
                  fontSize: 16,
                  color: "#808080",
                  marginLeft: 10,
                }}
              >
                Remember
              </Text>
            </View>

            <View style={styles.forgotPasswordBox}>
              <Text
                style={{
                  fontSize: 16,
                  color: "#808080",
                }}
              >
                Forgot?
              </Text>
            </View>
          </View>

          <View style={styles.Container}>
            <View style={styles.signinBox}>
              <TouchableOpacity
                onPress={this._handleOpenHomepage}
                style={styles.btnSignin}
              >
                <Text style={styles.text}>Sign In</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.socialContainer}>
              <View style={styles.socialLoginContainer}>
                <TouchableOpacity>
                  <Image
                    source={fbBtn}
                    resizeMode={"contain"}
                    style={styles.socialBtn}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.socialGoogleContainer}>
                <TouchableOpacity>
                  <Image
                    source={googleplusBtn}
                    resizeMode={"contain"}
                    style={styles.socialBtn}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.signupContainer}>
              <Text style={styles.textGrey}>
                Don't have an account ?{" "}
                <Text onPress={this._handleOpenSignup} type="medium">
                  {" "}
                  Sign Up
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default Signin;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 90,
    marginBottom: 30,
  },
  logo: {
    width: 170,
    height: 170,
  },
  input: {
    width: WIDTH - 55,
    height: 50,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 70,
    color: "#000000",
    marginHorizontal: 25,
    borderRadius: 1,
    borderColor: "#ffffff",
    shadowColor: "#ffffff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  inputIcon: {
    position: "absolute",
    top: 14,
    left: 42,
    width: 20,
    height: 20,
  },
  lineIconsty: {
    position: "absolute",
    top: 12,
    left: 75,
  },
  inputContainer: {
    marginTop: 10,
  },
  remembermeBox: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    width: WIDTH / 2,
    flexDirection: "row",
  },
  forgotPasswordBox: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    width: WIDTH / 2,
    flexDirection: "row-reverse",
  },
  signinBox: {
    marginTop: -30,
  },
  socialContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: -20,
  },
  btnSignin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 10,
    backgroundColor: "#bc0d8d",
    justifyContent: "center",
    marginTop: 20,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  textGrey: {
    color: "#808080",
    fontSize: 16,
    textAlign: "center",
  },
  socialLoginContainer: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    width: WIDTH / 2,
    flexDirection: "row",
  },
  socialGoogleContainer: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    width: WIDTH / 2,
    flexDirection: "row-reverse",
  },
  signupContainer: {
    marginTop: -25,
  },
  socialBtn: {
    width: WIDTH / 2 - 35,
    height: 100,
  },
});
