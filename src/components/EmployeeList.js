/*
 * Component Description
 */
import React from "react";
import _ from "lodash";
import { FlatList, Text, View } from "react-native";
import { connect } from "react-redux";

import EmployeeListItem from "./EmployeeListItem";
import { employeesFetch } from "../actions";

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    this.props.employeesFetch();
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <FlatList
          data={this.props.employees}
          renderItem={this.renderItem}
          keyExtractor={employee => employee.uid}
        />
      </View>
    );
  }

  renderItem({ item }) {
    return <EmployeeListItem employee={item} />;
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return {
      ...val,
      uid
    };
  });

  return {
    employees
  };
};

export default connect(
  mapStateToProps,
  { employeesFetch }
)(EmployeeList);
