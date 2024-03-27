package com.project.Employee.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name="employees")
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String firstName;
	private String lastName;
	private String dateOfBirth;
	private String gender;
	private String mobileNumber;
	private String city;
	private String state;
	private String emailId;
	private String dateOfJoining;
	private String role;
	private String department;
	private String salary;
	private String attendance;
	private String totalLeavesEntitled;
	private String leavesBalance;
}
