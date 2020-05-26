import * as React from "react";
import { View, StyleSheet, ImageBackground, Image, Text } from "react-native";
import { InputItem, Button } from "@ant-design/react-native";
class Login extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/login_bg.png")}
        style={styles.container}
      >
        <View style={styles.header}>
          <Image
            source={require("../assets/logo-yr.png")}
            style={{ width: 50, height: 50 }}
          />
          <Text style={{ color: "white", fontSize: 20 }}>
            客户经理移动作业平台登录
          </Text>
        </View>
        <View style={styles.loginContainer}>
          <View style={styles.inputWrapper}>
            <InputItem last clear />
          </View>
          <View style={[styles.inputWrapper, { marginTop: 10 }]}>
            <InputItem last type="password" />
          </View>
          <Button
            type="primary"
            style={{ width: 400, marginTop: 20 }}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            登录
          </Button>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputWrapper: {
    width: 400,
    height: 50,
    borderWidth: 1,
    borderColor: "white",
    borderStyle: "solid",
    borderRadius: 4,
  },
});
export default Login;
