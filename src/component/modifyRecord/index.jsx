import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { addEmployeeRecord, editEmployeeRecord } from "../../mockData/utils";
import { usePrevious } from "../../hooks/index";
// import { history } from "react-router-dom";
import "./modifyRecord.css";

export default function ModifyRecord(props) {
  const [record, setRecord] = useState({});
  const [populateRecord, setPopulateRecord] = useState({});
  const history = useHistory();
  const prevRecord = usePrevious(record);
  const { match } = props;

  useEffect(() => {
    if (history.location.state && history.location.pathname.includes("edit")) {
      setPopulateRecord(history.location.state);
    }
  });

  const handleInputChange = (e, type) => {
    switch (type) {
      case "id":
        setRecord({ ...prevRecord, [type]: e.target.value });
        break;
      case "firstName":
        setRecord({ ...prevRecord, [type]: e.target.value });
        break;
      case "lastName":
        setRecord({ ...prevRecord, [type]: e.target.value });
        break;
      case "experience":
        setRecord({ ...prevRecord, [type]: e.target.value });
        break;
      case "designation":
        setRecord({ ...prevRecord, [type]: e.target.value });
        break;
      case "dob":
        setRecord({ ...prevRecord, [type]: e.target.value });
        break;
      case "profilePicUrl":
        console.log("eeee", e, e.target.files);
        let imgUrl = URL.createObjectURL(e.target.files[0]);
        setRecord({ ...prevRecord, [type]: imgUrl });
      default:
        break;
    }
  };
  const updateEmployeerecord = () => {
    if (window.location.href.includes("new")) {
      addEmployeeRecord(record);
      history.push("/", [record]);
      return;
    } else if (window.location.href.includes("edit")) {
      let updatedEmployeeData = editEmployeeRecord(match.params.id, record);
      history.push("/", updatedEmployeeData);
    }
  };
  return (
    <div className="input-wrap">
      <h2>Enter Employee details</h2>

      <input
        alt="id"
        type="text"
        placeholder="Enter id"
        value={record["id"] ? record["id"] : populateRecord["id"]}
        onChange={(e) => handleInputChange(e, "id")}
      />
      <input
        alt="first-name"
        type="text"
        placeholder="Enter First Name"
        value={
          record["firstName"]
            ? record["firstName"]
            : populateRecord["firstName"]
        }
        onChange={(e) => handleInputChange(e, "firstName")}
      />
      <input
        alt="last-name"
        type="text"
        placeholder="Enter Lat Name"
        value={
          record["lastName"] ? record["lastName"] : populateRecord["lastName"]
        }
        onChange={(e) => handleInputChange(e, "lastName")}
      />
      <input
        alt="dob"
        type="text"
        placeholder="Enter dob"
        value={record["dob"] ? record["dob"] : populateRecord["dob"]}
        onChange={(e) => handleInputChange(e, "dob")}
      />
      <input
        alt="designation"
        type="text"
        placeholder="Enter designation"
        value={
          record["designation"]
            ? record["designation"]
            : populateRecord["designation"]
        }
        onChange={(e) => handleInputChange(e, "designation")}
      />
      <input
        alt="exp"
        type="text"
        placeholder="Enter Years of Experience"
        value={
          record["experience"]
            ? record["experience"]
            : populateRecord["experience"]
        }
        onChange={(e) => handleInputChange(e, "experience")}
      />
      <input
        alt="profile-pic"
        type="file"
        value={
          record["profilePicUrl"]
            ? record["profilePicUrl"]
            : populateRecord["profilePicUrl"]
        }
        onChange={(e) => handleInputChange(e, "profilePicUrl")}
      />

      <button onClick={updateEmployeerecord}>Submit</button>
    </div>
  );
}
