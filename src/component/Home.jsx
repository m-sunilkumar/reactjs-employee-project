import React, { Component } from "react";
import EmployeeDetails from "./employeeDetails";
import { employeeData } from "../mockData/utils";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("props", props);
    const { location } = this.props;
    const newData= new Set([...employeeData,location.state])
    return (
      <main>
        <EmployeeDetails data={employeeData} />
      </main>
    );
  }
}

export default Home;
