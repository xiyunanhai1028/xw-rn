import React from "react";
import { Provider } from "@ant-design/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Orientation from "react-native-orientation";
import Login from "./src/page/Login";
const Stack = createStackNavigator();
export default class App extends React.Component {
  componentWillMount() {
    Orientation.lockToLandscape();
  }
  render() {
    return (
      <Provider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home">
              {(props) => <Login {...props} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
