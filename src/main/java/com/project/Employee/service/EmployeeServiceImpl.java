package com.project.Employee.service;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import com.project.Employee.entity.EmployeeEntity;
import com.project.Employee.repository.EmployeeRepository;
@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	public EmployeeEntity createEmployee(EmployeeEntity employeeEntity) {
			return employeeRepository.save(employeeEntity);
	}
	
//	public EmployeeEntity createEmployee(EmployeeEntity employeeEntity) {
//		EmployeeEntity employeeEntity = new EmployeeEntity();
//		
//		BeanUtils.copyProperties(employee, employeeEntity);
//		return employeeRepository.save(employeeEntity);		
//	}

	public ArrayList<EmployeeEntity> getAllEmployees() {
		ArrayList<EmployeeEntity> list = (ArrayList<EmployeeEntity>) employeeRepository.findAll();
		return list;
	}

	public boolean deleteEmployee(Long id) {
		try {
			employeeRepository.deleteById(id);
			return true;
		} 
		catch(EmptyResultDataAccessException e) {
			System.out.println(e);
			return false;
		}
		catch (Exception e) {
			System.out.println(e);
			return false;
		}
	}

	public EmployeeEntity getEmployeeById(Long id) {
		return employeeRepository.findById(id).get();
		
	}

	public EmployeeEntity updateEmployee(Long id, EmployeeEntity employeeEntity) {
		EmployeeEntity employee = employeeRepository.findById(id).get();
		employee.setFirstName(employeeEntity.getFirstName());
		employee.setLastName(employeeEntity.getLastName());
		employee.setDateOfBirth(employeeEntity.getDateOfBirth());
		employee.setGender(employeeEntity.getGender());
		employee.setMobileNumber(employeeEntity.getMobileNumber());
		employee.setCity(employeeEntity.getCity());
		employee.setState(employeeEntity.getState());
		employee.setEmailId(employeeEntity.getEmailId());
		employee.setDateOfJoining(employeeEntity.getDateOfJoining());
		employee.setDepartment(employeeEntity.getDepartment());
		employee.setRole(employeeEntity.getRole());
		employee.setSalary(employeeEntity.getSalary());
		employee.setAttendance(employeeEntity.getAttendance());
		employee.setTotalLeavesEntitled(employeeEntity.getTotalLeavesEntitled());
		employee.setLeavesBalance(employeeEntity.getLeavesBalance());
		
		employeeRepository.save(employee);
		return employeeEntity;
	}
	



}
