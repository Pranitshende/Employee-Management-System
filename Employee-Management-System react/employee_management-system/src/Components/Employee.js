import { useNavigate } from "react-router-dom";

const Employee = ({ employee, deleteEmployee }) => {
  const navigate = useNavigate();

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };

  const viewDetails = (e, id) => {
    e.preventDefault();
    navigate(`/employeeDetails/${id}`);
  };

  return (
    <tr key={employee.id}>
      <td>{employee.id}</td>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.emailId}</td>
      <td className="fw-bold">
        <a
          onClick={(e, id) => viewDetails(e, employee.id)}
          style={{ cursor: "pointer" }}
          className="text-success text-decoration-none px-3"
        >
          Details
        </a>
        <a
          onClick={(e, id) => editEmployee(e, employee.id)}
          style={{ cursor: "pointer" }}
          className="text-decoration-none px-3"
        >
          Edit
        </a>
        <a
          onClick={(e, id) => deleteEmployee(e, employee.id)}
          className="text-danger text-decoration-none px-3 "
          style={{ cursor: "pointer" }}
        >
          Delete
        </a>
      </td>
    </tr>
  );
};
export default Employee;
