package com.Book.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Book.demo.entity.Books;
import com.Book.demo.repository.RepositoryIntf;

@Service
public class ServiceImpl implements ServiceIntf{

	@Autowired
	private RepositoryIntf repo;

	@Override
	public List<Books> listBooks() {
		// TODO Auto-generated method stub

		List<Books> books=new ArrayList<Books>();
		books=repo.findAll();
		return books;
	}

	@Override
	public Optional<Books> viewBook(int id) {
		// TODO Auto-generated method stub
		return repo.findById(id);
	}

	@Override
	public Books addBook(Books book) {
		// TODO Auto-generated method stub
		repo.save(book);
		return book;
	}

	@Override
	public int removeBook(int id) {
		// TODO Auto-generated method stub
		repo.deleteById(id);
		return id;
	}

}
