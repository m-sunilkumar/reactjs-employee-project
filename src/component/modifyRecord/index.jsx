import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { addEmployeeRecord, editEmployeeRecord } from "../../mockData/utils";
// import { history } from "react-router-dom";
import "./modifyRecord.css";

export default function ModifyRecord(props) {
  const [record, setRecord] = useState({});

  const { match } = props;

  const history = useHistory();

  const handleInputChange = (e, type) => {
    let obj = {};

    switch (type) {
      case "id":
        obj[type] = e.target.value;
        setRecord(obj);
        break;
      case "firstName":
        obj[type] = e.target.value;
        setRecord(obj);
        break;
      case "lastName":
        obj[type] = e.target.value;
        setRecord(obj);
        break;
      case "experience":
        obj[type] = e.target.value;
        setRecord(obj);
        break;
      case "designation":
        obj[type] = e.target.value;
        setRecord(obj);
        break;
      case "dob":
        obj[type] = e.target.value;
        setRecord(obj);
        break;
      case "profilePicUrl":
        obj[type] = e.target.value;
        setRecord(obj);
      default:
        break;
    }
  };
  const updateEmployeerecord = () => {
    if (window.location.href.includes("new")) {
      addEmployeeRecord(record);
      return;
    } else if (window.location.href.includes("edit")) {
      editEmployeeRecord(match.params.id, record);
      history.push("/", { state: record });
    }
  };
  return (
    <div className="input-wrap">
      <h2>Enter Employee details</h2>

      <input
        alt="first-name"
        type="text"
        placeholder="Enter id"
        onChange={(e) => handleInputChange(e, "id")}
      />
      <input
        alt="first-name"
        type="text"
        placeholder="Enter First Name"
        onChange={(e) => handleInputChange(e, "firstName")}
      />
      <input
        alt="last-name"
        type="text"
        placeholder="Enter Lat Name"
        onChange={(e) => handleInputChange(e, "lastName")}
      />
      <input
        alt="dob"
        type="text"
        placeholder="Enter dob"
        onChange={(e) => handleInputChange(e, "dob")}
      />
      <input
        alt="designation"
        type="text"
        placeholder="Enter designation"
        onChange={(e) => handleInputChange(e, "designation")}
      />
      <input alt="exp" type="text" />
      <input
        alt="profile-pic"
        type="file"
        onChange={(e) => handleInputChange(e, "profilePicUrl")}
      />

      <button onClick={updateEmployeerecord}>Submit</button>
    </div>
  );
}
