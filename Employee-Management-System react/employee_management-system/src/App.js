import "./App.css";
import Navbar from "./Components/Navbar";
import AddEmployee from "./Components/AddEmployee";
import EmployeeList from "./Components/EmployeesList";
import { Route, Routes, useNavigate } from "react-router-dom";
import UpdateEmployees from "./Components/UpdateEmployees";
import EmployeeDetails from "./Components/EmployeeDetails";
import Login from "./Components/Login";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function App() {
  const navigate = useNavigate();

  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = async (username, password) => {
    if (username === "pranit" && password === "123") {
      setAuthenticated(true);
      toast.success("Logged in!");
    } else if (username !== "pranit" || password !== "123") {
      console.error("authentication failed");
      toast.error("Invalid Credentials");
    }
  };
  const handleLogout = () => {
    confirmAlert({
      title: "Logout",
      message: "Do you want to logout?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            setAuthenticated(false);
            navigate("/login");
            toast.success("Logged out!");
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  useEffect(() => {
    if (!authenticated) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Navbar authenticated={authenticated} onLogout={handleLogout} />
      <Routes>
        <Route
          path="/login"
          element={
            <Login onLogin={handleLogin} authenticated={authenticated} />
          }
        />
        {authenticated ? (
          <>
            <Route path="/" element={<EmployeeList />} />
            <Route path="/employeeList" element={<EmployeeList />} />
            <Route path="/addEmployee" element={<AddEmployee />} />
            <Route path="/editEmployee/:id" element={<UpdateEmployees />} />
            <Route path="/employeeDetails/:id" element={<EmployeeDetails />} />
          </>
        ) : (
          <Route
            path="/"
            element={
              <Login onLogin={handleLogin} authenticated={authenticated} />
            }
          />
        )}
      </Routes>
    </>
  );
}

export default App;
