import React from "react";
import {
  Actions as RouterActions,
  Router,
  Scene
} from "react-native-router-flux";

import LoginForm from "./components/LoginForm";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeEdit from "./components/EmployeeEdit";
import EmployeeList from "./components/EmployeeList";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        {/* Group */}
        <Scene key="auth">
          <Scene
            initial
            key="login"
            component={LoginForm}
            title="Please Login"
          />
        </Scene>

        {/* Group */}
        <Scene key="main">
          <Scene
            initial
            key="employeeList"
            component={EmployeeList}
            onRight={() => RouterActions.employeeCreate()}
            rightTitle="Add"
            title="Employees"
          />

          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
          />

          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="Edit Employee"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
