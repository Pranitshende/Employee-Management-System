import React from "react";
import { GrLogout } from "react-icons/gr";

const Navbar = ({ authenticated, onLogout }) => {
  return (
    <div className="bg-dark d-flex justify-content-between align-items-center pe-4">
      <div
        className="d-flex align-items-center pt-2 ps-4"
        style={{ height: "60px" }}
      >
        <p className="text-white fs-5 fw-bold">Employee Management System</p>
      </div>
      {authenticated && (
        <div style={{ color: "white" }} className="me-2 text-center">
          <GrLogout onClick={onLogout} style={{ cursor: "pointer" }} />
          <div style={{ fontSize: "12px" }}>Logout</div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
