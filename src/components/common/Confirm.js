/*
 * Component Description
 */
import React from "react";
import { Modal, Text, View } from "react-native";
import { Button } from "./Button";
import { CardSection } from "./CardSection";

export default props => {
  const { cardSectionStyle, textStyle, containerStyle } = styles;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      onRequestClose={() => {}}
      visible={!!props.visible}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{props.title}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={props.onConfirm}>Yes</Button>
          <Button onPress={props.onCancel}>Cancel</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justContent: "center"
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    position: "relative",
    flex: 1,
    justifyContent: "center"
  }
};
