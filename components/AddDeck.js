import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { saveDeckTitle } from "../utils/api";
import { addDeck } from "../actions";

export default class AddDeck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> addDeck </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
