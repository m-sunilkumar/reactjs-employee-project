import React, { useState } from "react";
import { Link } from "react-router-dom";
import { deleteEmployeeRecord } from "../../mockData/utils";

import "./employeeDetails.css";

const EmployeeDetails = (props) => {
  const { data } = props;
  const [employeeData, setEmployeeData] = useState([...data]);
  console.log("datatat", employeeData);
  const deleteHandler = (id) => {
    let updatedData = deleteEmployeeRecord(id);
    setEmployeeData(updatedData);
  };

  return (
    <main className="employee-list-wrap">
      <table>
        <tr className="table-row">
          {" "}
          <th>First Name</th>
          <th>Last Name</th>
          <th>Designation</th>
          <th>DOB</th>
          <th>Experience</th>
          <th>Profile Image</th>
          <th>action</th>
        </tr>

        {employeeData.map((itm, i) => (
          <tr>
            <td>{itm.firstName}</td>
            <td>{itm.lastName}</td>
            <td>{itm.designation}</td>
            <td>{itm.dob}</td>
            <td>{itm.experience}</td>
            <td>
              <img alt="profile-pic" src={itm.profilePicUrl} />
            </td>
            <td>
              <Link to={{ pathname: `/modify/edit/${itm.id}`, state: itm }}>
                Edit
              </Link>
              /
              <span
                style={{ cursor: "pointer" }}
                onClick={() => deleteHandler(itm.id)}
              >
                Delete
              </span>
            </td>
          </tr>
        ))}
      </table>
      <Link to="/modify/new">
        <button>Add New Employee</button>
      </Link>
    </main>
  );
};

export default EmployeeDetails;
