/*
 * Component Description
 */
import React from "react";
import { connect } from "react-redux";
import { View, Picker, Text } from "react-native";

import { employeeFormUpdate } from "../actions/";
import { CardSection, Input } from "./common/";

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, phone, shift } = this.props;

    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={name}
            onChangeText={value =>
              this.props.employeeFormUpdate({ prop: "name", value })
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={phone}
            onChangeText={value =>
              this.props.employeeFormUpdate({ prop: "phone", value })
            }
          />
        </CardSection>

        <CardSection style={{ flexDirection: "column" }}>
          <Text style={styles.pickerLabelStyle}>Shift</Text>

          <Picker
            onValueChange={value =>
              this.props.employeeFormUpdate({ prop: "shift", value })
            }
            selectedValue={shift}
            // style={{ flex: 1 }}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
    // flex: 1
  }
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return {
    name,
    phone,
    shift
  };
};

export default connect(
  mapStateToProps,
  { employeeFormUpdate }
)(EmployeeForm);
