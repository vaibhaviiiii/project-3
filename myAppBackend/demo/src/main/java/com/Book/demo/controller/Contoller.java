package com.Book.demo.controller;

//import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.Book.demo.entity.Books;
import com.Book.demo.service.ServiceIntf;
@RestController
public class Contoller {

@Autowired
private ServiceIntf service;

@GetMapping("/listBooks")
@CrossOrigin(origins="http://localhost:4200")
public  List<Books> listBooks()
{
	return service.listBooks();
}

@GetMapping("/fetch/{id}")
@CrossOrigin(origins="http://localhost:4200")
public  Optional<Books> listBook(@PathVariable int id)
{
	return service.viewBook(id);
}

@PostMapping("/addBook")
@CrossOrigin(origins="http://localhost:4200")
public Books addBook(@RequestBody Books book)
{
	 Books newBook=service.addBook(book);
	 return newBook;
}

@GetMapping("/remove/{id}")
@CrossOrigin(origins="http://localhost:4200")
public int removeBook(@PathVariable int id)
{
	 return service.removeBook(id);
}

}
