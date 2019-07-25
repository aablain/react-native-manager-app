import React from "react";
import { Router, Scene } from "react-native-router-flux";

import LoginForm from "./components/LoginForm";
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
            key="employeeList"
            component={EmployeeList}
            title="Employees"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
