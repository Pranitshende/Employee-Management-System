import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const checkFields = (employee) => {
  const requiredFields = [
    "firstName",
    "lastName",
    "emailId",
    "dateOfJoining",
    "department",
    "role",
    "dateOfBirth",
    "gender",
    "mobileNumber",
    "city",
    "state",
    "salary",
    "totalLeavesEntitled",
  ];
  const emptyFields = requiredFields.filter((field) => !employee[field]);
  if (emptyFields.length > 0) {
    emptyFields.forEach((field) => {
      toast.error(`${field} cannot be empty`);
    });
    return false;
  }
  return true;
};
