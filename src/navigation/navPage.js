// NavPage.js
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import PropTypes from "prop-types";

class NavPage extends React.Component {
  static defaultProps = {
    showBackButton: true
  }

  static contextTypes = {
    navigation: PropTypes.object,
  };

  renderNavigationTitle() {
    return this.props.title || '';
  }

  renderNavigationBar() {
    return (
      <View style={{
        height: 50,
        paddingHorizontal: 10,
        backgroundColor: 'tomato',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'flex-start'
      }}>
        {
          (this.context.navigation && this.context.navigation.isReady() && this.context.navigation.canGoBack()) &&
          !!this.props.showBackButton && <TouchableOpacity onPress={() => {
            this.context.navigation.goBack()
          }}>
            <Text style={{color: 'white', fontSize: 12}}>返回</Text>
          </TouchableOpacity>
        }
        <Text style={{color: 'white', fontSize: 16, marginLeft: 30}}>
          {this.renderNavigationTitle()}
        </Text>
      </View>
    );
  }

  renderPage() {
    return null;
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.renderNavigationBar()}
        {this.renderPage()}
      </View>
    )
  }
}

export default NavPage;
