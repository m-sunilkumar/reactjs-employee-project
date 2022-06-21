import React, { Component } from "react";
import EmployeeDetails from "./employeeDetails";
import { employeeData } from "../mockData/utils";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("props", this.props);
    const { location } = this.props;
    let newData = [...employeeData];
    if (location.state) {
      newData = new Set([...employeeData, ...location.state]);
    }

    console.log("newData", [...newData]);
    return (
      <main>
        <EmployeeDetails data={[...newData]} />
      </main>
    );
  }
}

export default Home;
