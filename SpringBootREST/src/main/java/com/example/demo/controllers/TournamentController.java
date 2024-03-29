package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Tournament;
import com.example.demo.services.TournamentService;

@CrossOrigin(origins = "http://szdb.s3-website-us-east-1.amazonaws.com")
@RestController
public class TournamentController {
	
	@Autowired
	TournamentService tservice;
	
	@GetMapping("/getTournaments")
	public List<Tournament> getTournaments()
	{
		return tservice.getAll();
	}
	
	@PostMapping("/createTournament")
	public Tournament saveTournament(@RequestBody Tournament t)
	{
		return tservice.saveTournament(t);
	}
	
	@GetMapping("/getTourById")
	public List<Tournament> getTourById(@RequestParam ("uid") int id)
	{
		return tservice.getTourById(id);
	}

}
