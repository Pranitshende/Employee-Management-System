package com.project.Employee.controller;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.project.Employee.entity.EmployeeEntity;
import com.project.Employee.service.EmployeeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

	@PostMapping("/api/employees")
	public EmployeeEntity createEmployee(@RequestBody EmployeeEntity employeeEntity) {
		return employeeService.createEmployee(employeeEntity);
	}

	@GetMapping("/api/allEmployees")
	public ArrayList<EmployeeEntity> getAllEmployees() {
		return employeeService.getAllEmployees();
	}

	@DeleteMapping("/api/deleteEmployee/{id}")
	public ResponseEntity<Void> deleteEmployee(@PathVariable Long id) {
		boolean deleteResult = employeeService.deleteEmployee(id);
		if (deleteResult) {
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@GetMapping("/api/employeeById/{id}")
	public EmployeeEntity getEmployeeById(@PathVariable Long id) {
		return employeeService.getEmployeeById(id);
	}

	@PutMapping("/api/updateEmployee/{id}")
	public EmployeeEntity updateEmployee(@PathVariable Long id, @RequestBody EmployeeEntity employeeEntity) {
		return employeeService.updateEmployee(id, employeeEntity);
	}
}
