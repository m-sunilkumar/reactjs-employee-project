//main employeeData
export const employeeData = [
  {
    id: "1",
    firstName: "sunil",
    lastName: "kumar",
    designation: "engineer",
    dob: "22-05-1995",
    experience: "4",
    profilePicUrl: "",
  },
];

//add employee to the list
export const addEmployeeRecord = (details) => {
  if (details.name) {
    employeeData.push(details);
  }
  return;
};

//delete employee from the list
export const deleteEmployeeRecord = (id) => {
  let temp = [];

  //return employee record other than deleted record
  if (id) {
    const filterData = employeeData.filter((item, i) => item.id !== id);
    employeeData = [...filterData];
    return employeeData;
  }
};

//update employee record from the list
export const editEmployeeRecord = (id, details) => {
  const findRecord = employeeData.find((element, i) => element.id === id);
  if (findRecord) {
    employeeData.forEach((elemnt, i) => {
      if (elemnt.id === id) {
        elemnt = { ...details };
      }
    });
    return employeeData;
  }
};
