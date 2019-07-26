/*
 * Component Description
 */
import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import { Actions as RouterActions } from "react-native-router-flux";
import { CardSection } from "./common/";

export default class EmployeeListItem extends React.Component {
  constructor(props) {
    super(props);

    this.onRowPress = this.onRowPress.bind(this);
  }

  render() {
    const { employee } = this.props;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{employee.name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  onRowPress() {
    RouterActions.employeeEdit({ employee: this.props.employee });
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};
