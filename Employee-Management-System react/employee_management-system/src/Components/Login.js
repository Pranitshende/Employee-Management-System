import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin, authenticated }) => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };
  if (authenticated) {
    navigate("/");
  }
  return (
    <>
      <div className="d-flex justify-content-center">
        <div>
          <label className="fs-3 fw-bold position-absolute mt-5">
            Admin Login
          </label>
        </div>
        <div className="mt-2">
          <form
            onSubmit={handleSubmit}
            className="px-5 border shadow-lg position-relative"
            style={{ marginTop: "100px", width: "400px", height: "300px" }}
          >
            <div className="mt-4">
              <label className="form-label fw-bold">Username:</label>
              <div>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="form-label fw-bold">Password:</label>
              <div>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <br />
            <div>
              <button className="btn btn-primary mt-2">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
