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

import userIcon from "../../assets/icons/user.png";
import contactIcon from "../../assets/icons/contact.png";
import addressIcon from "../../assets/icons/address.png";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      email: "",
      contact: "",
      address: "",
      password: "",
      confpassword: "",
    };
  }

  _handleOpenHomepage = () => {
    this.props.navigation.navigate("Homepage");
  };

  _handleOpenSignin = () => {
    this._handleResetStates();
    this.props.navigation.navigate("Signin");
  };

  _handleResetStates = () => {
    this.setState({
      fullname: "",
      email: "",
      contact: "",
      address: "",
      password: "",
      confpassword: "",
    });
  };

  static navigationOptions = ({ navigation }) => {
    let drawerLabel = "Signup";

    return { drawerLabel };
  };
  render() {
    const {
      fullname,
      email,
      contact,
      address,
      password,
      confpassword,
    } = this.state;
    return (
      <ImageBackground source={bgImage} style={styles.Container}>
        <ScrollView>
          <View style={styles.Container}>
            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.inputContainer}>
              <Image
                source={userIcon}
                style={styles.inputIcon}
                resizeMode={"contain"}
              />
              <Image source={lineIcon} style={styles.lineIconsty} />
              <TextInput
                style={styles.input}
                placeholder={"Full Name"}
                onChangeText={(fullname) => this.setState({ fullname })}
                value={fullname}
                placeholderTextColor={"rgb(128, 128, 128)"}
                underlineColorAndroid="transparent"
              />
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
                source={contactIcon}
                style={styles.inputIcon}
                resizeMode={"contain"}
              />
              <Image source={lineIcon} style={styles.lineIconsty} />
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder={"Contact Number"}
                onChangeText={(contact) => this.setState({ contact })}
                value={contact}
                placeholderTextColor={"rgb(128, 128, 128)"}
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.inputContainer}>
              <Image
                source={addressIcon}
                style={styles.inputIcon}
                resizeMode={"contain"}
              />
              <Image source={lineIcon} style={styles.lineIconsty} />
              <TextInput
                style={styles.input}
                placeholder={"Address"}
                onChangeText={(address) => this.setState({ address })}
                value={address}
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
                onChangeText={(password) => this.setState({ password })}
                value={password}
                secureTextEntry={true}
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
                placeholder={"Confirm Password"}
                onChangeText={(confpassword) => this.setState({ confpassword })}
                value={confpassword}
                secureTextEntry={true}
                placeholderTextColor={"rgb(128, 128, 128)"}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={styles.agreeBox}>
              <Image source={checkboxIcon} />
              <Text
                style={{
                  fontSize: 16,
                  color: "#808080",
                  marginLeft: 10,
                }}
              >
                I agree to term & conditions
              </Text>
            </View>
          </View>

          <View style={styles.Container}>
            <View style={styles.signinBox}>
              <TouchableOpacity style={styles.btnSignup}>
                <Text style={styles.text}>Sign Up</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.signinContainer}>
              <Text style={styles.textGrey}>
                Already have an account ?{" "}
                <Text onPress={this._handleOpenSignin} type="medium">
                  Sign In
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default Signup;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 90,
    marginBottom: 5,
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
  agreeBox: {
    paddingVertical: 20,
    paddingHorizontal: 50,
    width: WIDTH - 10,
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
  btnSignup: {
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
  signinContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
});
