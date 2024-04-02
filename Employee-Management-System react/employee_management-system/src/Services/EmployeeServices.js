import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employees";
const EMPLOYEE_API_BASE_URL_1 = "http://localhost:8080/api/allEmployees";
const EMPLOYEE_API_BASE_URL_2 = "http://localhost:8080/api/deleteEmployee";
const EMPLOYEE_API_BASE_URL_3 = "http://localhost:8080/api/employeeById";
const EMPLOYEE_API_BASE_URL_4 = "http://localhost:8080/api/updateEmployee";

export const saveEmployee = (employee) => {
  return axios.post(EMPLOYEE_API_BASE_URL, employee);
};

export const getAllEmployees = (employee) => {
  return axios.get(EMPLOYEE_API_BASE_URL_1, employee);
};

export const deleteEmployee = (id) => {
  return axios.delete(EMPLOYEE_API_BASE_URL_2 + "/" + id);
};

export const getEmployeeById = (id) => {
  return axios.get(EMPLOYEE_API_BASE_URL_3 + "/" + id);
};

export const updateEmployee = (employee, id) => {
  return axios.put(EMPLOYEE_API_BASE_URL_4 + "/" + id, employee);
};
