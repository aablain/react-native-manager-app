/*
 * Component Description
 */
import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import EmployeeForm from "./EmployeeForm";
import Communication from "react-native-communications";
import {
  employeeSaveChanges,
  employeeFormUpdate,
  deleteEmployee
} from "../actions/";
import { Button, Card, CardSection, Confirm } from "./common/";

class EmployeeEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };

    this.fireEmployee = this.fireEmployee.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
    this.onTextPress = this.onTextPress.bind(this);
  }

  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeFormUpdate({ prop, value });
    });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />

        <CardSection>
          <Button onPress={this.onButtonPress}>Save Changes</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress}>Text Schedule</Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: true })}>
            Fire
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onConfirm={this.fireEmployee}
          onCancel={() => this.setState({ showModal: false })}
          title="Are you sure you want to delete?"
        />
      </Card>
    );
  }

  fireEmployee() {
    console.log(`id is ${this.props.employee.uid}`);
    this.props.deleteEmployee({ id: this.props.employee.uid });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeSaveChanges({
      name,
      phone,
      shift,
      id: this.props.employee.uid
    });
  }

  onTextPress() {
    const { phone, shift } = this.props;

    Communication.text(phone, `Your upcoming shift is on ${shift}`);
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  console.log(state.employeeForm);

  return {
    name,
    phone,
    shift
  };
};

export default connect(
  mapStateToProps,
  { employeeSaveChanges, employeeFormUpdate, deleteEmployee }
)(EmployeeEdit);
