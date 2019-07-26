/*
 * Component Description
 */
import React from "react";
import _ from "lodash";
import { connect } from "react-redux";

import { employeeFormUpdate, employeeCreate } from "../actions/";
import { Button, Card, CardSection } from "./common/";
import EmployeeForm from "./EmployeeForm";

class EmployeeCreate extends React.Component {
  constructor(props) {
    super(props);

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeFormUpdate({ prop, value });
    });
  }

  render() {
    const { name, phone, shift } = this.props;
    const disabled = !name || !phone || !shift;

    return (
      <Card>
        <EmployeeForm {...this.props} />

        <CardSection>
          <Button disabled={disabled} onPress={this.onButtonPress}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || "Monday" });
  }
}

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
  { employeeCreate, employeeFormUpdate }
)(EmployeeCreate);
