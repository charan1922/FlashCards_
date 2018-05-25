import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DeckList from "./components/DeckList";
import AddDeck from "./components/AddDeck";
import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppTabNavigator />
      </View>
    );
  }
}

const AppTabNavigator = createBottomTabNavigator(
  {
    DeckList: DeckList,
    AddDeck: AddDeck
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "DeckList") {
          iconName = "android";
        } else if (routeName === "AddDeck") {
          iconName = "android";
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
