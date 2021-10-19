package com.Book.demo.service;

import java.util.List;
import java.util.Optional;

import com.Book.demo.entity.Books;

public interface ServiceIntf {

	public List<Books> listBooks();
	public Optional<Books> viewBook(int id);
	public Books addBook(Books book);
	public int removeBook(int id);
}
 
