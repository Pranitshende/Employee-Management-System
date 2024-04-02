import React, { useState } from "react";
import { saveEmployee } from "../Services/EmployeeServices";
import { useNavigate } from "react-router-dom";
import { checkFields } from "../Services/CheckFields";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Details from "./Details";
import img from "../images/back.png";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    mobileNumber: "",
    city: "",
    state: "",
    emailId: "",
    dateOfJoining: "",
    department: "",
    role: "",
    salary: "",
    attendance: "",
    totalLeavesEntitled: "",
    leavesBalance: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const handleSaveEmployee = (e) => {
    e.preventDefault();
    if (checkFields(employee)) {
      saveEmployee(employee)
        .then((response) => {
          console.log(response);
          navigate("/employeeList");
          toast.success("New employee added.");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      mobileNumber: "",
      city: "",
      state: "",
      emailId: "",
      dateOfJoining: "",
      department: "",
      role: "",
      salary: "",
      attendance: "",
      totalLeavesEntitled: "",
      leavesBalance: "",
    });
  };

  return (
    <>
      <div className="d-flex mt-4 container mx-auto justify-content-center">
        <div className="px-4 py-4">
          <div className="me-4">
            <img
              src={img}
              alt=" "
              className="position-absolute mt-1 "
              style={{ width: "25px", cursor: "pointer" }}
              onClick={() => navigate("/employeeList")}
            />
          </div>
          <div className="text-center">
            <h1 className="fs-4 fw-bold">Add New Employee</h1>
          </div>
          <Details employee={employee} handleChange={handleChange} />
          <div className="h-25 w-100 my-3">
            <button
              onClick={handleSaveEmployee}
              className="btn btn-success "
              style={{ width: "80px" }}
            >
              Save
            </button>
            <button
              onClick={reset}
              className="btn btn-danger ms-2 "
              style={{ width: "80px" }}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddEmployee;
