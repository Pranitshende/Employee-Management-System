import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteEmployee, getAllEmployees } from "../Services/EmployeeServices";
import Employee from "./Employee";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { toast } from "react-toastify";

const EmployeeList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getAllEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleDeleteEmployee = (e, id) => {
    e.preventDefault();
    confirmAlert({
      title: "Confirm Delete",
      message: `Do you want to delete Employee ${id}?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            deleteEmployee(id).then((res) => {
              if (employees) {
                setEmployees((prevElement) => {
                  return prevElement.filter((employee) => employee.id !== id);
                });
                toast.success(`Employee ${id} deleted`);
              }
            });
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <div className="mx-3 my-4" style={{ width: "1240px" }}>
      <div>
        <button
          onClick={() => navigate("/addEmployee")}
          className="btn btn-success "
        >
          Add Employee
        </button>
      </div>
      <div className="d-flex mt-2 text-center">
        <table className="table table-striped table-hover">
          <thead className="text-uppercase px table-dark ">
            <tr>
              <th className="col-1">ID</th>
              <th className="col-3">First Name</th>
              <th className="col-3">Last Name</th>
              <th className="col-3">Email Id</th>
              <th className="col-2">Actions</th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {employees.map((employee) => (
                <Employee
                  employee={employee}
                  deleteEmployee={handleDeleteEmployee}
                  key={employee.id}
                />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};
export default EmployeeList;
