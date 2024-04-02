import { useEffect, useState } from "react";

const Details = ({ employee, handleChange, showFields }) => {
  const [additional, setAdditional] = useState(false);

  useEffect(() => {
    setAdditional(showFields);
  }, []);
  return (
    <>
      <div className="row ps-5 pb-3 mt-4 shadow-lg">
        <h1 className="fs-5 mt-3">Personal Details</h1>
        <div className="col-6 ps-5">
          <div className="w-100 my-3">
            <label className="d-flex"> First Name</label>
            <input
              type="text"
              name="firstName"
              value={employee.firstName}
              onChange={(e) => handleChange(e)}
              className="form-control border border-dark-subtle mt-2"
              style={{ width: "350px" }}
              required
            />
          </div>
          <div className="w-100 my-3">
            <label className="d-flex"> Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={employee.dateOfBirth}
              onChange={(e) => handleChange(e)}
              className="form-control border border-dark-subtle mt-2 "
              style={{ width: "350px" }}
            />
          </div>
          <div className="w-100 my-3">
            <label className="d-flex"> Mobile Number</label>
            <input
              type="number"
              name="mobileNumber"
              value={employee.mobileNumber}
              onChange={(e) => handleChange(e)}
              className="form-control border border-dark-subtle mt-2 "
              style={{ width: "350px" }}
            />
          </div>
          <div className="w-100 my-3">
            <label className="d-flex"> City</label>
            <input
              type="text"
              name="city"
              value={employee.city}
              onChange={(e) => handleChange(e)}
              className="form-control border border-dark-subtle mt-2 "
              style={{ width: "350px" }}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="w-100 my-3">
            <label className="d-flex"> Last Name</label>
            <input
              type="text"
              name="lastName"
              value={employee.lastName}
              onChange={(e) => handleChange(e)}
              className="form-control border border-dark-subtle mt-2"
              style={{ width: "350px" }}
            />
          </div>
          <div className="w-100 my-3">
            <label className="d-flex"> Gender</label>
            <input
              type="text"
              name="gender"
              value={employee.gender}
              onChange={(e) => handleChange(e)}
              className="form-control border border-dark-subtle mt-2 "
              style={{ width: "350px" }}
            />
          </div>
          <div className="w-100 my-3">
            <label className="d-flex"> Email</label>
            <input
              type="email"
              name="emailId"
              value={employee.emailId}
              onChange={(e) => handleChange(e)}
              className="form-control border border-dark-subtle mt-2 "
              style={{ width: "350px" }}
            />
          </div>
          <div className="w-100 my-3">
            <label className="d-flex"> State</label>
            <input
              type="text"
              name="state"
              value={employee.state}
              onChange={(e) => handleChange(e)}
              className="form-control border border-dark-subtle mt-2 "
              style={{ width: "350px" }}
            />
          </div>
        </div>
      </div>
      <div className="row shadow-lg my-5 ps-5 py-3">
        <h1 className="fs-5 mt-3">Other Details</h1>
        <div className="col-6 ps-5">
          <div className="w-100 my-3">
            <label className="d-flex"> Role</label>
            <input
              type="text"
              name="role"
              value={employee.role}
              onChange={(e) => handleChange(e)}
              className="form-control border border-dark-subtle mt-2 "
              style={{ width: "350px" }}
            />
          </div>
          <div className="w-100 my-3">
            <label className="d-flex"> Date Of Joining</label>
            <input
              type="date"
              name="dateOfJoining"
              value={employee.dateOfJoining}
              onChange={(e) => handleChange(e)}
              className="form-control border border-dark-subtle mt-2 "
              style={{ width: "350px" }}
            />
          </div>
          <div className="w-100 my-3">
            <label className="d-flex"> Total Leaves Entitled</label>
            <input
              type="text"
              name="totalLeavesEntitled"
              value={employee.totalLeavesEntitled}
              onChange={(e) => handleChange(e)}
              className="form-control border border-dark-subtle mt-2 "
              style={{ width: "350px" }}
            />
          </div>
          {additional && (
            <div className="w-100 my-3">
              <label className="d-flex"> Leaves Balance </label>
              <input
                type="text"
                name="leavesBalance"
                value={employee.leavesBalance}
                onChange={(e) => handleChange(e)}
                className="form-control border border-dark-subtle mt-2 "
                style={{ width: "350px" }}
              />
            </div>
          )}
        </div>
        <div className="col-6">
          <div className="w-100 my-3">
            <label className="d-flex"> Department</label>
            <input
              type="text"
              name="department"
              value={employee.department}
              onChange={(e) => handleChange(e)}
              className="form-control border border-dark-subtle mt-2 "
              style={{ width: "350px" }}
            />
          </div>
          <div className="w-100 my-3">
            <label className="d-flex"> Salary</label>
            <input
              type="text"
              name="salary"
              value={employee.salary}
              onChange={(e) => handleChange(e)}
              className="form-control border border-dark-subtle mt-2 "
              style={{ width: "350px" }}
            />
          </div>
          {additional && (
            <div className="w-100 my-3">
              <label className="d-flex"> Attendance</label>
              <input
                type="text"
                name="attendance"
                value={employee.attendance}
                onChange={(e) => handleChange(e)}
                className="form-control border border-dark-subtle mt-2 "
                style={{ width: "350px" }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Details;
