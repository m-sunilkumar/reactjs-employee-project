import React from "react";
import { Link } from "react-router-dom";
import { deleteEmployeeRecord } from "../../mockData/utils";

import "./employeeDetails.css";

const EmployeeDetails = (props) => {
  const { data } = props;

  const deleteHandler = (id) => {
    deleteEmployeeRecord(id);
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

        {data.map((itm, i) => (
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
              <Link to={`/modify/edit/${itm.id}`}>Edit</Link>/
              <span onClick={() => deleteHandler(itm.id)}>Delete</span>
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
