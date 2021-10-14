import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import NavPage from "../navigation/navPage";

class Register extends NavPage {
  static defaultProps = {
    ...NavPage.defaultProps,
    title: '注册页面',
  };

  renderPage() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.context.navigation.goBack()
          }}
        >
          <Text>返回</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Register;
