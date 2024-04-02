package com.project.Employee.service;

import java.util.ArrayList;
import com.project.Employee.entity.EmployeeEntity;

public interface EmployeeService {

	 EmployeeEntity createEmployee(EmployeeEntity employeeEntity);

	ArrayList<EmployeeEntity> getAllEmployees();

	boolean deleteEmployee(Long id);

	EmployeeEntity getEmployeeById(Long id);

	EmployeeEntity updateEmployee(Long id,EmployeeEntity employeeEntity);

}
