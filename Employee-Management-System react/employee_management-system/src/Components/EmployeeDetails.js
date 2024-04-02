import { useEffect, useState } from "react";
import { getEmployeeById, updateEmployee } from "../Services/EmployeeServices";
import { useNavigate, useParams } from "react-router-dom";
import img from "../images/back.png";

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    id: id,
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

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const response = await getEmployeeById(id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEmployeeDetails();
  }, []);

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };

  return (
    <div
      className="card w-75 my-5 shadow-lg position-relative"
      style={{ marginLeft: "150px" }}
    >
      <img
        src={img}
        className="position-absolute mt-3 ms-3"
        style={{ width: "25px", cursor: "pointer" }}
        onClick={() => navigate("/employeeList")}
      />
      <div className="card-header text-center bg-dark">
        <h2 className="mb-2 fs-4 fw-bold text-primary">Employee Details</h2>
      </div>
      <div className="card-body fs-5">
        <p className="card-text">
          <label className="fw-bold"> Name:</label>{" "}
          {`${employee.firstName} ${employee.lastName}`}
        </p>
        <p className="card-text">
          <label className="fw-bold">Email:</label> {employee.emailId}
        </p>
        <p className="card-text">
          <label className="fw-bold"> Date of Birth:</label>{" "}
          {employee.dateOfBirth}
        </p>
        <p className="card-text">
          <label className="fw-bold">Gender: </label> {employee.gender}
        </p>
        <p className="card-text">
          <label className="fw-bold"> Mobile Number:</label>{" "}
          {employee.mobileNumber}
        </p>
        <p className="card-text">
          <label className="fw-bold"> City:</label> {employee.city}
        </p>
        <p className="card-text">
          <label className="fw-bold"> State:</label> {employee.state}
        </p>
        <p className="card-text">
          <label className="fw-bold"> Role:</label> {employee.role}
        </p>
        <p className="card-text">
          <label className="fw-bold"> Department:</label> {employee.department}
        </p>
        <p className="card-text">
          <label className="fw-bold"> Date of Joining:</label>{" "}
          {employee.dateOfJoining}
        </p>
        <p className="card-text">
          <label className="fw-bold"> Salary:</label> {employee.salary}
        </p>
        <p className="card-text">
          <label className="fw-bold"> Total Leaves Entitled:</label>{" "}
          {employee.totalLeavesEntitled}
        </p>
        <p className="card-text">
          <label className="fw-bold"> Attendance:</label> {employee.attendance}
        </p>
        <p className="card-text">
          <label className="fw-bold"> Leaves Balance:</label>{" "}
          {employee.leavesBalance}
        </p>
      </div>
      <div>
        <button
          className="btn btn-success mx-3 my-4"
          style={{ width: "80px" }}
          onClick={(e, id) => editEmployee(e, employee.id)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};
export default EmployeeDetails;
