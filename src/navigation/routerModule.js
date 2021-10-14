import React from "react";
import {Animated} from "react-native";
import {NavigationContainer } from "@react-navigation/native";
import { NavigatorConfig } from "./navigatorConfig";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default class RouterModule extends React.Component {
  static defaultProps = {
    config: {},
    page: []
  }

  constructor(props) {
    super(props);
    this.state = {
      fadeOutOpacity: new Animated.Value(0),
    }
  }

  componentDidMount() {
    Animated.timing(this.state.fadeOutOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start(() => {

    });
  }

  render() {
    const {fadeOutOpacity} = this.state;
    return (
      <Animated.View
        style={{
          flex: 1,
          opacity: fadeOutOpacity,
        }}>
        <NavigationContainer ref={this.props.navRef}>
          <Stack.Navigator {...NavigatorConfig.StackNavigatorDefaultConfig} {...this.props.config}>
            {
              this.props.page && this.props.page.map((item, index) => {
                item.options = item.options || {};
                item.params = item.params || {};
                const Component = item.view;
                return (
                  <Stack.Screen key={item.name}
                                name={item.name}
                                options={item.options}
                                {...item.config}
                  >
                    {
                      props => <Component {...props} {...item.params} title={item.title || undefined}/>
                    }
                  </Stack.Screen>
                )
              })
            }
          </Stack.Navigator>
        </NavigationContainer>
      </Animated.View>
    )
  }
}
