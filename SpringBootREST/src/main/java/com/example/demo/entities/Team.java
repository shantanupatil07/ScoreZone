package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="teams")
public class Team {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="TEAM_ID")
	int team_id;
	
	@Column(name="TEAM_NAME")
	String team_name;
	
	@Column(name="TEAM_MANAGER_ID")
	String team_manager_id;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column(name="REGISTRATION_DATE")
	Date registration_date;
	
	@Column(name="TEAM_DESCRIPTION")
	String team_description;

	public Team() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Team(int team_id, String team_name, String team_manager_id, Date registration_date,
			String team_description) {
		super();
		this.team_id = team_id;
		this.team_name = team_name;
		this.team_manager_id = team_manager_id;
		this.registration_date = registration_date;
		this.team_description = team_description;
	}

	public int getTeam_id() {
		return team_id;
	}

	public void setTeam_id(int team_id) {
		this.team_id = team_id;
	}

	public String getTeam_name() {
		return team_name;
	}

	public void setTeam_name(String team_name) {
		this.team_name = team_name;
	}

	public String getTeam_manager_id() {
		return team_manager_id;
	}

	public void setTeam_manager_id(String team_manager_id) {
		this.team_manager_id = team_manager_id;
	}

	public Date getRegistration_date() {
		return registration_date;
	}

	public void setRegistration_date(Date registration_date) {
		this.registration_date = registration_date;
	}

	public String getTeam_description() {
		return team_description;
	}

	public void setTeam_description(String team_description) {
		this.team_description = team_description;
	}

	

}
