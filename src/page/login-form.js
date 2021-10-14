import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import NavPage from "../navigation/navPage";

class LoginForm extends NavPage {
  static defaultProps = {
    ...NavPage.defaultProps,
    title: '登陆页面',
  };

  renderPage() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.context.navigation.push('Register')
          }}
        >
          <Text>注册页</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default LoginForm;
