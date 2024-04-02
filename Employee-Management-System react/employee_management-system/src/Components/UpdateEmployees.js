import { useEffect, useState, React } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../Services/EmployeeServices";
import { checkFields } from "../Services/CheckFields";
import img from "../images/back.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Details from "./Details";

const UpdateEmployees = () => {
  const navigate = useNavigate();

  const { id } = useParams();

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

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const handleUpdateEmployee = (e) => {
    e.preventDefault();
    if (checkFields(employee)) {
      updateEmployee(employee, id)
        .then((res) => {
          navigate("/employeeList");
          toast.success(`Employee ${id} updated successfully`);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEmployeeById(id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <div className="d-flex mt-4 justify-content-center">
        <div className="px-4 py-4 ">
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
            <h1 className="fs-4 fw-bold">Update Employee</h1>
          </div>
          <Details
            employee={employee}
            handleChange={handleChange}
            showFields={true}
          />
          <div className="h-25 w-100 my-3">
            <button
              onClick={handleUpdateEmployee}
              className="btn btn-success "
              style={{ width: "80px" }}
            >
              Update
            </button>
            <button
              onClick={() => navigate("/employeeList")}
              className="btn btn-danger ms-2 "
              style={{ width: "80px" }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateEmployees;
