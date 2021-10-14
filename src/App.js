import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import { navigationRef} from "./navigation/navigationRef";
import RouterModule from "./navigation/routerModule";
import LoginForm from "./page/login-form";
import PropTypes from "prop-types"
import Register from "./page/register";
const IndexRouterConfig = [
  {
    name: 'LoginForm', // 必填，页面名称，用于跳转
    view: LoginForm, // 必填，继承于NavPage的页面组件
    title: '', // 选填，页面的导航标题
    params: {}, // 选填，给页面组件的props
    options: {}, // 选填，<Stack.Screen>的options，可配置页面动画效果
    config: {}, // 选填，<Stack.Screen>的整体props，会覆盖上面的取值
  },
  {
    name: 'Register',
    view: Register,
  }
]

class App extends React.Component {
  static childContextTypes = {
    navigation: PropTypes.object
  };
  getChildContext() {
    return {
      navigation: navigationRef
    };
  }
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <StatusBar barStyle={'light-content'} />
        <RouterModule
          page={IndexRouterConfig}
          config={{
            // 可使用这个config覆盖默认的页面配置即NavigatorConfig
            initialRouteName: 'LoginForm'
          }}
          navRef={navigationRef}
        />
      </SafeAreaView>
    );
  }
}

export default App;
